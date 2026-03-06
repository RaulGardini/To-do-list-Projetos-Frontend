import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthService } from "../../service/AuthService";
import { ProjetoService } from "../../service/ProjetoService";
import { TarefaProjetoService } from "../../service/Tarefaprojetoservice";
import type { ReadProjetoDTO } from "../../service/models/ProjetoModels";
import type { ReadTarefaProjetoDTO } from "../../service/models/TarefaProjetoModels";
import celebrate1 from "../../assets/gifs/celebrate1.gif";
import celebrate2 from "../../assets/gifs/celebrate2.gif";
import EditProjectModal from "./editProject/EditProjectModal";
import {
  Page, Header, HeaderLeft, LogoText, BackButton, ProjectTitle, HeaderRight,
  EditButton, DeleteProjectButton, UserName,
  MainLayout, Sidebar, SidebarSection, SidebarLabel, SidebarValue, SidebarValueSmall,
  StatusBadgeSidebar, SidebarDivider, SidebarTitle, StackBadge,
  SidebarButton, StatusRow, StatusDot, StatusSelect,
  AlterButton, CloseSidebarTask, OtherTasksLabel, OtherTaskItem,
  ColumnsArea, Column, ColumnHeader, ColumnTitle, ColumnStackLabel, ColumnStackBadge,
  ColumnTasksBar, ColumnTasksLabel, ColumnStatusRow, ColumnStatusSelect, AddTaskButton,
  TaskList, TaskCard, TaskName, TaskStatusDot,
  AddTaskInline, AddTaskInput, Loading, DeleteTaskButton,
  DateInput, PrazoRow, PrazoStatus, NewButtonGlowPink, NewButtonGlowBlue, CelebrationGif,
  ObsTextArea
} from "./ProjectView.style";

const COLUMNS = [
  { key: "frontend", title: "Frontend", color: "green" as const },
  { key: "backend", title: "Backend", color: "yellow" as const },
  { key: "banco", title: "Banco de dados", color: "purple" as const },
  { key: "geral", title: "Tasks genericas", color: undefined },
];

const statusLabel = (s: string) => {
  switch (s) {
    case "C": return "Concluído";
    case "E": return "Em andamento";
    case "P": return "Pendente";
    default: return s;
  }
};

const formatDate = (d: string | null) => {
  if (!d) return "—";
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
};

const isOverdue = (dataFinal: string | null, status: string) => {
  if (!dataFinal || status === "C") return false;
  return new Date(dataFinal) < new Date();
};

const ProjectView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [projeto, setProjeto] = useState<ReadProjetoDTO | null>(null);
  const [tarefas, setTarefas] = useState<ReadTarefaProjetoDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");

  const [selectedTask, setSelectedTask] = useState<ReadTarefaProjetoDTO | null>(null);
  const [taskStatusEdit, setTaskStatusEdit] = useState("");

  const [addingColumn, setAddingColumn] = useState<string | null>(null);
  const [newTaskName, setNewTaskName] = useState("");

  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationGif, setCelebrationGif] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);

  // Filtro de status por coluna
  const [columnFilters, setColumnFilters] = useState<Record<string, string>>({
    frontend: "", backend: "", banco: "", geral: "",
  });

  useEffect(() => {
    if (!AuthService.isAuthenticated()) { navigate("/"); return; }
    const token = AuthService.getToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUserName(
          payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ||
          payload.name || "Usuário"
        );
      } catch { setUserName("Usuário"); }
    }
    loadData();
  }, [id, navigate]);

  const loadData = async () => {
    try {
      const pid = Number(id);
      const [p, t] = await Promise.all([
        ProjetoService.getById(pid),
        TarefaProjetoService.getAllByProjeto(pid),
      ]);
      setProjeto(p);
      setTarefas(t);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  const handleAddTask = async (tipo: string) => {
    if (!newTaskName.trim() || !id) return;
    try {
      await TarefaProjetoService.create({
        projetoId: Number(id), nome: newTaskName.trim(), status: "P", tipo,
      });
      setNewTaskName(""); setAddingColumn(null); loadData();
    } catch (err) { console.error(err); }
  };

  const handleUpdateTaskStatus = async (tarefa: ReadTarefaProjetoDTO, newStatus: string) => {
    try {
      await TarefaProjetoService.update(tarefa.tarefaId, {
        nome: tarefa.nome, status: newStatus,
        tipo: tarefa.tipo || undefined, obs: tarefa.obs || undefined,
        dataInicio: tarefa.dataInicio || undefined, dataFinal: tarefa.dataFinal || undefined,
      });
      setSelectedTask({ ...tarefa, status: newStatus });
      loadData();
    } catch (err) { console.error(err); }
  };

  const isToday = (dataFinal: string | null) => {
    if (!dataFinal) return false;
    const today = new Date();
    const deadline = new Date(dataFinal);
    return today.toDateString() === deadline.toDateString();
  };

  const handleFinishTask = async (tarefa: ReadTarefaProjetoDTO) => {
    await handleUpdateTaskStatus(tarefa, "C");

    const gifs = [celebrate1, celebrate2];
    const random = gifs[Math.floor(Math.random() * gifs.length)];
    setCelebrationGif(random);
    setShowCelebration(true);

    setTimeout(() => setShowCelebration(false), 3000);
  };

  const handleDeleteTask = async (tarefaId: number) => {
    try {
      await TarefaProjetoService.delete(tarefaId);
      setSelectedTask(null); loadData();
    } catch (err) { console.error(err); }
  };

  const handleDeleteProject = async () => {
    if (!id || !window.confirm("Tem certeza que deseja excluir este projeto?")) return;
    try { await ProjetoService.delete(Number(id)); navigate("/dashboard"); }
    catch (err) { console.error(err); }
  };

  const selectTask = (tarefa: ReadTarefaProjetoDTO) => {
    setSelectedTask(tarefa);
    setTaskStatusEdit(tarefa.status);
  };

  const getTasksByType = (tipo: string) => {
    let filtered = tarefas.filter((t) => t.tipo === tipo);
    const filter = columnFilters[tipo];
    if (filter) filtered = filtered.filter((t) => t.status === filter);
    return filtered;
  };

  const getStackForColumn = (key: string): string | null => {
    if (!projeto) return null;
    switch (key) {
      case "frontend": return projeto.frontStack;
      case "backend": return projeto.backStack;
      case "banco": return projeto.bancoDeDados;
      default: return null;
    }
  };

  const getColorForType = (tipo: string | null) => {
    switch (tipo) {
      case "frontend": return "green" as const;
      case "backend": return "yellow" as const;
      case "banco": return "purple" as const;
      default: return undefined;
    }
  };

  const getOtherTasks = () => {
    if (!selectedTask) return [];
    return tarefas.filter(
      (t) => t.tipo === selectedTask.tipo && t.tarefaId !== selectedTask.tarefaId
    );
  };

  if (loading) return <Page><Loading>Carregando projeto...</Loading></Page>;
  if (!projeto) return <Page><Loading>Projeto não encontrado.</Loading></Page>;

  return (
    <Page>
      {/* ── HEADER ── */}
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => navigate("/dashboard")}>←</BackButton>
          <LogoText>Project</LogoText>
        </HeaderLeft>
        <ProjectTitle>{projeto.nome}</ProjectTitle>
        <HeaderRight>
          <EditButton onClick={() => setShowEditModal(true)}>Editar projeto</EditButton>
          <DeleteProjectButton onClick={handleDeleteProject}>Excluir projeto</DeleteProjectButton>
          <UserName>{userName}</UserName>
        </HeaderRight>
      </Header>

      <MainLayout>
        {/* ── SIDEBAR ── */}
        <Sidebar>
          {selectedTask ? (
            <>
              {selectedTask.status !== "C" && (
                <SidebarButton onClick={() => handleFinishTask(selectedTask)}>
                  <NewButtonGlowPink />
                  <NewButtonGlowBlue />
                  Finalizar tarefa
                </SidebarButton>
              )}

              {showCelebration && (
                <CelebrationGif src={celebrationGif} alt="Celebração" />
              )}

              {selectedTask.tipo && (
                <SidebarSection>
                  <SidebarLabel>Stack:</SidebarLabel>
                  <SidebarTitle>{selectedTask.tipo === "geral" ? "Geral" :
                    selectedTask.tipo.charAt(0).toUpperCase() + selectedTask.tipo.slice(1)}</SidebarTitle>
                  {getStackForColumn(selectedTask.tipo) && (
                    <StackBadge $color={getColorForType(selectedTask.tipo)}>
                      {getStackForColumn(selectedTask.tipo)}
                    </StackBadge>
                  )}
                </SidebarSection>
              )}

              <SidebarSection>
                <StatusRow>
                  <SidebarLabel>Status:</SidebarLabel>
                  <StatusDot $status={taskStatusEdit} />
                  <StatusSelect
                    value={taskStatusEdit}
                    onChange={(e) => setTaskStatusEdit(e.target.value)}
                  >
                    <option value="P">Pendente</option>
                    <option value="E">Em andamento</option>
                    <option value="C">Concluído</option>
                  </StatusSelect>
                  {taskStatusEdit !== selectedTask.status && (
                    <AlterButton onClick={() => handleUpdateTaskStatus(selectedTask, taskStatusEdit)}>
                      ✓
                    </AlterButton>
                  )}
                </StatusRow>
              </SidebarSection>

              <SidebarSection>
                <SidebarLabel>Data de entrega:</SidebarLabel>
                <PrazoRow>
                  <DateInput
                    type="date"
                    value={selectedTask.dataFinal || ""}
                    onChange={async (e) => {
                      const newDate = e.target.value;
                      try {
                        await TarefaProjetoService.update(selectedTask.tarefaId, {
                          nome: selectedTask.nome,
                          status: selectedTask.status,
                          tipo: selectedTask.tipo || undefined,
                          obs: selectedTask.obs || undefined,
                          dataInicio: selectedTask.dataInicio || undefined,
                          dataFinal: newDate || undefined,
                        });
                        setSelectedTask({ ...selectedTask, dataFinal: newDate });
                        loadData();
                      } catch (err) { console.error(err); }
                    }}
                  />
                  {selectedTask.dataFinal && selectedTask.status !== "C" && (
                    isToday(selectedTask.dataFinal) ? (
                      <PrazoStatus $overdue={false} style={{ color: "#fdcb6e" }}>Entrega hoje</PrazoStatus>
                    ) : (
                      <PrazoStatus $overdue={isOverdue(selectedTask.dataFinal, selectedTask.status)}>
                        {isOverdue(selectedTask.dataFinal, selectedTask.status) ? "Atrasado" : "No prazo"}
                      </PrazoStatus>
                    )
                  )}
                  {selectedTask.status === "C" && (
                    <PrazoStatus $overdue={false}>Concluída</PrazoStatus>
                  )}
                </PrazoRow>
              </SidebarSection>

              <SidebarSection>
                <SidebarLabel>Observações:</SidebarLabel>
                <ObsTextArea
                  placeholder="Adicionar observação..."
                  value={selectedTask.obs || ""}
                  onChange={(e) => setSelectedTask({ ...selectedTask, obs: e.target.value })}
                  onBlur={async () => {
                    try {
                      await TarefaProjetoService.update(selectedTask.tarefaId, {
                        nome: selectedTask.nome,
                        status: selectedTask.status,
                        tipo: selectedTask.tipo || undefined,
                        obs: selectedTask.obs || undefined,
                        dataInicio: selectedTask.dataInicio || undefined,
                        dataFinal: selectedTask.dataFinal || undefined,
                      });
                      loadData();
                    } catch (err) { console.error(err); }
                  }}
                />
              </SidebarSection>

              <OtherTasksLabel>Outras tasks:</OtherTasksLabel>
              {getOtherTasks().map((t) => (
                <OtherTaskItem
                  key={t.tarefaId}
                  $active={false}
                  onClick={() => selectTask(t)}
                >
                  <TaskStatusDot $status={t.status} /> {t.nome}
                </OtherTaskItem>
              ))}
              {getOtherTasks().length === 0 && (
                <SidebarValue style={{ fontSize: 11, color: "#444" }}>Nenhuma outra task</SidebarValue>
              )}

              <SidebarDivider />
              <DeleteTaskButton onClick={() => handleDeleteTask(selectedTask.tarefaId)}>
                Excluir tarefa
              </DeleteTaskButton>
              <CloseSidebarTask onClick={() => setSelectedTask(null)}>
                ← Voltar ao projeto
              </CloseSidebarTask>
            </>
          ) : (
            <>
              <SidebarSection>
                <SidebarLabel>Projeto status:</SidebarLabel>
                <StatusBadgeSidebar $status={projeto.status}>
                  {statusLabel(projeto.status)}
                </StatusBadgeSidebar>
              </SidebarSection>

              {projeto.dataInicio && (
                <SidebarSection>
                  <SidebarLabel>data de inicio:</SidebarLabel>
                  <SidebarValue>{formatDate(projeto.dataInicio)}</SidebarValue>
                </SidebarSection>
              )}

              {projeto.dataFinal && (
                <SidebarSection>
                  <SidebarLabel>data de entrega:</SidebarLabel>
                  <SidebarValue>{formatDate(projeto.dataFinal)}</SidebarValue>
                  {isOverdue(projeto.dataFinal, projeto.status) ? (
                    <SidebarValueSmall style={{ color: "#e84393" }}>Atrasado</SidebarValueSmall>
                  ) : projeto.status !== "C" ? (
                    <SidebarValueSmall>No prazo</SidebarValueSmall>
                  ) : null}
                </SidebarSection>
              )}

              <SidebarDivider />

              <SidebarSection>
                <SidebarLabel>tasks:</SidebarLabel>
                <SidebarValue>
                  {tarefas.filter((t) => t.status === "C").length}/{tarefas.length} concluídas
                </SidebarValue>
              </SidebarSection>
            </>
          )}
        </Sidebar>

        {/* ── COLUNAS ── */}
        <ColumnsArea>
          {COLUMNS.map((col) => {
            const colTasks = getTasksByType(col.key);
            const stack = getStackForColumn(col.key);

            return (
              <Column key={col.key}>
                <ColumnHeader>
                  <ColumnTitle>{col.title}</ColumnTitle>
                  {stack && (
                    <>
                      <ColumnStackLabel>Stack:</ColumnStackLabel>
                      <ColumnStackBadge $color={col.color}>{stack}</ColumnStackBadge>
                    </>
                  )}
                </ColumnHeader>

                <ColumnTasksBar>
                  <ColumnTasksLabel>Tasks:</ColumnTasksLabel>
                  <ColumnStatusRow>
                    <ColumnTasksLabel>Status:</ColumnTasksLabel>
                    <StatusDot $status={columnFilters[col.key] || "P"} />
                    <ColumnStatusSelect
                      value={columnFilters[col.key]}
                      onChange={(e) => setColumnFilters({
                        ...columnFilters, [col.key]: e.target.value,
                      })}
                    >
                      <option value="">Todos</option>
                      <option value="P">Pendente</option>
                      <option value="E">Em andamento</option>
                      <option value="C">Concluído</option>
                    </ColumnStatusSelect>
                  </ColumnStatusRow>
                  <AddTaskButton onClick={() => {
                    setAddingColumn(addingColumn === col.key ? null : col.key);
                    setNewTaskName("");
                  }}>+</AddTaskButton>
                </ColumnTasksBar>

                {addingColumn === col.key && (
                  <AddTaskInline>
                    <AddTaskInput
                      autoFocus
                      placeholder="Nome da tarefa..."
                      value={newTaskName}
                      onChange={(e) => setNewTaskName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleAddTask(col.key);
                        if (e.key === "Escape") { setAddingColumn(null); setNewTaskName(""); }
                      }}
                      onBlur={() => {
                        if (newTaskName.trim()) handleAddTask(col.key);
                        else { setAddingColumn(null); setNewTaskName(""); }
                      }}
                    />
                  </AddTaskInline>
                )}

                <TaskList>
                  {colTasks.map((tarefa) => (
                    <TaskCard
                      key={tarefa.tarefaId}
                      $active={selectedTask?.tarefaId === tarefa.tarefaId}
                      onClick={() => selectTask(tarefa)}
                    >
                      <TaskName>
                        <TaskStatusDot $status={tarefa.status} />
                        {tarefa.nome}
                      </TaskName>
                    </TaskCard>
                  ))}
                </TaskList>
              </Column>
            );
          })}
        </ColumnsArea>
      </MainLayout>
      {showEditModal && projeto && (
        <EditProjectModal
          projeto={projeto}
          onClose={() => setShowEditModal(false)}
          onUpdated={() => loadData()}
        />
      )}
    </Page>
  );
};

export default ProjectView;