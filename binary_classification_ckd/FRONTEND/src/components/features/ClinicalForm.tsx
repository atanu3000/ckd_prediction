import React from 'react';
import { Info, ChevronLeft, ChevronRight, Activity } from 'lucide-react';
import { StepIndicator } from '../common';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import type { PatientFormData } from '../../types';

interface ClinicalFormProps {
  formData: PatientFormData;
  currentStep: number;
  isAnalyzing: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSubmit: () => void;
}

const ClinicalForm: React.FC<ClinicalFormProps> = ({
  formData,
  currentStep,
  isAnalyzing,
  onInputChange,
  onPrevStep,
  onNextStep,
  onSubmit,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
      {/* Sidebar */}
      <div className="bg-slate-900 text-white p-8 md:w-1/3 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold">Clinical Data</h3>
          </div>
          <div className="space-y-6 relative">
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-700 -z-0"></div>
            <StepIndicator step={1} currentStep={currentStep} label="Blood Chemistry & Vitals" />
            <StepIndicator step={2} currentStep={currentStep} label="Metabolic Markers" />
            <StepIndicator step={3} currentStep={currentStep} label="Clinical Indicators" />
          </div>
        </div>
        <div className="mt-8 p-4 bg-slate-800 rounded-lg text-sm text-slate-300">
          <div className="flex items-start gap-2">
            <Info size={16} className="mt-1 flex-shrink-0 text-blue-400" />
            <p>All data is processed locally before being sent to the secure inference engine.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 md:w-2/3 flex flex-col">
        {isAnalyzing ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
            <h3 className="text-xl font-semibold text-slate-800">Processing Data...</h3>
            <p className="text-slate-500 mt-2">Running Random Forest Classifier</p>
          </div>
        ) : (
          <>
            <div className="flex-grow">
              <div className="mb-6 flex justify-between items-end">
                <h3 className="text-2xl font-bold text-slate-800">
                  {currentStep === 1 && 'Blood Chemistry & Vitals'}
                  {currentStep === 2 && 'Metabolic Markers'}
                  {currentStep === 3 && 'Clinical Indicators'}
                </h3>
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Step {currentStep} of 3
                </span>
              </div>

              {currentStep === 1 && <FormStep1 formData={formData} onChange={onInputChange} />}
              {currentStep === 2 && <FormStep2 formData={formData} onChange={onInputChange} />}
              {currentStep === 3 && <FormStep3 formData={formData} onChange={onInputChange} />}
            </div>

            {/* Navigation Buttons (responsive) */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-between gap-3">
              <button
                onClick={onPrevStep}
                disabled={currentStep === 1}
                className={`w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 px-6 py-2.5 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'text-slate-300 cursor-not-allowed bg-transparent'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 bg-white'
                }`}
              >
                <ChevronLeft size={18} />
                <span className="ml-1">Previous</span>
              </button>

              <div className="w-full sm:w-auto flex gap-3">
                {currentStep < 3 ? (
                  <button
                    onClick={onNextStep}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-medium shadow-md shadow-blue-200 transition-all active:scale-95"
                  >
                    <span>Next Step</span>
                    <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    onClick={onSubmit}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-2.5 rounded-lg font-medium shadow-md shadow-emerald-200 transition-all active:scale-95"
                  >
                    <span>Run Analysis</span>
                    <Activity size={18} />
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ClinicalForm;
