import type {
  ReadTarefaProjetoDTO,
  CreateTarefaProjetoDTO,
  UpdateTarefaProjetoDTO,
} from "./models/TarefaProjetoModels";
import { AuthService } from "./AuthService";

const API_URL = "https://localhost:7044/api";

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${AuthService.getToken()}`,
});

export const TarefaProjetoService = {

  async getAllByProjeto(projetoId: number): Promise<ReadTarefaProjetoDTO[]> {
    const response = await fetch(`${API_URL}/TarefasProjeto/projeto/${projetoId}`, {
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error("Erro ao buscar tarefas.");
    return response.json();
  },

  async getById(id: number): Promise<ReadTarefaProjetoDTO> {
    const response = await fetch(`${API_URL}/TarefasProjeto/${id}`, {
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error("Tarefa não encontrada.");
    return response.json();
  },

  async create(data: CreateTarefaProjetoDTO): Promise<ReadTarefaProjetoDTO> {
    const response = await fetch(`${API_URL}/TarefasProjeto`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Erro ao criar tarefa.");
    }
    return response.json();
  },

  async update(id: number, data: UpdateTarefaProjetoDTO): Promise<void> {
    const response = await fetch(`${API_URL}/TarefasProjeto/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Erro ao atualizar tarefa.");
    }
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/TarefasProjeto/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    if (!response.ok) throw new Error("Erro ao deletar tarefa.");
  },
};