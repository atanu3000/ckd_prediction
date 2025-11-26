import React from 'react';
import { FileText } from 'lucide-react';

interface AIAnalysisCardProps {
  isLoading: boolean;
  content: string;
  onGenerate: () => void;
}

const AIAnalysisCard: React.FC<AIAnalysisCardProps> = ({ isLoading, content, onGenerate }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-purple-100 p-2 rounded-lg">
          <FileText size={20} className="text-purple-600" />
        </div>
        <h3 className="text-lg font-bold text-slate-800">AI Clinical Insights</h3>
      </div>

      <div className="flex-grow bg-slate-50 rounded-xl p-4 mb-4 text-sm text-slate-700 leading-relaxed min-h-[100px]">
        {isLoading ? (
          <div className="flex items-center justify-center h-full text-purple-600 gap-2">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <span>Analyzing metrics...</span>
          </div>
        ) : content ? (
          content
        ) : (
          <span className="text-slate-400 italic">
            Generate an AI analysis to understand the specific risk factors found in this patient's data.
          </span>
        )}
      </div>

      <button
        onClick={onGenerate}
        disabled={isLoading}
        className="w-full py-2.5 border-2 border-purple-100 hover:border-purple-200 hover:bg-purple-50 text-purple-700 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <FileText size={18} /> Generate Detailed Report ✨
      </button>
    </div>
  );
};

export default AIAnalysisCard;
