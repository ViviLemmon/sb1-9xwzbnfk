import React, { useState } from 'react';
import { 
  Plus, 
  Filter, 
  Search, 
  MoreHorizontal,
  Clock,
  AlertCircle,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Tasks = () => {
  const [view, setView] = useState<'board' | 'table'>('table');

  const taskGroups = [
    {
      id: '1',
      name: 'Projetos de Lei',
      color: 'bg-blue-100',
      tasks: [
        {
          id: '1',
          title: 'Elaborar PL Acessibilidade',
          status: 'em_andamento',
          priority: 'alta',
          assignedTo: ['Ana Silva', 'João Paulo'],
          dueDate: new Date('2024-03-25'),
          tags: ['legislação', 'acessibilidade']
        },
        {
          id: '2',
          title: 'Revisar Emendas PL 123/2024',
          status: 'não_iniciado',
          priority: 'média',
          assignedTo: ['Carlos Santos'],
          dueDate: new Date('2024-03-28'),
          tags: ['legislação']
        }
      ]
    },
    {
      id: '2',
      name: 'Atendimentos',
      color: 'bg-green-100',
      tasks: [
        {
          id: '3',
          title: 'Acompanhamento Família Silva',
          status: 'em_andamento',
          priority: 'urgente',
          assignedTo: ['Maria Oliveira'],
          dueDate: new Date('2024-03-22'),
          tags: ['atendimento', 'autismo']
        }
      ]
    },
    {
      id: '3',
      name: 'Comunicação',
      color: 'bg-purple-100',
      tasks: [
        {
          id: '4',
          title: 'Post Redes Sociais - Conquistas',
          status: 'concluído',
          priority: 'baixa',
          assignedTo: ['Pedro Costa'],
          dueDate: new Date('2024-03-20'),
          tags: ['redes sociais']
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'não_iniciado': 'bg-gray-100 text-gray-600',
      'em_andamento': 'bg-blue-100 text-blue-600',
      'concluído': 'bg-green-100 text-green-600',
      'bloqueado': 'bg-red-100 text-red-600'
    };
    return colors[status] || colors['não_iniciado'];
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'urgente':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'alta':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'média':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'baixa':
        return <Clock className="w-4 h-4 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Tarefas</h1>
          <p className="text-gray-600">Gerencie as atividades do gabinete</p>
        </div>
        
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Plus className="w-5 h-5 mr-2" />
            Nova Tarefa
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Buscar tarefas..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Filter className="w-5 h-5 mr-2" />
                Filtros
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tarefa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prioridade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Responsáveis
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data Limite
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {taskGroups.map(group => (
                <React.Fragment key={group.id}>
                  <tr className={`${group.color}`}>
                    <td colSpan={7} className="px-6 py-3 text-sm font-medium">
                      {group.name}
                    </td>
                  </tr>
                  {group.tasks.map(task => (
                    <tr key={task.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {task.title}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                          {task.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {getPriorityIcon(task.priority)}
                          <span className="ml-2 text-sm text-gray-600">
                            {task.priority}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex -space-x-2">
                          {task.assignedTo.map((person, index) => (
                            <div
                              key={index}
                              className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs border-2 border-white"
                              title={person}
                            >
                              {person.split(' ').map(n => n[0]).join('')}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {format(task.dueDate, "dd 'de' MMMM", { locale: ptBR })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {task.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;