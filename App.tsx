
import React, { useState } from 'react';
import { AppView } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CondoSetup from './components/CondoSetup';
import PeopleManagement from './components/PeopleManagement';
import FinancialModule from './components/FinancialModule';
import ReservationsModule from './components/ReservationsModule';
import CommunicationModule from './components/CommunicationModule';
import MaintenanceModule from './components/MaintenanceModule';
import DocumentCenter from './components/DocumentCenter';
import ConciergeModule from './components/ConciergeModule';
import OthersModule from './components/OthersModule';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return <Dashboard />;
      case AppView.CONDO_SETUP: return <CondoSetup />;
      case AppView.PEOPLE: return <PeopleManagement />;
      case AppView.FINANCIAL: return <FinancialModule />;
      case AppView.RESERVATIONS: return <ReservationsModule />;
      case AppView.COMMUNICATION: return <CommunicationModule />;
      case AppView.MAINTENANCE: return <MaintenanceModule />;
      case AppView.DOCUMENTS: return <DocumentCenter />;
      case AppView.CONCIERGE: return <ConciergeModule />;
      case AppView.OTHERS: return <OthersModule />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
