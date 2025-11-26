import React from 'react';
import { Sparkles, Utensils } from 'lucide-react';

interface DietPlanCardProps {
  isLoading: boolean;
  content: string;
  onGenerate: () => void;
}

const DietPlanCard: React.FC<DietPlanCardProps> = ({ isLoading, content, onGenerate }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-orange-100 p-2 rounded-lg">
          <Utensils size={20} className="text-orange-600" />
        </div>
        <h3 className="text-lg font-bold text-slate-800">Dietary Plan</h3>
      </div>

      <div className="flex-grow bg-slate-50 rounded-xl p-4 mb-4 text-sm text-slate-700 min-h-[100px]">
        {isLoading ? (
          <div className="flex items-center justify-center h-full text-orange-600 gap-2">
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        ) : content ? (
          <div className="whitespace-pre-line">{content}</div>
        ) : (
          <span className="text-slate-400 italic">
            Get personalized food recommendations based on sodium & sugar levels.
          </span>
        )}
      </div>

      <button
        onClick={onGenerate}
        disabled={isLoading}
        className="w-full py-2.5 border-2 border-orange-100 hover:border-orange-200 hover:bg-orange-50 text-orange-700 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Sparkles size={18} /> Recommend Diet ✨
      </button>
    </div>
  );
};

export default DietPlanCard;
