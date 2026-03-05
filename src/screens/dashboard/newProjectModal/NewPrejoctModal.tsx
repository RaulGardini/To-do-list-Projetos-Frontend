import React, { useState } from "react";
import { ProjetoService } from "../../../service/ProjetoService";
import type { CreateProjetoDTO } from "../../../service/models/ProjetoModels";
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
  ObsRow
} from "./NewProjectModal.style";

interface Props {
  onClose: () => void;
  onCreated: () => void;
}

const NewProjectModal: React.FC<Props> = ({ onClose, onCreated }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<CreateProjetoDTO>({
    nome: "",
    status: "P",
    frontStack: "",
    frontObs: "",
    backStack: "",
    backObs: "",
    bancoDeDados: "",
    bancoDeDadosObs: "",
    dataInicio: "",
    dataFinal: "",
    obs: "",
  });

  const updateField = (field: keyof CreateProjetoDTO, value: string) => {
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
      await ProjetoService.create(form);
      onCreated();
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
          <ModalTitle>Novo Projeto</ModalTitle>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </ModalHeader>

        <ModalBody>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          {/* ── GERAL ── */}
          <div>
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

          {/* ── FRONT-END ── */}
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

          <div>
            <ObsRow>
              <FieldGroup>
                <Label>Observações do Projeto</Label>
                <TextArea
                  placeholder="Anotações gerais sobre o projeto..."
                  value={form.obs}
                  onChange={(e) => updateField("obs", e.target.value)}
                  style={{height: '3rem'}}
                />
              </FieldGroup>
            </ObsRow>
          </div>

          {/* ── DATAS ── */}
          <div>
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
            <SubmitText>{loading ? "Criando..." : "Criar Projeto"}</SubmitText>
          </SubmitButton>
        </ModalFooter>
      </Modal>
    </Overlay>
  );
};

export default NewProjectModal;