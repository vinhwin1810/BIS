interface FormFieldProps {
  label: string;
  value?: string;
  type?: "text" | "number" | "select" | "checkbox" | "long text";
  options?: string[];
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  isFirst?: boolean;
}

export default function FormField({
  label,
  value,
  type = "text",
  options,
  onChange,
  disabled,
  className,
  isFirst = false,
}: FormFieldProps) {
  return (
    <div className={`flex ${type === "long text" ? "flex-col" : type === "checkbox" ? "items-center mt-2 mb-2" : "items-center justify-between"} 
                    ${["text", "select", "number"].includes(type) ? 'border-b border-gray-300' : ''} 
                    ${!isFirst ? "mt-4" : ""}
                    ${className}`}>
      <label className={`${type==="checkbox" ? "w-24" : ""} text-sm text-gray-500`}>{label}</label>
      {type === "select" ? (
        <select
          className="text-gray-400"
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
        <textarea
          className="p-2 rounded-md bg-gray-100 resize-none"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          rows={4} // Adjust the number of rows as needed
        />
      ) : (
        <input
          type={type}
          className="text-right focus:outline-none w-24"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          placeholder="01234"
        />
      )}
    </div>
  );
}
