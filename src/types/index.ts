export interface Citizen {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  needs: string;
  diagnostics?: string;
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface Appointment {
  id: string;
  citizenId: string;
  date: Date;
  subject: string;
  notes: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'in_review' | 'submitted' | 'approved' | 'rejected';
  category: 'law' | 'indication' | 'requirement';
  focus: 'neurodiversity' | 'education' | 'health' | 'infrastructure';
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'não_iniciado' | 'em_andamento' | 'concluído' | 'bloqueado';
  priority: 'baixa' | 'média' | 'alta' | 'urgente';
  assignedTo: string[];
  dueDate: Date;
  tags: string[];
  group: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskGroup {
  id: string;
  name: string;
  color: string;
  tasks: Task[];
}