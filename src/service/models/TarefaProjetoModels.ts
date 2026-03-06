export interface ReadTarefaProjetoDTO {
  tarefaId: number;
  projetoId: number;
  nome: string;
  status: string;
  tipo: string | null;
  obs: string | null;
  dataInicio: string | null;
  dataFinal: string | null;
}

export interface CreateTarefaProjetoDTO {
  projetoId: number;
  nome: string;
  status: string;
  tipo?: string;
  obs?: string;
  dataInicio?: string;
  dataFinal?: string;
}

export interface UpdateTarefaProjetoDTO {
  nome: string;
  status: string;
  tipo?: string;
  obs?: string;
  dataInicio?: string;
  dataFinal?: string;
}