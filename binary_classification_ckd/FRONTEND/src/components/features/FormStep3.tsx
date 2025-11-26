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
        label="Potassium"
        name="potassium"
        value={formData.potassium}
        onChange={onChange}
        placeholder="e.g. 4.5"
        unit="mEq/L"
      />
      <InputGroup
        label="Hemoglobin"
        name="hemoglobin"
        value={formData.hemoglobin}
        onChange={onChange}
        placeholder="e.g. 15.4"
        unit="gms"
      />
      <InputGroup
        label="Packed Cell Volume"
        name="packedCellVolume"
        value={formData.packedCellVolume}
        onChange={onChange}
        placeholder="e.g. 44"
        unit="%"
      />
      <InputGroup
        label="Red Blood Cell Count"
        name="redBloodCellCount"
        value={formData.redBloodCellCount}
        onChange={onChange}
        placeholder="e.g. 5.2"
        unit="millions/cmm"
      />
    </form>
  );
};

export default FormStep3;
