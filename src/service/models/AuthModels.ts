export interface CreateUsuarioDTO {
  nome: string;
  email: string;
  senha: string;
}

export interface LoginUsuarioDTO {
  email: string;
  senha: string;
}

export interface ReadUsuarioDTO {
  token: string;
  nome: string;
  email: string;
}