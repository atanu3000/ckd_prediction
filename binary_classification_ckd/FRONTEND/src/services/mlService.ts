import type { PatientFormData, CKDRiskResult } from '../types';

/**
 * Analyze patient data using ML model logic
 * This is a mock implementation - replace with actual API call
 */
export const analyzePatientData = (formData: PatientFormData): Promise<CKDRiskResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock logic: High creatinine or low hemoglobin = Risk
      const serumCreatinine = parseFloat(formData.serumCreatinine);
      const hemoglobin = parseFloat(formData.hemoglobin);

      const isAtRisk = serumCreatinine > 1.2 || hemoglobin < 12;
      resolve(isAtRisk ? 'risk' : 'safe');
    }, 2000);
  });
};

/**
 * Validate patient form data
 */
export const validateFormData = (formData: PatientFormData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Check if required fields are filled
  Object.entries(formData).forEach(([key, value]) => {
    if (!value || value === '') {
      errors.push(`${key} is required`);
    }
  });

  // Validate numeric ranges
  const age = parseFloat(formData.age);
  if (age < 0 || age > 150) {
    errors.push('Age must be between 0 and 150');
  }

  const hemoglobin = parseFloat(formData.hemoglobin);
  if (hemoglobin < 0 || hemoglobin > 20) {
    errors.push('Hemoglobin must be between 0 and 20 gms');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
