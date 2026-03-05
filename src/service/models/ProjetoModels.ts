export interface ReadProjetoDTO {
  projetoId: number;
  nome: string;
  status: string;
  frontStack: string | null;
  frontObs: string | null;
  backStack: string | null;
  backObs: string | null;
  bancoDeDados: string | null;
  bancoDeDadosObs: string | null;
  dataInicio: string | null;
  dataFinal: string | null;
  obs: string;
}

export interface CreateProjetoDTO {
  nome: string;
  status: string;
  frontStack?: string;
  frontObs?: string;
  backStack?: string;
  backObs?: string;
  bancoDeDados?: string;
  bancoDeDadosObs?: string;
  dataInicio?: string;
  dataFinal?: string;
  obs?: string;
}

export interface UpdateProjetoDTO {
  nome: string;
  status: string;
  frontStack?: string;
  frontObs?: string;
  backStack?: string;
  backObs?: string;
  bancoDeDados?: string;
  bancoDeDadosObs?: string;
  dataInicio?: string;
  dataFinal?: string;
  obs?: string;
}