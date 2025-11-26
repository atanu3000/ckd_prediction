/**
 * Core application types and interfaces
 */

export interface PatientFormData {
  age: string;
  bloodPressure: string;
  specificGravity: string;
  albumin: string;
  bloodGlucose: string;
  bloodUrea: string;
  serumCreatinine: string;
  sodium: string;
  potassium: string;
  hemoglobin: string;
  packedCellVolume: string;
  redBloodCellCount: string;
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
