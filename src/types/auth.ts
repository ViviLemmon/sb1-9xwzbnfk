export type UserRole = 
  | 'master' 
  | 'assessor_master' 
  | 'assessor_senior' 
  | 'sub_assessor_lideranca' 
  | 'lideranca' 
  | 'cidadao_municipe';

export interface Permission {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
  approve?: boolean;
  manage?: boolean;
}

export interface RolePermissions {
  tasks: Permission;
  projects: Permission;
  citizens: Permission;
  appointments: Permission;
  reports: Permission;
  communications: Permission;
  resources: Permission;
  users: Permission;
  settings: Permission;
}

export const roleHierarchy: Record<UserRole, RolePermissions> = {
  master: {
    tasks: { create: true, read: true, update: true, delete: true, approve: true, manage: true },
    projects: { create: true, read: true, update: true, delete: true, approve: true, manage: true },
    citizens: { create: true, read: true, update: true, delete: true, manage: true },
    appointments: { create: true, read: true, update: true, delete: true, manage: true },
    reports: { create: true, read: true, update: true, delete: true, manage: true },
    communications: { create: true, read: true, update: true, delete: true, approve: true },
    resources: { create: true, read: true, update: true, delete: true, manage: true },
    users: { create: true, read: true, update: true, delete: true, manage: true },
    settings: { create: true, read: true, update: true, delete: true, manage: true }
  },
  assessor_master: {
    tasks: { create: true, read: true, update: true, delete: true, approve: true },
    projects: { create: true, read: true, update: true, delete: true, approve: false },
    citizens: { create: true, read: true, update: true, delete: false },
    appointments: { create: true, read: true, update: true, delete: true },
    reports: { create: true, read: true, update: true, delete: false },
    communications: { create: true, read: true, update: true, delete: true },
    resources: { create: true, read: true, update: true, delete: false },
    users: { create: true, read: true, update: true, delete: false },
    settings: { create: false, read: true, update: false, delete: false }
  },
  assessor_senior: {
    tasks: { create: true, read: true, update: true, delete: false },
    projects: { create: true, read: true, update: true, delete: false },
    citizens: { create: true, read: true, update: true, delete: false },
    appointments: { create: true, read: true, update: true, delete: false },
    reports: { create: true, read: true, update: true, delete: false },
    communications: { create: true, read: true, update: true, delete: false },
    resources: { create: true, read: true, update: true, delete: false },
    users: { create: false, read: true, update: false, delete: false },
    settings: { create: false, read: true, update: false, delete: false }
  },
  sub_assessor_lideranca: {
    tasks: { create: true, read: true, update: true, delete: false },
    projects: { create: false, read: true, update: false, delete: false },
    citizens: { create: true, read: true, update: true, delete: false },
    appointments: { create: true, read: true, update: true, delete: false },
    reports: { create: true, read: true, update: false, delete: false },
    communications: { create: true, read: true, update: false, delete: false },
    resources: { create: false, read: true, update: false, delete: false },
    users: { create: false, read: true, update: false, delete: false },
    settings: { create: false, read: true, update: false, delete: false }
  },
  lideranca: {
    tasks: { create: false, read: true, update: false, delete: false },
    projects: { create: false, read: true, update: false, delete: false },
    citizens: { create: true, read: true, update: false, delete: false },
    appointments: { create: true, read: true, update: false, delete: false },
    reports: { create: false, read: true, update: false, delete: false },
    communications: { create: true, read: true, update: false, delete: false },
    resources: { create: false, read: true, update: false, delete: false },
    users: { create: false, read: true, update: false, delete: false },
    settings: { create: false, read: false, update: false, delete: false }
  },
  cidadao_municipe: {
    tasks: { create: false, read: false, update: false, delete: false },
    projects: { create: false, read: true, update: false, delete: false },
    citizens: { create: false, read: false, update: false, delete: false },
    appointments: { create: true, read: true, update: false, delete: false },
    reports: { create: false, read: false, update: false, delete: false },
    communications: { create: false, read: true, update: false, delete: false },
    resources: { create: false, read: true, update: false, delete: false },
    users: { create: false, read: false, update: false, delete: false },
    settings: { create: false, read: false, update: false, delete: false }
  }
};