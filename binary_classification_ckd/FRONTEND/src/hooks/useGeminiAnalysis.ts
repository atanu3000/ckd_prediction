import { useState, useCallback } from 'react';
import { callGeminiAPI, generateAnalysisPrompt, generateDietPrompt } from '../services/geminiService';
import type { PatientFormData } from '../types';

interface UseGeminiAnalysisProps {
  apiKey: string;
}

/**
 * Custom hook for Gemini API analysis
 */
export const useGeminiAnalysis = ({ apiKey }: UseGeminiAnalysisProps) => {
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [dietPlan, setDietPlan] = useState('');
  const [isLoadingAnalysis, setIsLoadingAnalysis] = useState(false);
  const [isLoadingDiet, setIsLoadingDiet] = useState(false);

  const generateAnalysis = useCallback(
    async (formData: PatientFormData, result: 'risk' | 'safe') => {
      setIsLoadingAnalysis(true);
      try {
        const prompt = generateAnalysisPrompt(formData, result);
        const text = await callGeminiAPI(prompt, apiKey);
        setAiAnalysis(text);
      } finally {
        setIsLoadingAnalysis(false);
      }
    },
    [apiKey]
  );

  const generateDiet = useCallback(
    async (formData: PatientFormData) => {
      setIsLoadingDiet(true);
      try {
        const prompt = generateDietPrompt(formData);
        const text = await callGeminiAPI(prompt, apiKey);
        setDietPlan(text);
      } finally {
        setIsLoadingDiet(false);
      }
    },
    [apiKey]
  );

  return {
    aiAnalysis,
    dietPlan,
    isLoadingAnalysis,
    isLoadingDiet,
    generateAnalysis,
    generateDiet,
  };
};
