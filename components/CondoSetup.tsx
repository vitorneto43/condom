
import React, { useState } from 'react';
import { Building2, MapPin, Layers, Hash, Save, Info } from 'lucide-react';

const CondoSetup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: 'Edifício Horizonte Azul',
    address: 'Av. Paulista, 1000 - São Paulo, SP',
    blocks: 2,
    units: 124,
    cnpj: '00.000.000/0001-00'
  });

  return (
    <div className="space-y-8 max-w-4xl animate-in fade-in slide-in-from-left-4 duration-500">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Cadastro do Condomínio</h1>
        <p className="text-slate-500">Configure as informações estruturais básicas do seu empreendimento.</p>
      </header>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-500" /> Nome do Condomínio
            </label>
            <input 
              type="text" 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Hash className="w-4 h-4 text-indigo-500" /> CNPJ
            </label>
            <input 
              type="text" 
              value={formData.cnpj} 
              onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-500" /> Endereço Completo
            </label>
            <input 
              type="text" 
              value={formData.address} 
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-500" /> Número de Blocos/Torres
            </label>
            <input 
              type="number" 
              value={formData.blocks} 
              onChange={(e) => setFormData({...formData, blocks: Number(e.target.value)})}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-500" /> Total de Unidades
            </label>
            <input 
              type="number" 
              value={formData.units} 
              onChange={(e) => setFormData({...formData, units: Number(e.target.value)})}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-xl flex gap-3 border border-amber-100">
          <Info className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs text-amber-800 leading-relaxed">
            Alterar o número de blocos ou unidades pode impactar na geração de taxas condominiais e no histórico financeiro existente. Recomendamos fazer isso apenas em momentos de transição de gestão.
          </p>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button className="px-6 py-2 rounded-xl text-slate-600 font-bold hover:bg-slate-100 transition-colors">
            Cancelar
          </button>
          <button className="px-6 py-2 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 flex items-center gap-2 transition-all">
            <Save className="w-5 h-5" />
            Salvar Configurações
          </button>
        </div>
      </div>
    </div>
  );
};

export default CondoSetup;
