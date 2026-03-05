import type { CreateUsuarioDTO, ReadUsuarioDTO, LoginUsuarioDTO } from "./models/AuthModels";

const API_URL = "https://localhost:7044/api";

export const AuthService = {

  async register(data: CreateUsuarioDTO): Promise<ReadUsuarioDTO> {
    const response = await fetch(`${API_URL}/Auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Erro ao registrar.");
    }

    return response.json();
  },

  async login(data: LoginUsuarioDTO): Promise<ReadUsuarioDTO> {
    const response = await fetch(`${API_URL}/Auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Email ou senha inválidos.");
    }

    return response.json();
  },

  saveToken(token: string): void {
    localStorage.setItem("token", token);
  },

  getToken(): string | null {
    return localStorage.getItem("token");
  },

  logout(): void {
    localStorage.removeItem("token");
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  },
};