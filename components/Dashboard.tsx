
import React from 'react';
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Calendar,
  CheckCircle2,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  // Fix: Added missing Megaphone icon import
  Megaphone
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Jan', receita: 4000, despesa: 2400 },
  { name: 'Fev', receita: 3000, despesa: 1398 },
  { name: 'Mar', receita: 2000, despesa: 9800 },
  { name: 'Abr', receita: 2780, despesa: 3908 },
  { name: 'Mai', receita: 1890, despesa: 4800 },
  { name: 'Jun', receita: 2390, despesa: 3800 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Visão Geral</h1>
          <p className="text-slate-500">Bem-vindo ao painel de controle do Edifício Horizonte.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium hover:bg-slate-50 shadow-sm transition-all">
            Exportar Relatório
          </button>
          <button className="bg-indigo-600 px-4 py-2 rounded-lg text-white text-sm font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
            Novo Comunicado
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Inadimplência" 
          value="12.5%" 
          trend="+2.1%" 
          trendType="negative"
          icon={AlertTriangle} 
          color="bg-amber-500" 
        />
        <StatCard 
          label="Receita Mensal" 
          value="R$ 45.200" 
          trend="+5.4%" 
          trendType="positive"
          icon={TrendingUp} 
          color="bg-emerald-500" 
        />
        <StatCard 
          label="Chamados Abertos" 
          value="8" 
          trend="-3" 
          trendType="positive"
          icon={CheckCircle2} 
          color="bg-indigo-500" 
        />
        <StatCard 
          label="Entregas Pendentes" 
          value="14" 
          trend="+2" 
          trendType="neutral"
          icon={Package} 
          color="bg-blue-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800">Saúde Financeira (R$)</h2>
            <select className="bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-lg px-2 py-1 outline-none cursor-pointer">
              <option>Últimos 6 meses</option>
              <option>Este ano</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  cursor={{ fill: '#f8fafc' }}
                />
                <Bar dataKey="receita" fill="#10b981" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="despesa" fill="#f43f5e" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sidebar Tasks/Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Próximas Reservas</h2>
            <div className="space-y-4">
              {[
                { area: 'Salão de Festas', user: 'Ap 402', time: 'Hoje, 18:00' },
                { area: 'Churrasqueira A', user: 'Ap 113', time: 'Amanhã, 12:00' },
                { area: 'Academia', user: 'Ap 221', time: 'Amanhã, 07:00' },
              ].map((res, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{res.area}</p>
                    <p className="text-xs text-slate-500">{res.user} • {res.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-600 p-6 rounded-2xl shadow-lg shadow-indigo-100 text-white overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-lg font-bold mb-2">Assembleia Geral</h2>
              <p className="text-indigo-100 text-sm mb-4">Votação sobre a reforma da fachada aberta até sexta-feira.</p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors">
                Ver Enquete
              </button>
            </div>
            <Megaphone className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 rotate-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: string;
  trend: string;
  trendType: 'positive' | 'negative' | 'neutral';
  icon: React.ElementType;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, trend, trendType, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
        trendType === 'positive' ? 'bg-emerald-50 text-emerald-600' : 
        trendType === 'negative' ? 'bg-rose-50 text-rose-600' : 'bg-slate-100 text-slate-600'
      }`}>
        {trendType === 'positive' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
        {trend}
      </div>
    </div>
    <p className="text-slate-500 text-sm font-medium">{label}</p>
    <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
  </div>
);

export default Dashboard;
