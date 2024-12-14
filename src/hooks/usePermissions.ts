import { useAuth } from '../contexts/AuthContext';
import type { RolePermissions } from '../types/auth';

export const usePermissions = () => {
  const { hasPermission } = useAuth();

  const can = {
    create: (module: keyof RolePermissions) => hasPermission(module, 'create'),
    read: (module: keyof RolePermissions) => hasPermission(module, 'read'),
    update: (module: keyof RolePermissions) => hasPermission(module, 'update'),
    delete: (module: keyof RolePermissions) => hasPermission(module, 'delete'),
    approve: (module: keyof RolePermissions) => hasPermission(module, 'approve'),
    manage: (module: keyof RolePermissions) => hasPermission(module, 'manage'),
  };

  return { can };
};