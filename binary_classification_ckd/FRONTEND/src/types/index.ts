/**
 * Core application types and interfaces
 */

export interface PatientFormData {
  blood_pressure: string;
  specific_gravity: string;
  albumin: string;
  pus_cell: string;
  blood_glucose_random: string;
  blood_urea: string;
  serum_creatinine: string;
  sodium: string;
  hemoglobin: string;
  packed_cell_volume: string;
  red_blood_cell_count: string;
  hypertension: string;
  diabetes_mellitus: string;
  appetite: string;
  pedal_edema: string;
  anemia: string;
  pus_cell_clumps_notpresent: string;
  pus_cell_clumps_present: string;
}

export type CKDRiskResult = 'risk' | 'safe' | null;

export interface AILoadingState {
  analysis: boolean;
  diet: boolean;
}

export type TabType = 'numerical' | 'imaging';

export interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
}
