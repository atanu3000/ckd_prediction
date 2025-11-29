import React from 'react';
import { Activity, HeartPulse, Droplet, Zap } from 'lucide-react';
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
        label="Blood Pressure"
        name="blood_pressure"
        value={formData.blood_pressure}
        onChange={onChange}
        placeholder="e.g. 120"
        unit="mm Hg"
        icon={<HeartPulse size={16} />}
      />
      <InputGroup
        label="Specific Gravity"
        name="specific_gravity"
        value={formData.specific_gravity}
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
        icon={<Activity size={16} />}
        info="Protein in urine measured as levels (0 = none, higher values indicate more protein)."
      />
      <InputGroup
        label="Blood Glucose (Random)"
        name="blood_glucose_random"
        value={formData.blood_glucose_random}
        onChange={onChange}
        placeholder="e.g. 125"
        unit="mg/dL"
        icon={<Zap size={16} />}
      />
      <InputGroup
        label="Pus Cell"
        name="pus_cell"
        value={formData.pus_cell}
        onChange={onChange}
        placeholder="0 or 1"
        unit="present/absent"
        info="Indicates presence of pus cells in urine (1 = present, 0 = not present)."
      />
      <InputGroup
        label="Pus Cell Clumps (Not Present)"
        name="pus_cell_clumps_notpresent"
        value={formData.pus_cell_clumps_notpresent}
        onChange={onChange}
        placeholder="0 or 1"
        unit="binary"
        info="Binary flag: 1 if clumps are not present, 0 otherwise."
      />
    </form>
  );
};

export default FormStep1;
