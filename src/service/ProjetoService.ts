import type { ReadProjetoDTO, CreateProjetoDTO, UpdateProjetoDTO } from ".//models/ProjetoModels";
import { AuthService } from "./AuthService";

const API_URL = "https://localhost:7044/api";

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${AuthService.getToken()}`,
});

export const ProjetoService = {

  async getAll(): Promise<ReadProjetoDTO[]> {
    const response = await fetch(`${API_URL}/Projetos`, {
      headers: getHeaders(),
    });

    if (!response.ok) throw new Error("Erro ao buscar projetos.");
    return response.json();
  },

  async getById(id: number): Promise<ReadProjetoDTO> {
    const response = await fetch(`${API_URL}/Projetos/${id}`, {
      headers: getHeaders(),
    });

    if (!response.ok) throw new Error("Projeto não encontrado.");
    return response.json();
  },

  async create(data: CreateProjetoDTO): Promise<ReadProjetoDTO> {
    const response = await fetch(`${API_URL}/Projetos`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Erro ao criar projeto.");
    }
    return response.json();
  },

  async update(id: number, data: UpdateProjetoDTO): Promise<void> {
    const response = await fetch(`${API_URL}/Projetos/${id}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Erro ao atualizar projeto.");
    }
  },

  async delete(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/Projetos/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });

    if (!response.ok) throw new Error("Erro ao deletar projeto.");
  },
};