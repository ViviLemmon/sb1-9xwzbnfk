import React from 'react';
import { usePermissions } from '../../hooks/usePermissions';
import type { RolePermissions } from '../../types/auth';

interface PermissionGateProps {
  module: keyof RolePermissions;
  action: 'create' | 'read' | 'update' | 'delete' | 'approve' | 'manage';
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const PermissionGate: React.FC<PermissionGateProps> = ({
  module,
  action,
  children,
  fallback = null,
}) => {
  const { can } = usePermissions();

  if (!can[action](module)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default PermissionGate;