
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  CONDO_SETUP = 'CONDO_SETUP',
  PEOPLE = 'PEOPLE',
  FINANCIAL = 'FINANCIAL',
  RESERVATIONS = 'RESERVATIONS',
  COMMUNICATION = 'COMMUNICATION',
  MAINTENANCE = 'MAINTENANCE',
  DOCUMENTS = 'DOCUMENTS',
  CONCIERGE = 'CONCIERGE',
  OTHERS = 'OTHERS'
}

export interface CondoInfo {
  name: string;
  address: string;
  blocks: number;
  units: number;
}

export interface Resident {
  id: string;
  name: string;
  unit: string;
  block: string;
  type: 'Proprietário' | 'Inquilino';
  email: string;
  phone: string;
  isDelinquent: boolean;
}

export interface FinancialRecord {
  id: string;
  date: string;
  description: string;
  type: 'RECEITA' | 'DESPESA';
  amount: number;
  category: string;
}

export interface MaintenanceTicket {
  id: string;
  title: string;
  requester: string;
  status: 'Aberto' | 'Em Andamento' | 'Concluído';
  priority: 'Baixa' | 'Média' | 'Alta';
  date: string;
  description: string;
}

export interface Reservation {
  id: string;
  area: string;
  residentId: string;
  date: string;
  status: 'Confirmada' | 'Pendente' | 'Cancelada';
}
