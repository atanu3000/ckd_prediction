import { useState, useCallback } from 'react';
import type { PatientFormData } from '../types';
import { INITIAL_FORM_DATA } from '../constants/appConstants';

/**
 * Custom hook for managing form state
 */
export const useFormData = () => {
  const [formData, setFormData] = useState<PatientFormData>(INITIAL_FORM_DATA);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
  }, []);

  return { formData, handleInputChange, resetForm, setFormData };
};
