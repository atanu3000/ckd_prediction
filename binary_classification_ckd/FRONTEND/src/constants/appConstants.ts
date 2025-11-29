/**
 * Application constants
 */

export const INITIAL_FORM_DATA = {
  blood_pressure: '',
  specific_gravity: '',
  albumin: '',
  pus_cell: '',
  blood_glucose_random: '',
  blood_urea: '',
  serum_creatinine: '',
  sodium: '',
  hemoglobin: '',
  packed_cell_volume: '',
  red_blood_cell_count: '',
  hypertension: '',
  diabetes_mellitus: '',
  appetite: '',
  pedal_edema: '',
  anemia: '',
  pus_cell_clumps_notpresent: '',
  pus_cell_clumps_present: '',
};

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

export const ANALYSIS_DELAY = 2000; // milliseconds
