
import React from 'react';
import { HelpCircle, Archive, ClipboardList, Clock, Camera, Trash2, Search } from 'lucide-react';

const OthersModule: React.FC = () => {
  const items = [
    { title: 'Chaveiro com 3 chaves', local: 'Perto da Academia', date: 'Ontem', type: 'Achado' },
    { title: 'Casaco Infantil Azul', local: 'Parquinho', date: 'Há 3 dias', type: 'Achado' },
    { title: 'Fone de Ouvido (Case)', local: 'Garagem G1', date: 'Há uma semana', type: 'Perdido' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Achados e Perdidos & Outros</h1>
          <p className="text-slate-500">Itens encontrados, avisos classificados e informações diversas.</p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
          <Camera className="w-5 h-5" />
          Registrar Item
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-800 flex items-center gap-2"><Archive className="w-5 h-5 text-indigo-500" /> Itens Registrados</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input type="text" placeholder="Filtrar itens..." className="pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none" />
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {items.map((item, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${item.type === 'Achado' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                      {item.type === 'Achado' ? '✓' : '?'}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500">Local: <strong>{item.local}</strong> • {item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg ${item.type === 'Achado' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                      {item.type}
                    </span>
                    <button className="p-2 text-slate-300 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"><HelpCircle className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-600 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><ClipboardList className="w-5 h-5 text-indigo-200" /> Mural de Regras</h3>
            <ul className="space-y-4 text-sm text-indigo-50">
              <li className="flex gap-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-indigo-300" />
                <span>Horário de Silêncio: 22:00 às 08:00</span>
              </li>
              <li className="flex gap-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-indigo-300" />
                <span>Mudanças: Seg a Sex (08h-18h)</span>
              </li>
              <li className="flex gap-2">
                <Trash2 className="w-4 h-4 shrink-0 mt-0.5 text-indigo-300" />
                <span>Coleta de Lixo: Diariamente às 20h</span>
              </li>
            </ul>
            <button className="w-full mt-6 py-2 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl text-xs transition-colors">
              Ver Regulamento Completo
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Classificados</h3>
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer border border-transparent hover:border-indigo-100">
                <p className="text-xs font-bold text-slate-800">Aula de Yoga no Salão</p>
                <p className="text-[10px] text-slate-500">Moradora do Ap 304 oferece aulas particulares.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer border border-transparent hover:border-indigo-100">
                <p className="text-xs font-bold text-slate-800">Vendo Cadeira de Escritório</p>
                <p className="text-[10px] text-slate-500">Novíssima, ergonômica. Contato: Ap 122.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OthersModule;
