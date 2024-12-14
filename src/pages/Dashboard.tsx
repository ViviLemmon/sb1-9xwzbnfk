import React from 'react';
import { Users, FileText, Calendar, Brain } from 'lucide-react';
import StatCard from '../components/Dashboard/StatCard';

const Dashboard = () => {
  const stats = [
    {
      title: 'Cidadãos Atendidos',
      value: 234,
      icon: Users,
      trend: { value: 12, isPositive: true }
    },
    {
      title: 'Projetos em Andamento',
      value: 8,
      icon: FileText,
      trend: { value: 5, isPositive: true }
    },
    {
      title: 'Reuniões Agendadas',
      value: 15,
      icon: Calendar,
    },
    {
      title: 'Recursos Disponíveis',
      value: 45,
      icon: Brain,
      trend: { value: 8, isPositive: true }
    }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo ao seu painel de controle</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Próximos Compromissos</h2>
          {/* Lista de compromissos será implementada aqui */}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Projetos Recentes</h2>
          {/* Lista de projetos será implementada aqui */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;