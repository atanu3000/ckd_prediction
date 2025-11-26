import React, { useState, useCallback } from 'react';
import { Header, Footer } from './components/common';
import {
  ClinicalForm,
  ImagingTab,
  HighRiskResult,
  LowRiskResult,
  AIAnalysisCard,
  DietPlanCard,
} from './components/features';
import { useFormData, useGeminiAnalysis } from './hooks';
import { analyzePatientData } from './services/mlService';
import { GEMINI_API_KEY } from './constants/appConstants';
import type { TabType, CKDRiskResult } from './types';

const App: React.FC = () => {
  // State management
  const [activeTab, setActiveTab] = useState<TabType>('numerical');
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<CKDRiskResult>(null);

  // Form state
  const { formData, handleInputChange, resetForm } = useFormData();

  // Gemini API state
  const { aiAnalysis, dietPlan, isLoadingAnalysis, isLoadingDiet, generateAnalysis, generateDiet } =
    useGeminiAnalysis({
      apiKey: GEMINI_API_KEY,
    });

  // Handlers
  const handleNextStep = useCallback(() => {
    if (currentStep < 3) setCurrentStep((c) => c + 1);
  }, [currentStep]);

  const handlePrevStep = useCallback(() => {
    if (currentStep > 1) setCurrentStep((c) => c - 1);
  }, [currentStep]);

  const handleSubmit = useCallback(async () => {
    setIsAnalyzing(true);
    try {
      const analysisResult = await analyzePatientData(formData);
      setResult(analysisResult);
    } catch (error) {
      console.error('Analysis error:', error);
      setResult(null);
    } finally {
      setIsAnalyzing(false);
    }
  }, [formData]);

  const handleResetForm = useCallback(() => {
    setResult(null);
    setCurrentStep(1);
    resetForm();
  }, [resetForm]);

  const handleGenerateAnalysis = useCallback(() => {
    if (result) {
      generateAnalysis(formData, result);
    }
  }, [formData, result, generateAnalysis]);

  const handleGenerateDiet = useCallback(() => {
    generateDiet(formData);
  }, [formData, generateDiet]);

  const handleGoToImaging = useCallback(() => {
    setActiveTab('imaging');
    setResult(null);
  }, []);

  const handleBackToNumerical = useCallback(() => {
    setActiveTab('numerical');
  }, []);

  // Render result screen
  if (result) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="max-w-4xl mx-auto p-6 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Result Card */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100 animate-in fade-in zoom-in duration-500">
              {result === 'risk' ? (
                <HighRiskResult
                  onNewPatient={handleResetForm}
                  onGoToImaging={handleGoToImaging}
                />
              ) : (
                <LowRiskResult
                  onNewPatient={handleResetForm}
                  onGoToImaging={handleGoToImaging}
                />
              )}
            </div>

            {/* AI Analysis Section */}
            <div className="lg:col-span-2">
              <AIAnalysisCard
                isLoading={isLoadingAnalysis}
                content={aiAnalysis}
                onGenerate={handleGenerateAnalysis}
              />
            </div>

            {/* Diet Plan Section */}
            <div>
              <DietPlanCard
                isLoading={isLoadingDiet}
                content={dietPlan}
                onGenerate={handleGenerateDiet}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Render main form screen
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow max-w-5xl mx-auto w-full p-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Early Detection System</h2>
          <p className="text-slate-500 mt-2">AI-Powered Renal Health Analysis</p>
        </div>

        {activeTab === 'numerical' ? (
          <ClinicalForm
            formData={formData}
            currentStep={currentStep}
            isAnalyzing={isAnalyzing}
            onInputChange={handleInputChange}
            onPrevStep={handlePrevStep}
            onNextStep={handleNextStep}
            onSubmit={handleSubmit}
          />
        ) : (
          <ImagingTab onBackToNumerical={handleBackToNumerical} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;