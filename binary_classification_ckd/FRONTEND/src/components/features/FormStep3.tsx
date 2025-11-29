import React from 'react';
import { InputGroup } from '../common';
import type { PatientFormData } from '../../types';

interface FormStep3Props {
  formData: PatientFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormStep3: React.FC<FormStep3Props> = ({ formData, onChange }) => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputGroup
        label="Red Blood Cell Count"
        name="red_blood_cell_count"
        value={formData.red_blood_cell_count}
        onChange={onChange}
        placeholder="e.g. 4.5"
        unit="millions/cmm"
        info="Amount of red blood cells; low values can indicate anemia."
      />
      <InputGroup
        label="High Blood Pressure"
        name="hypertension"
        value={formData.hypertension}
        onChange={onChange}
        placeholder="0 or 1"
        unit="yes/no"
        info="1 = history of high blood pressure, 0 = no."
      />
      <InputGroup
        label="Diabetes"
        name="diabetes_mellitus"
        value={formData.diabetes_mellitus}
        onChange={onChange}
        placeholder="0 or 1"
        unit="yes/no"
        info="1 = patient has diabetes, 0 = no."
      />
      <InputGroup
        label="Appetite"
        name="appetite"
        value={formData.appetite}
        onChange={onChange}
        placeholder="1 = normal, 0 = poor"
        unit="normal/poor"
        info="1 means normal appetite, 0 means poor appetite."
      />
      <InputGroup
        label="Swelling in Legs"
        name="pedal_edema"
        value={formData.pedal_edema}
        onChange={onChange}
        placeholder="0 or 1"
        unit="yes/no"
        info="1 indicates swelling in feet/legs, 0 indicates none."
      />
      <InputGroup
        label="Anemia"
        name="anemia"
        value={formData.anemia}
        onChange={onChange}
        placeholder="0 or 1"
        unit="yes/no"
        info="1 indicates anemia present, 0 indicates not present."
      />
    </form>
  );
};

export default FormStep3;
