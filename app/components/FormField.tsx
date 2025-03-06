"use client"

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from "@/app/components/ui/select";

import Hamburger from "./IM_Hamburger"

interface FormFieldProps {
  label: string;
  value?: string;
  type?: "text" | "select" | "checkbox" | "long text" | "hamburger";
  options?: string[];
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  isFirst?: boolean;
  icon?: React.ReactNode
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

  const [selectedValue, setSelectedValue] = React.useState(value || "")

  return (
    <div
      className={`flex ${
        type === "long text"
          ? "flex-col"
          : type === "checkbox"
          ? "items-center mt-2 mb-2"
          : "items-center justify-between"
      } 
                    ${
                      ["text", "select", "hamburger"].includes(type)
                        ? "border-b border-gray-300"
                        : ""
                    } 
                    ${!isFirst ? "mt-4" : ""}
                    ${className}`}
    >
      {type !== "select" && (
        <label
          className={`${
            type === "checkbox" ? "w-full" : ""
          } text-sm text-gray-500`}
        >
          {label}
        </label>
      )}
      {type === "select" ? (
        <Select
          value={selectedValue}
          onValueChange={(newValue) => {
            setSelectedValue(newValue)
            onChange?.(newValue)
          }}
          disabled={disabled}
        >
          <SelectTrigger className="text-gray-500">
            <div className="flex items-center justify-between w-full">
              <span className="text-muted-foreground">{label}</span>
              {selectedValue && (
                <span className="font-medium mr-2 text-gray-500">
                  {selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)}
                </span>
              )}
            </div>
          </SelectTrigger>
          <SelectContent className="text-gray-500">
            {options?.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
      ) : type === "hamburger" ? ( 
          <Hamburger />
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
