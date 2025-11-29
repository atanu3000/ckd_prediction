import type { PatientFormData, CKDRiskResult } from '../types';

/**
 * Analyze patient data using ML model logic
 * This is a mock implementation - replace with actual API call
 */
export const analyzePatientData = (formData: PatientFormData): Promise<CKDRiskResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock logic: High creatinine or low hemoglobin = Risk
      const serumCreatinine = parseFloat(formData.serum_creatinine);
      const hemoglobin = parseFloat(formData.hemoglobin);

      const isAtRisk = serumCreatinine > 1.2 || hemoglobin < 12;
      resolve(isAtRisk ? 'risk' : 'safe');
    }, 2000);
  });
};

/**
 * Transform form data to API request format
 */
export const transformFormData = (formData: PatientFormData) => {
  return {
    data: {
      blood_pressure: parseFloat(formData.blood_pressure) || 0,
      specific_gravity: parseFloat(formData.specific_gravity) || 0,
      albumin: parseFloat(formData.albumin) || 0,
      pus_cell: parseFloat(formData.pus_cell) || 0,
      blood_glucose_random: parseFloat(formData.blood_glucose_random) || 0,
      blood_urea: parseFloat(formData.blood_urea) || 0,
      serum_creatinine: parseFloat(formData.serum_creatinine) || 0,
      sodium: parseFloat(formData.sodium) || 0,
      hemoglobin: parseFloat(formData.hemoglobin) || 0,
      packed_cell_volume: parseFloat(formData.packed_cell_volume) || 0,
      red_blood_cell_count: parseFloat(formData.red_blood_cell_count) || 0,
      hypertension: parseFloat(formData.hypertension) || 0,
      diabetes_mellitus: parseFloat(formData.diabetes_mellitus) || 0,
      appetite: parseFloat(formData.appetite) || 0,
      pedal_edema: parseFloat(formData.pedal_edema) || 0,
      anemia: parseFloat(formData.anemia) || 0,
      pus_cell_clumps_notpresent: parseFloat(formData.pus_cell_clumps_notpresent) || 0,
      pus_cell_clumps_present: parseFloat(formData.pus_cell_clumps_present) || 0,
    }
  };
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

  // Validate numeric ranges for key fields
  const hemoglobin = parseFloat(formData.hemoglobin);
  if (hemoglobin && (hemoglobin < 0 || hemoglobin > 20)) {
    errors.push('Hemoglobin must be between 0 and 20 g/dL');
  }

  const serumCreatinine = parseFloat(formData.serum_creatinine);
  if (serumCreatinine && (serumCreatinine < 0 || serumCreatinine > 10)) {
    errors.push('Serum Creatinine must be between 0 and 10 mg/dL');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
