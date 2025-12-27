
import React, { useState } from 'react';
import { Users, UserPlus, Search, Filter, Mail, Phone, MoreVertical } from 'lucide-react';

const PeopleManagement: React.FC = () => {
  const [filter, setFilter] = useState<'Moradores' | 'Funcionários' | 'Prestadores'>('Moradores');

  const residents = [
    { id: '1', name: 'Alice Cooper', unit: 'Ap 101', type: 'Proprietária', phone: '(11) 98765-4321', email: 'alice@email.com' },
    { id: '2', name: 'Bob Marley', unit: 'Ap 202', type: 'Inquilino', phone: '(11) 91234-5678', email: 'bob@email.com' },
    { id: '3', name: 'Charlie Brown', unit: 'Bl B - 501', type: 'Proprietário', phone: '(11) 99887-7665', email: 'charlie@email.com' },
    { id: '4', name: 'Diana Prince', unit: 'Ap 303', type: 'Proprietária', phone: '(11) 97766-5544', email: 'diana@email.com' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Moradores & Pessoas</h1>
          <p className="text-slate-500">Gerenciamento completo do ecossistema humano do condomínio.</p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
          <UserPlus className="w-5 h-5" />
          Cadastrar Pessoa
        </button>
      </header>

      <div className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex-wrap">
        <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
          {['Moradores', 'Funcionários', 'Prestadores'].map((t) => (
            <button 
              key={t}
              onClick={() => setFilter(t as any)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === t ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex-1 relative min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder={`Buscar em ${filter.toLowerCase()}...`}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>
        <button className="px-4 py-2 border border-slate-200 rounded-lg flex items-center gap-2 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
          <Filter className="w-4 h-4" /> Filtros
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {residents.map((r) => (
          <div key={r.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 font-black text-xl border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{r.name}</h3>
                  <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{r.unit}</p>
                </div>
              </div>
              <button className="text-slate-300 hover:text-slate-600"><MoreVertical className="w-5 h-5" /></button>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Mail className="w-4 h-4 text-slate-400" /> {r.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Phone className="w-4 h-4 text-slate-400" /> {r.phone}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${
                r.type === 'Proprietária' || r.type === 'Proprietário' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'
              }`}>
                {r.type}
              </span>
              <button className="text-xs font-bold text-indigo-600 hover:underline">Ver Perfil Completo</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleManagement;
