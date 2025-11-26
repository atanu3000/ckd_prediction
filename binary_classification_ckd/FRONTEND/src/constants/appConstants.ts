/**
 * Application constants
 */

export const INITIAL_FORM_DATA = {
  age: '',
  bloodPressure: '',
  specificGravity: '',
  albumin: '',
  bloodGlucose: '',
  bloodUrea: '',
  serumCreatinine: '',
  sodium: '',
  potassium: '',
  hemoglobin: '',
  packedCellVolume: '',
  redBloodCellCount: '',
};

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

export const ANALYSIS_DELAY = 2000; // milliseconds
