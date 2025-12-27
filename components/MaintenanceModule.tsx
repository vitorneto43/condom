
import React, { useState } from 'react';
import { Wrench, Plus, Search, Filter, MessageSquare, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { getMaintenanceAdvice } from '../geminiService';

const MaintenanceModule: React.FC = () => {
  const [activeTicket, setActiveTicket] = useState<string | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const tickets = [
    { id: 'T-1024', title: 'Infiltração no teto da garagem G1', requester: 'Zelador Marcos', status: 'Aberto', priority: 'Alta', date: '12/10/2023', description: 'Gotejamento persistente próximo ao pilar 42.' },
    { id: 'T-1025', title: 'Manutenção Preventiva Elevador 2', requester: 'Sistema', status: 'Agendado', priority: 'Média', date: '15/10/2023', description: 'Revisão mensal de componentes de tração.' },
    { id: 'T-1026', title: 'Troca de lâmpadas corredor Bloco B', requester: 'Portaria', status: 'Concluído', priority: 'Baixa', date: '10/10/2023', description: '3 lâmpadas LED queimadas no 5º andar.' },
  ];

  const handleAskAi = async (description: string) => {
    setLoadingAi(true);
    const advice = await getMaintenanceAdvice(description);
    setAiAnalysis(advice);
    setLoadingAi(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Manutenção e Ocorrências</h1>
          <p className="text-slate-500">Gerencie reparos, chamados e manutenções preventivas.</p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
          <Plus className="w-5 h-5" />
          Abrir Chamado
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Buscar chamados..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
            </div>
            <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <Filter className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          <div className="space-y-3">
            {tickets.map((ticket) => (
              <div 
                key={ticket.id} 
                onClick={() => { setActiveTicket(ticket.id); setAiAnalysis(null); }}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeTicket === ticket.id 
                  ? 'bg-indigo-50 border-indigo-200 shadow-md ring-1 ring-indigo-200' 
                  : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                      {ticket.id}
                    </span>
                    <h3 className="font-bold text-slate-800">{ticket.title}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                    ticket.priority === 'Alta' ? 'bg-rose-100 text-rose-600' : 
                    ticket.priority === 'Média' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {ticket.priority}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {ticket.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {ticket.status}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Solicitado por: <strong>{ticket.requester}</strong></span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleAskAi(ticket.description); }}
                    className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
                  >
                    Consultar IA <MessageSquare className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-8">
          {activeTicket ? (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Detalhes do Chamado</h2>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tickets.find(t => t.id === activeTicket)?.description}
                </p>
              </div>

              {loadingAi && (
                <div className="flex items-center justify-center py-8">
                  <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {aiAnalysis && (
                <div className="bg-indigo-600 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold text-xs">
                        AI
                      </div>
                      <span className="font-bold text-sm">Consultoria Inteligente</span>
                    </div>
                    <p className="text-sm text-indigo-50 leading-relaxed italic">
                      {aiAnalysis}
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-800">Histórico</h4>
                <div className="border-l-2 border-slate-100 pl-4 space-y-4">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-indigo-600 shadow-sm" />
                    <p className="text-sm font-bold text-slate-800">Chamado Aberto</p>
                    <p className="text-xs text-slate-500">12 Out, 2023 - 09:42</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-slate-200" />
                    <p className="text-sm font-bold text-slate-400">Atribuído a Prestador</p>
                    <p className="text-xs text-slate-400">Pendente...</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-center text-slate-400">
              <Wrench className="w-12 h-12 mb-4 opacity-20" />
              <p>Selecione um chamado para ver detalhes.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceModule;
