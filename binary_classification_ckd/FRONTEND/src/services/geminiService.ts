import type { PatientFormData, GeminiResponse } from '../types';

const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent';

/**
 * Call Gemini API with a prompt
 */
export const callGeminiAPI = async (prompt: string, apiKey: string): Promise<string> => {
  try {
    const response = await fetch(`${GEMINI_API_BASE}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data: GeminiResponse = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Analysis unavailable.';
  } catch (error) {
    console.error('Gemini API Error:', error);
    return 'Could not generate insights at this time. Please try again.';
  }
};

/**
 * Generate clinical analysis prompt
 */
export const generateAnalysisPrompt = (formData: PatientFormData, result: 'risk' | 'safe'): string => {
  return `
    Act as a nephrology specialist. Analyze the following patient data for Chronic Kidney Disease (CKD) risk:
    ${JSON.stringify(formData)}
    
    The preliminary binary classification model identified the patient status as: ${result === 'risk' ? 'AT RISK' : 'LOW RISK'}.
    
    Provide a concise, 3-4 sentence clinical summary explaining *why* this result might have occurred based on the specific values provided (e.g., mention specific high/low values like Creatinine or Hemoglobin if they are abnormal). Be professional but reassuring.
  `;
};

/**
 * Generate diet plan prompt
 */
export const generateDietPrompt = (formData: PatientFormData): string => {
  return `
    Based on the following patient blood chemistry and vitals:
    ${JSON.stringify(formData)}
    
    Generate 3 specific, actionable dietary recommendations. Focus on their specific levels of Sodium, Potassium, Sugar, and Blood Pressure.
    Format the output as a simple list. Do not include markdown formatting like **bold** or *italics*, just plain text.
  `;
};
