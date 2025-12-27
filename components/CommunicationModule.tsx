
import React from 'react';
import { Megaphone, Vote, Bell, Search, Filter, MessageSquare, ExternalLink } from 'lucide-react';

const CommunicationModule: React.FC = () => {
  const notices = [
    { title: 'Manutenção Preventiva de Antena', date: 'Hoje', priority: 'Média', category: 'Obras' },
    { title: 'Novo Horário de Funcionamento da Academia', date: 'Ontem', priority: 'Alta', category: 'Lazer' },
    { title: 'Boas-vindas ao novo Zelador', date: '3 dias atrás', priority: 'Baixa', category: 'Administrativo' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Mural de Comunicação</h1>
          <p className="text-slate-500">Avisos, enquetes e comunicados oficiais do condomínio.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-50">
            <Vote className="w-4 h-4 text-amber-500" /> Nova Enquete
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100">
            <Megaphone className="w-4 h-4" /> Criar Aviso
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input type="text" placeholder="Pesquisar avisos..." className="w-full pl-9 pr-4 py-2 bg-transparent outline-none text-sm" />
            </div>
            <button className="p-2 rounded-lg hover:bg-slate-50 text-slate-500"><Filter className="w-4 h-4" /></button>
          </div>

          <div className="space-y-4">
            {notices.map((notice, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${notice.priority === 'Alta' ? 'bg-rose-500' : notice.priority === 'Média' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{notice.category}</span>
                  </div>
                  <span className="text-xs text-slate-400">{notice.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{notice.title}</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">Informamos que devido a obras de expansão, o acesso ao rooftop estará limitado no próximo final de semana para segurança de todos os moradores.</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-indigo-600"><MessageSquare className="w-3 h-3" /> 12 Comentários</button>
                    <button className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-indigo-600"><Bell className="w-3 h-3" /> Notificar</button>
                  </div>
                  <button className="text-indigo-600 font-bold text-xs flex items-center gap-1 hover:underline">Ler comunicado completo <ExternalLink className="w-3 h-3" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-900 text-white p-6 rounded-3xl shadow-xl shadow-indigo-100 overflow-hidden relative">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Vote className="w-6 h-6 text-indigo-300" /> Enquete Ativa</h2>
            <p className="text-indigo-100 text-sm mb-6">Qual cor devemos escolher para a revitalização da fachada principal do edifício?</p>
            <div className="space-y-3">
              {[
                { label: 'Cinza Contemporâneo', pct: 45 },
                { label: 'Off-White Clássico', pct: 30 },
                { label: 'Bege Atemporal', pct: 25 },
              ].map((opt, i) => (
                <div key={i} className="relative group cursor-pointer">
                  <div className="h-10 w-full bg-white/10 rounded-xl overflow-hidden">
                    <div className="h-full bg-white/20 transition-all duration-1000" style={{ width: `${opt.pct}%` }} />
                  </div>
                  <div className="absolute inset-0 px-4 flex items-center justify-between text-xs font-bold">
                    <span>{opt.label}</span>
                    <span>{opt.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-white text-indigo-900 font-black rounded-xl hover:bg-indigo-50 transition-all shadow-lg text-sm">VOTAR AGORA</button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Informações Úteis</h3>
            <div className="space-y-3">
              {[
                { label: 'Administradora', val: '(11) 5555-0000' },
                { label: 'Emergência/Zelador', val: '(11) 99999-0000' },
                { label: 'Polícia Militar', val: '190' },
                { label: 'Pronto Socorro Próximo', val: 'Hospital São Luiz' },
              ].map((info, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest">{info.label}</span>
                  <span className="text-sm font-bold text-slate-700">{info.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationModule;
