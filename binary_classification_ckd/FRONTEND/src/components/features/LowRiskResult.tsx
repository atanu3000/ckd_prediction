import React from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

interface LowRiskResultProps {
  onNewPatient: () => void;
  onGoToImaging: () => void;
}

const LowRiskResult: React.FC<LowRiskResultProps> = ({ onNewPatient, onGoToImaging }) => {
  return (
    <div>
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={40} className="text-green-600" />
      </div>
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Low Probability of CKD</h2>
      <p className="text-slate-600 mb-6">Metrics are within expected ranges.</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={onNewPatient}
          className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors"
        >
          New Patient
        </button>
        <button
          onClick={onGoToImaging}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors flex items-center gap-2"
        >
          Go to Imaging <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default LowRiskResult;
