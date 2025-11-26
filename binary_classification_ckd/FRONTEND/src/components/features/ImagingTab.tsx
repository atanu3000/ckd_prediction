import React from 'react';
import { Upload } from 'lucide-react';

interface ImagingTabProps {
  onBackToNumerical: () => void;
}

const ImagingTab: React.FC<ImagingTabProps> = ({ onBackToNumerical }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-12 text-center min-h-[500px] flex flex-col items-center justify-center">
      <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
        <Upload size={40} className="text-slate-400" />
      </div>
      <h3 className="text-2xl font-bold text-slate-800 mb-2">Medical Imaging Analysis</h3>
      <p className="text-slate-500 max-w-md mx-auto mb-8">
        Upload CT Scan or MRI DICOM files for deep learning segmentation and disease identification.
      </p>
      <button disabled className="px-6 py-3 bg-slate-100 text-slate-400 font-semibold rounded-lg cursor-not-allowed border border-slate-200">
        Module Coming Soon
      </button>
      <button
        onClick={onBackToNumerical}
        className="mt-6 text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        Return to Binary Classification
      </button>
    </div>
  );
};

export default ImagingTab;
