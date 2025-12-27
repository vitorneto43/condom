
import React from 'react';
import { AppView } from '../types';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  DollarSign, 
  CalendarCheck, 
  Megaphone, 
  Wrench, 
  FileText, 
  ShieldCheck, 
  MoreHorizontal,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  const menuItems = [
    { id: AppView.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: AppView.CONDO_SETUP, label: 'Condomínio', icon: Building2 },
    { id: AppView.PEOPLE, label: 'Pessoas', icon: Users },
    { id: AppView.FINANCIAL, label: 'Financeiro', icon: DollarSign },
    { id: AppView.RESERVATIONS, label: 'Reservas', icon: CalendarCheck },
    { id: AppView.COMMUNICATION, label: 'Comunicação', icon: Megaphone },
    { id: AppView.MAINTENANCE, label: 'Manutenção', icon: Wrench },
    { id: AppView.DOCUMENTS, label: 'Documentos', icon: FileText },
    { id: AppView.CONCIERGE, label: 'Portaria', icon: ShieldCheck },
    { id: AppView.OTHERS, label: 'Outros', icon: MoreHorizontal },
  ];

  return (
    <aside className="w-20 md:w-64 bg-indigo-900 text-indigo-100 flex flex-col sticky top-0 h-screen shadow-xl transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-indigo-900 font-bold shrink-0 shadow-inner">
          CM
        </div>
        <span className="text-xl font-bold hidden md:block tracking-tight">CondoMaster</span>
      </div>

      <nav className="flex-1 mt-4 px-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center gap-4 px-3 py-3 rounded-xl transition-all group ${
              currentView === item.id 
              ? 'bg-indigo-700 text-white shadow-lg' 
              : 'hover:bg-indigo-800/50 hover:text-white'
            }`}
          >
            <item.icon className={`w-6 h-6 shrink-0 ${currentView === item.id ? 'text-indigo-200' : 'text-indigo-400 group-hover:text-indigo-200'}`} />
            <span className="hidden md:block font-medium truncate">{item.label}</span>
            {currentView === item.id && (
              <ChevronRight className="w-4 h-4 ml-auto hidden md:block" />
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-indigo-800">
        <div className="flex items-center gap-3 bg-indigo-800/40 p-3 rounded-xl">
          <img src="https://picsum.photos/40/40?random=1" alt="Avatar" className="w-8 h-8 rounded-full" />
          <div className="hidden md:block overflow-hidden">
            <p className="text-sm font-semibold truncate">Admin User</p>
            <p className="text-xs text-indigo-300 truncate">Síndico Geral</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
