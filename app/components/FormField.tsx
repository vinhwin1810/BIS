interface FormFieldProps {
  label: string;
  value?: string;
  type?: "text" | "number" | "select" | "checkbox" | "long text";
  options?: string[];
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export default function FormField({
  label,
  value,
  type = "text",
  options,
  onChange,
  disabled,
  className,
}: FormFieldProps) {
  return (
    <div className={`flex items-center justify-between ${type === 'text' || type === 'number' ? 'border-b border-gray-300' : ''} ${className}`}>
      <label className="text-sm">{label}</label>
      {type === "select" ? (
        <select
          className="border rounded-md p-2 bg-white"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
        >
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : type === "checkbox" ? (
        <input
          type="checkbox"
          className="w-5 h-5 border rounded-md"
          checked={value === "true"}
          onChange={(e) => onChange?.(e.target.checked.toString())}
          disabled={disabled}
        />
      ) : type === "long text" ? (  
        <input
          type={type}
          className={`text-right focus:outline-none min-w-0 ${value ? 'w-auto' : 'w-[50px]'}`}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          placeholder="01234"
        />
      ) : (
        <input
          type={type}
          className={`text-right focus:outline-none min-w-0 ${value ? 'w-auto' : 'w-[50px]'}`}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          placeholder="01234"
        />
      )}
    </div>
  );
}
