import React from 'react';
import { Activity, HeartPulse, Droplet, Thermometer } from 'lucide-react';
import { InputGroup } from '../common';
import type { PatientFormData } from '../../types';

interface FormStep1Props {
  formData: PatientFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormStep1: React.FC<FormStep1Props> = ({ formData, onChange }) => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputGroup
        label="Age"
        name="age"
        value={formData.age}
        onChange={onChange}
        placeholder="e.g. 45"
        unit="years"
        icon={<Activity size={16} />}
      />
      <InputGroup
        label="Blood Pressure"
        name="bloodPressure"
        value={formData.bloodPressure}
        onChange={onChange}
        placeholder="e.g. 80"
        unit="mm/Hg"
        icon={<HeartPulse size={16} />}
      />
      <InputGroup
        label="Specific Gravity"
        name="specificGravity"
        value={formData.specificGravity}
        onChange={onChange}
        placeholder="e.g. 1.020"
        unit="sg"
        icon={<Droplet size={16} />}
      />
      <InputGroup
        label="Albumin"
        name="albumin"
        value={formData.albumin}
        onChange={onChange}
        placeholder="0 - 5"
        unit="levels"
        icon={<Thermometer size={16} />}
      />
    </form>
  );
};

export default FormStep1;
