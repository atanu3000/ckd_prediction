import React from 'react';
import { InputGroup } from '../common';
import type { PatientFormData } from '../../types';

interface FormStep2Props {
  formData: PatientFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormStep2: React.FC<FormStep2Props> = ({ formData, onChange }) => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputGroup
        label="Blood Glucose (Random)"
        name="bloodGlucose"
        value={formData.bloodGlucose}
        onChange={onChange}
        placeholder="e.g. 120"
        unit="mgs/dl"
      />
      <InputGroup
        label="Blood Urea"
        name="bloodUrea"
        value={formData.bloodUrea}
        onChange={onChange}
        placeholder="e.g. 36"
        unit="mgs/dl"
      />
      <InputGroup
        label="Serum Creatinine"
        name="serumCreatinine"
        value={formData.serumCreatinine}
        onChange={onChange}
        placeholder="e.g. 1.2"
        unit="mgs/dl"
      />
      <InputGroup
        label="Sodium"
        name="sodium"
        value={formData.sodium}
        onChange={onChange}
        placeholder="e.g. 137"
        unit="mEq/L"
      />
    </form>
  );
};

export default FormStep2;
