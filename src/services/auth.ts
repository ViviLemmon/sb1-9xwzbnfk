import type { User } from '../types/auth';

// Simula um serviço de autenticação
// Em produção, isso se conectaria a uma API real
export const authService = {
  async login(email: string, password: string): Promise<User> {
    // Simula uma chamada de API
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simula validação de credenciais
    if (email === 'vereador@exemplo.com' && password === 'senha123') {
      return {
        id: '1',
        name: 'João Silva',
        email: email,
        role: 'master'
      };
    }

    throw new Error('Credenciais inválidas');
  },

  async logout(): Promise<void> {
    // Simula logout na API
    await new Promise(resolve => setTimeout(resolve, 500));
  }
};