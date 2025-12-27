
import React from 'react';
import { Calendar, Users, Info, ChevronRight, Plus, MapPin } from 'lucide-react';

const ReservationsModule: React.FC = () => {
  const areas = [
    { name: 'Salão de Festas', capacity: '80 pessoas', price: 'R$ 200,00', color: 'bg-indigo-500', img: 'https://picsum.photos/400/200?random=10' },
    { name: 'Churrasqueira A', capacity: '15 pessoas', price: 'R$ 50,00', color: 'bg-orange-500', img: 'https://picsum.photos/400/200?random=11' },
    { name: 'Academia', capacity: '5 pessoas', price: 'Isento', color: 'bg-emerald-500', img: 'https://picsum.photos/400/200?random=12' },
    { name: 'Piscina', capacity: 'Limitada', price: 'Isento', color: 'bg-blue-500', img: 'https://picsum.photos/400/200?random=13' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Reservas & Áreas Comuns</h1>
          <p className="text-slate-500">Agende espaços e confira as regras de uso de cada área.</p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
          <Calendar className="w-5 h-5" />
          Minhas Reservas
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map((area, i) => (
          <div key={i} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden group hover:border-indigo-300 transition-all flex flex-col">
            <div className="h-32 overflow-hidden relative">
              <img src={area.img} alt={area.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-lg text-[10px] font-black text-white shadow-lg ${area.color}`}>
                  {area.price}
                </span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-bold text-slate-900 text-lg mb-1">{area.name}</h3>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                <Users className="w-3 h-3" /> {area.capacity}
              </div>
              <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                <button className="text-indigo-600 font-bold text-xs hover:underline flex items-center gap-1">Regras <Info className="w-3 h-3" /></button>
                <button className="bg-slate-100 p-2 rounded-lg text-slate-600 hover:bg-indigo-600 hover:text-white transition-all">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-slate-800">Calendário de Disponibilidade</h2>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50">Anterior</button>
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50">Próximo</button>
            </div>
          </div>
          <div className="p-6 h-[400px] flex items-center justify-center text-slate-400 text-sm">
            {/* Calendar Mockup */}
            <div className="grid grid-cols-7 gap-2 w-full text-center">
              {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(d => (
                <div key={d} className="font-black text-[10px] uppercase text-slate-300 mb-2">{d}</div>
              ))}
              {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className={`aspect-square flex flex-col items-center justify-center rounded-xl border border-slate-50 text-xs font-medium cursor-pointer hover:bg-indigo-50 hover:text-indigo-600 transition-colors ${i + 1 === 12 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-slate-50/30'}`}>
                  {i + 1}
                  {i + 1 === 12 && <div className="w-1 h-1 bg-white rounded-full mt-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col">
          <h2 className="text-xl font-bold mb-6">Reservas de Hoje</h2>
          <div className="space-y-6 flex-1">
            {[
              { time: '18:00 - 22:00', area: 'Salão de Festas', user: 'Sandra Ap. 402', status: 'Confirmado' },
              { time: '19:00 - 21:00', area: 'Academia', user: 'Roberto Ap. 113', status: 'Confirmado' },
            ].map((r, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-indigo-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50" />
                <p className="text-xs font-bold text-indigo-400 mb-1">{r.time}</p>
                <h4 className="font-bold text-lg mb-1">{r.area}</h4>
                <p className="text-sm text-slate-400">{r.user}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white/5 p-4 rounded-2xl">
            <p className="text-xs text-indigo-200 leading-relaxed italic">
              "Lembre-se: O cancelamento sem ônus deve ser feito com pelo menos 48h de antecedência conforme o Regimento Interno."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationsModule;
