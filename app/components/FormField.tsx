interface FormFieldProps {
  label: string;
  value?: string;
  type?: "text" | "number" | "select" | "checkbox";
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
    <div className={`flex flex-col ${className}`}>
      <label className="text-sm mb-1">{label}</label>
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
      ) : (
        <input
          type={type}
          className="border rounded-md p-2"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          placeholder="01234"
        />
      )}
    </div>
  );
}
