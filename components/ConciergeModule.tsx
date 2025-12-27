
import React, { useState } from 'react';
import { UserPlus, Package, ShieldCheck, Search, Clock, ChevronRight, Check } from 'lucide-react';

const ConciergeModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visitors' | 'deliveries'>('visitors');

  const visitors = [
    { name: 'João Silva', doc: 'MG-12.345.678', unit: 'Ap 402', entry: '14:20', type: 'Visitante' },
    { name: 'Ricardo Santos', doc: 'CNPJ: 02.333...', unit: 'Bl A', entry: '15:10', type: 'Serviço' },
  ];

  const deliveries = [
    { id: 'PKG-112', recipient: 'Maria Clara', unit: 'Ap 113', arrival: '10:45', carrier: 'Loggi' },
    { id: 'PKG-113', recipient: 'Bruno Oliveira', unit: 'Ap 221', arrival: '16:30', carrier: 'Mercado Livre' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Controle de Portaria</h1>
            <p className="text-slate-500 text-sm">Registro de fluxo de entrada, saída e encomendas.</p>
          </div>
        </div>
        <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
          <button 
            onClick={() => setActiveTab('visitors')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'visitors' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Visitantes
          </button>
          <button 
            onClick={() => setActiveTab('deliveries')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'deliveries' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Entregas
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-indigo-300 transition-all text-left group">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <UserPlus className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-800">Novo Cadastro</h3>
            <p className="text-xs text-slate-500">Registrar entrada de visitante ou prestador</p>
          </div>
          <ChevronRight className="text-slate-300 w-5 h-5" />
        </button>
        <button className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-blue-300 transition-all text-left group">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
            <Package className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-800">Receber Encomenda</h3>
            <p className="text-xs text-slate-500">Registrar nova entrega na portaria</p>
          </div>
          <ChevronRight className="text-slate-300 w-5 h-5" />
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder={`Pesquisar ${activeTab === 'visitors' ? 'visitantes' : 'entregas'}...`}
              className="w-full pl-9 pr-4 py-1.5 text-sm bg-white border border-slate-200 rounded-lg outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <button className="text-indigo-600 text-xs font-bold flex items-center gap-1 hover:underline">
            Ver logs antigos
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {activeTab === 'visitors' ? (
            visitors.map((v, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">
                    {v.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{v.name}</h4>
                    <p className="text-xs text-slate-500">{v.doc} • Destino: <span className="text-indigo-600 font-bold">{v.unit}</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-800 flex items-center gap-1 justify-end"><Clock className="w-3 h-3" /> {v.entry}</p>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">{v.type}</span>
                  </div>
                  <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors text-xs font-bold">
                    Encerrar
                  </button>
                </div>
              </div>
            ))
          ) : (
            deliveries.map((d, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">{d.recipient}</h4>
                    <p className="text-xs text-slate-500">{d.carrier} • Unidade: <span className="text-blue-600 font-bold">{d.unit}</span></p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-800 flex items-center gap-1 justify-end"><Clock className="w-3 h-3" /> {d.arrival}</p>
                    <span className="text-[10px] text-blue-400 uppercase tracking-widest">Aguardando Retirada</span>
                  </div>
                  <button className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg hover:bg-emerald-600 hover:text-white transition-all text-xs font-bold">
                    <Check className="w-3 h-3" /> Retirado
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ConciergeModule;
