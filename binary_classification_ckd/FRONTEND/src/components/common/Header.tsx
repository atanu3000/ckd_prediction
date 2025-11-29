import React from 'react';
import { Activity } from 'lucide-react';
import type { TabType } from '../../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-700">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Activity className="text-white" size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight">
            Nephro<span className="text-slate-900">AI</span>
          </span>
        </div>

        <nav className="flex bg-slate-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('numerical')}
            className={`w-fit px-1 sm:px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              activeTab === 'numerical'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Clinical Data
          </button>
          <button
            onClick={() => setActiveTab('imaging')}
            className={`w-fit px-1 sm:px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              activeTab === 'imaging'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Image Diagnostics
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
