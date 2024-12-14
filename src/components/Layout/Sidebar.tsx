import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  FileText, 
  BarChart, 
  MessageSquare,
  Brain,
  Settings,
  CheckSquare
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: Users, label: 'Cidadãos', path: '/citizens' },
    { icon: CheckSquare, label: 'Tarefas', path: '/tasks' },
    { icon: Calendar, label: 'Agenda', path: '/appointments' },
    { icon: FileText, label: 'Projetos', path: '/projects' },
    { icon: BarChart, label: 'Relatórios', path: '/reports' },
    { icon: MessageSquare, label: 'Comunicações', path: '/communications' },
    { icon: Brain, label: 'Recursos Neurodiversidade', path: '/resources' },
    { icon: Settings, label: 'Configurações', path: '/settings' },
  ];

  return (
    <aside className="bg-indigo-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Gabinete Virtual</h2>
        <p className="text-indigo-200 text-sm">Vereador João Silva</p>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-indigo-700 text-white' 
                      : 'text-indigo-100 hover:bg-indigo-700'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;