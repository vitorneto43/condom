
import React from 'react';
import { FileText, Download, Eye, Search, Folder, MoreVertical, Shield } from 'lucide-react';

const DocumentCenter: React.FC = () => {
  const documents = [
    { name: 'Convenção do Condomínio.pdf', size: '2.4 MB', date: '01/01/2020', type: 'Institucional' },
    { name: 'Regimento Interno Atualizado.pdf', size: '1.1 MB', date: '15/06/2022', type: 'Institucional' },
    { name: 'Ata Assembleia Geral Abr-23.pdf', size: '840 KB', date: '12/04/2023', type: 'Assembleia' },
    { name: 'Contrato Manutenção Elevadores.pdf', size: '3.5 MB', date: '20/09/2023', type: 'Contratos' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Central de Documentos</h1>
          <p className="text-slate-500">Repositório oficial de leis, normas, atas e contratos.</p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
          <Folder className="w-5 h-5" />
          Nova Pasta
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Assembleias', count: 12, icon: FileText, color: 'text-blue-500' },
          { label: 'Contratos', count: 8, icon: Shield, color: 'text-indigo-500' },
          { label: 'Regimentos', count: 3, icon: Folder, color: 'text-emerald-500' },
          { label: 'Financeiro', count: 45, icon: Folder, color: 'text-amber-500' },
        ].map((cat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center ${cat.color} group-hover:scale-110 transition-transform`}>
                <cat.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm">{cat.label}</h3>
                <p className="text-xs text-slate-400">{cat.count} documentos</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input type="text" placeholder="Buscar documentos..." className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm" />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-lg">Data</button>
            <button className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded-lg">Tamanho</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <th className="px-6 py-4">Nome do Arquivo</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4">Data Upload</th>
                <th className="px-6 py-4">Tamanho</th>
                <th className="px-6 py-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {documents.map((doc, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-indigo-400" />
                      <span className="text-sm font-bold text-slate-700">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-lg bg-slate-100 text-[10px] font-black uppercase text-slate-500">{doc.type}</span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">{doc.date}</td>
                  <td className="px-6 py-4 text-xs text-slate-500">{doc.size}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                      <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"><Download className="w-4 h-4" /></button>
                      <button className="p-2 text-slate-400 hover:text-slate-600"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DocumentCenter;
