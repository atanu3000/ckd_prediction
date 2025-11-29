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
        label="Pus Cell Clumps (Present)"
        name="pus_cell_clumps_present"
        value={formData.pus_cell_clumps_present}
        onChange={onChange}
        placeholder="0 or 1"
        unit="binary"
        info="Binary flag: 1 if clumps are present in urine sample, 0 otherwise."
      />
      <InputGroup
        label="Blood Urea"
        name="blood_urea"
        value={formData.blood_urea}
        onChange={onChange}
        placeholder="e.g. 36"
        unit="mg/dL"
      />
      <InputGroup
        label="Serum Creatinine"
        name="serum_creatinine"
        value={formData.serum_creatinine}
        onChange={onChange}
        placeholder="e.g. 1.2"
        unit="mg/dL"
      />
      <InputGroup
        label="Sodium"
        name="sodium"
        value={formData.sodium}
        onChange={onChange}
        placeholder="e.g. 137"
        unit="mEq/L"
      />
      <InputGroup
        label="Hemoglobin"
        name="hemoglobin"
        value={formData.hemoglobin}
        onChange={onChange}
        placeholder="e.g. 14.0"
        unit="g/dL"
      />
      <InputGroup
        label="Packed Cell Volume"
        name="packed_cell_volume"
        value={formData.packed_cell_volume}
        onChange={onChange}
        placeholder="e.g. 42"
        unit="%"
        info="Proportion of blood made up of red cells; used to check anemia."
      />
    </form>
  );
};

export default FormStep2;
