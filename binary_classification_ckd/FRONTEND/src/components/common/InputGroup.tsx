import React from 'react';

interface InputGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  unit?: string;
  icon?: React.ReactNode;
  info?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  unit,
  icon,
  info,
}) => {
  return (
    <div className="flex flex-col gap-1.5 group">
      <label className="text-sm font-semibold text-slate-700 flex items-center gap-2 relative">
        {icon && <span className="text-slate-400">{icon}</span>}
        <span>{label}</span>
        {info && (
          <span className="ml-2 relative">
            <span
              tabIndex={0}
              className="w-5 h-5 inline-flex items-center justify-center text-xs rounded-full bg-slate-100 text-slate-600 cursor-help"
              aria-label="more info"
            >
              i
            </span>
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-[-80px] top-[-10px] z-10 w-52 p-2 rounded bg-slate-800 text-white text-xs shadow-lg transition-opacity">
              {info}
            </div>
          </span>
        )}
      </label>
      <div className="relative">
        <input
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 placeholder:text-slate-400"
        />
        {unit && (
          <span className="absolute right-3 top-2.5 text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
};
export default InputGroup;
