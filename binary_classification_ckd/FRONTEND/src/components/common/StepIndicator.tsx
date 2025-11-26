import React from 'react';
import { CheckCircle } from 'lucide-react';

interface StepIndicatorProps {
  step: number;
  currentStep: number;
  label: string;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ step, currentStep, label }) => {
  const isActive = step === currentStep;
  const isCompleted = step < currentStep;

  return (
    <div className="flex items-center gap-4 relative z-10">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
          isActive
            ? 'bg-blue-600 border-blue-600 text-white'
            : isCompleted
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'bg-slate-900 border-slate-600 text-slate-500'
        }`}
      >
        {isCompleted ? <CheckCircle size={16} /> : step}
      </div>
      <span className={`font-medium ${isActive ? 'text-white' : 'text-slate-500'}`}>
        {label}
      </span>
    </div>
  );
};

export default StepIndicator;
