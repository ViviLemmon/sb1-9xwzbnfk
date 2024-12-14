import React, { createContext, useContext, useState, useCallback } from 'react';
import { UserRole, RolePermissions, roleHierarchy } from '../types/auth';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (module: keyof RolePermissions, action: keyof Permission) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    // Implementar lógica de autenticação real aqui
    // Este é apenas um exemplo
    const mockUser: User = {
      id: '1',
      name: 'João Silva',
      email: email,
      role: 'master'
    };
    setUser(mockUser);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const hasPermission = useCallback((module: keyof RolePermissions, action: keyof Permission): boolean => {
    if (!user) return false;
    return roleHierarchy[user.role][module][action] || false;
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};