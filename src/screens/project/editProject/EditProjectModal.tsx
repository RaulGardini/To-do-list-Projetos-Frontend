import React, { useState } from "react";
import { ProjetoService } from "../../../service/ProjetoService";
import type { ReadProjetoDTO, UpdateProjetoDTO } from "../../../service/models/ProjetoModels";
import {
  Overlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
  SectionTitle,
  FieldRow,
  FieldGroup,
  Label,
  Input,
  TextArea,
  Select,
  CancelButton,
  SubmitButton,
  SubmitGlowPink,
  SubmitGlowBlue,
  SubmitText,
  ErrorMessage,
  StackRow,
  StackGroup,
} from "../../dashboard/newProjectModal/NewProjectModal.style";

interface Props {
  projeto: ReadProjetoDTO;
  onClose: () => void;
  onUpdated: () => void;
}

const EditProjectModal: React.FC<Props> = ({ projeto, onClose, onUpdated }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<UpdateProjetoDTO>({
    nome: projeto.nome,
    status: projeto.status,
    frontStack: projeto.frontStack || "",
    frontObs: projeto.frontObs || "",
    backStack: projeto.backStack || "",
    backObs: projeto.backObs || "",
    bancoDeDados: projeto.bancoDeDados || "",
    bancoDeDadosObs: projeto.bancoDeDadosObs || "",
    dataInicio: projeto.dataInicio || "",
    dataFinal: projeto.dataFinal || "",
  });

  const updateField = (field: keyof UpdateProjetoDTO, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    if (!form.nome.trim()) {
      setError("O nome do projeto é obrigatório.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await ProjetoService.update(projeto.projetoId, form);
      onUpdated();
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modal>
        <ModalHeader>
          <ModalTitle>Editar Projeto</ModalTitle>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </ModalHeader>

        <ModalBody>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {/* ── GERAL ── */}
          <div>
            <SectionTitle>Geral</SectionTitle>
            <FieldRow>
              <FieldGroup>
                <Label>Nome do Projeto *</Label>
                <Input
                  placeholder="Ex: ToDoList App"
                  value={form.nome}
                  onChange={(e) => updateField("nome", e.target.value)}
                />
              </FieldGroup>
              <FieldGroup>
                <Label>Status</Label>
                <Select
                  value={form.status}
                  onChange={(e) => updateField("status", e.target.value)}
                >
                  <option value="P">Pendente</option>
                  <option value="E">Em andamento</option>
                  <option value="C">Concluído</option>
                </Select>
              </FieldGroup>
            </FieldRow>
          </div>

          {/* ── STACKS ── */}
          <div>
            <SectionTitle>Tecnologias</SectionTitle>
            <StackRow>
              <StackGroup style={{ backgroundColor: '#263ffa33', borderColor: '#262afab2' }}>
                <FieldGroup>
                  <Label>Front-end Stack</Label>
                  <Input
                    placeholder="Ex: React, TypeScript"
                    value={form.frontStack}
                    onChange={(e) => updateField("frontStack", e.target.value)}
                  />
                </FieldGroup>
                <FieldGroup>
                  <Label>Front-end Obs</Label>
                  <TextArea
                    placeholder="Detalhes sobre o front..."
                    value={form.frontObs}
                    onChange={(e) => updateField("frontObs", e.target.value)}
                  />
                </FieldGroup>
              </StackGroup>

              <StackGroup style={{ backgroundColor: '#fa26de33', borderColor: '#fa26a29d' }}>
                <FieldGroup>
                  <Label>Back-end Stack</Label>
                  <Input
                    placeholder="Ex: C#, ASP.NET Core"
                    value={form.backStack}
                    onChange={(e) => updateField("backStack", e.target.value)}
                  />
                </FieldGroup>
                <FieldGroup>
                  <Label>Back-end Obs</Label>
                  <TextArea
                    placeholder="Detalhes sobre o back..."
                    value={form.backObs}
                    onChange={(e) => updateField("backObs", e.target.value)}
                  />
                </FieldGroup>
              </StackGroup>

              <StackGroup style={{ backgroundColor: '#ecfa2633', borderColor: '#e5fa268e' }}>
                <FieldGroup>
                  <Label>Banco de Dados</Label>
                  <Input
                    placeholder="Ex: PostgreSQL"
                    value={form.bancoDeDados}
                    onChange={(e) => updateField("bancoDeDados", e.target.value)}
                  />
                </FieldGroup>
                <FieldGroup>
                  <Label>Banco Obs</Label>
                  <TextArea
                    placeholder="Detalhes sobre o banco..."
                    value={form.bancoDeDadosObs}
                    onChange={(e) => updateField("bancoDeDadosObs", e.target.value)}
                  />
                </FieldGroup>
              </StackGroup>
            </StackRow>
          </div>

          {/* ── DATAS ── */}
          <div>
            <SectionTitle>Datas</SectionTitle>
            <FieldRow>
              <FieldGroup>
                <Label>Data de Início</Label>
                <Input
                  type="date"
                  value={form.dataInicio}
                  onChange={(e) => updateField("dataInicio", e.target.value)}
                />
              </FieldGroup>
              <FieldGroup>
                <Label>Data Final</Label>
                <Input
                  type="date"
                  value={form.dataFinal}
                  onChange={(e) => updateField("dataFinal", e.target.value)}
                />
              </FieldGroup>
            </FieldRow>
          </div>
        </ModalBody>

        <ModalFooter>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <SubmitButton onClick={handleSubmit} disabled={loading}>
            <SubmitGlowPink />
            <SubmitGlowBlue />
            <SubmitText>{loading ? "Salvando..." : "Salvar Alterações"}</SubmitText>
          </SubmitButton>
        </ModalFooter>
      </Modal>
    </Overlay>
  );
};

export default EditProjectModal;