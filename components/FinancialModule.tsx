
import React from 'react';
import { DollarSign, FileDown, PlusCircle, CreditCard, PieChart, TrendingDown, ArrowUp, ArrowDown } from 'lucide-react';

const FinancialModule: React.FC = () => {
  const transactions = [
    { id: 1, desc: 'Taxa Condominial Out/23', type: 'receita', amount: 12500.00, status: 'Pago', unit: 'Total' },
    { id: 2, desc: 'Manutenção Jardim', type: 'despesa', amount: 1200.00, status: 'Efetuado', unit: '-' },
    { id: 3, desc: 'Conserto Portão Garagem', type: 'despesa', amount: 3500.00, status: 'Efetuado', unit: '-' },
    { id: 4, desc: 'Taxa Extra Pintura', type: 'receita', amount: 5000.00, status: 'Pendente', unit: 'B-101' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Financeiro & Prestação de Contas</h1>
          <p className="text-slate-500">Acompanhe receitas, despesas e inadimplência em tempo real.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-50">
            <FileDown className="w-4 h-4" /> Gerar Balancete
          </button>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-emerald-700 shadow-lg shadow-emerald-100">
            <PlusCircle className="w-4 h-4" /> Registrar Movimento
          </button>
        </div>
      </header>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-indigo-600">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Saldo Atual em Caixa</p>
          <h3 className="text-2xl font-black text-slate-900">R$ 142.850,22</h3>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full w-fit">
            <ArrowUp className="w-3 h-3" /> +12% este mês
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-rose-500">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Despesas Mês</p>
          <h3 className="text-2xl font-black text-slate-900">R$ 28.400,00</h3>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-full w-fit">
            <ArrowDown className="w-3 h-3" /> -5% que previsto
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-amber-500">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Inadimplência</p>
          <h3 className="text-2xl font-black text-slate-900">R$ 15.220,00</h3>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full w-fit">
            7 unidades pendentes
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-bold text-slate-800">Últimas Movimentações</h2>
          <button className="text-indigo-600 text-xs font-bold hover:underline">Ver Histórico Completo</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-xs font-black uppercase tracking-widest">
                <th className="px-6 py-4">Descrição</th>
                <th className="px-6 py-4">Tipo</th>
                <th className="px-6 py-4">Unidade</th>
                <th className="px-6 py-4 text-right">Valor</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-slate-800">{t.desc}</p>
                    <p className="text-xs text-slate-400">ID #2023{t.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${
                      t.type === 'receita' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {t.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{t.unit}</td>
                  <td className={`px-6 py-4 text-sm font-black text-right ${t.type === 'receita' ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {t.type === 'receita' ? '+' : '-'} R$ {t.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium ${t.status === 'Pago' || t.status === 'Efetuado' ? 'text-slate-500' : 'text-amber-500 font-bold'}`}>
                      {t.status}
                    </span>
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

export default FinancialModule;
