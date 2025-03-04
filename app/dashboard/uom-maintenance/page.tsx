"use client";

import { useState } from "react";
import User from "@/app/components/User";
import SearchBar from "@/app/components/Search";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";
import { ActionsOptions } from "@/app/components/constants/uom-maintenance-constants"

import MaintenanceSection from "@/app/components/MaintenanceSection";
import FormField from "@/app/components/FormField";

// Define the type for action items
interface ActionItem {
  title: string;
  icon: JSX.Element;
  items?: { title: string; icon?: JSX.Element; subItems?: string[] }[]; // Updated to support objects inside `items`
}


export default function UOMMaintenance() {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-4 text-[rgb(51,51,51)] flex items-center justify-between gap-4 mb-0">
        <SearchBar/>
        <User />
      </div>
      <div className="px-6 py-4 text-[rgb(51,51,51)] flex items-start gap-6 mb-2">
          <ActionsButton/>
          <CreateButton/>
      </div>
      <div className="top-full left-0 w-full h-60 bg-white shadow-lg rounded-lg mt-2"></div>
    </div>

  );
}

function ActionsButton() {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <div className="relative"> {/* Wrapper to keep button in place */}
      <div
        className={`absolute top-0 left-0 flex flex-col rounded-2xl shadow-md bg-blue-50 transition-all duration-200 ${
          showOptions ? "py-0.5" : "py-0"
        }`}
      >
        {/* Button */}
        <button
          className="text-black px-4 py-1 rounded-full flex items-center gap-10 font-poppins font-medium hover:bg-blue-100"
          onClick={() => setShowOptions((prev) => !prev)}
        >
          Actions
          <ChevronDown
            className="h-4 w-4 transition-transform duration-200"
            style={{ transform: showOptions ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>

        {/* Options appear inside the blue background */}
        {showOptions && (
          <div className="flex flex-col w-full">
            <ActionsOptionsComponent />
          </div>
        )}
      </div>
    </div>
  );
}


function ActionsOptionsComponent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSubIndex, setHoveredSubIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full">
      <hr className="border-grey-600" />
      {ActionsOptions.map((action: ActionItem, index: number) => (
        <div key={index} className="relative" 
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
            > {/* Ensure positioning is relative to each button */}
          <button
            className={`flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-100 w-full text-left ${
              index === ActionsOptions.length - 1 ? "mb-2" : ""
            } ${hoveredIndex === index ? "bg-blue-100" : ""}`}
          >
            {action.icon}
            <span className="text-sm font-medium">{action.title}</span>
            {action.items && <ChevronRight size={15} className="text-gray-500 ml-auto" />}
          </button>

          {/* Submenu positioned correctly relative to each hovered item */}
          {action.items && hoveredIndex === index && (
            <div className={`absolute top-0 left-full -mt-2 bg-blue-50 shadow-md rounded-md z-50 py-2`}>
              {action.items.map((subItem: any, subIndex: number) => (
                <div key={subIndex} className="relative" 
                onMouseEnter={() => setHoveredSubIndex(subIndex)}
                onMouseLeave={() => setHoveredSubIndex(null)}
                  >
                <button
                  key={subIndex}
                  className={`flex items-center px-5 py-2 text-gray-700 hover:bg-blue-100 w-full text-left whitespace-nowrap
                    ${hoveredSubIndex === subIndex ? "bg-blue-100" : ""}`}
                >
                  {subItem.icon && <span className="mr-2">{subItem.icon}</span>}
                  <span className="text-sm font-medium">{subItem.title}</span>
                  {subItem.items && <ChevronRight size={15} className="text-gray-500 ml-2" />}
                </button>
                {/* SubSubmenu positioned correctly relative to each hovered item */}
                {subItem.items && hoveredSubIndex === subIndex && (
                <div className="absolute top-0 left-full -mt-2 bg-blue-50 shadow-md rounded-md z-50 py-2">
                  {subItem.items.map((subSubItem: string, subSubIndex: number) => (
                    <button
                      key={subSubIndex}
                      className="flex items-center px-3 py-2 text-gray-700 hover:bg-blue-100 w-full text-left whitespace-nowrap"
                    >
                      <span className="text-sm font-medium">{subSubItem}</span>
                    </button>
                  ))}
                </div>
              )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


function CreateButton(){
  return (
    <div className="relative">
      <button className="absolute top-0 left-36 bg-blue-50 text-black px-4 py-1 rounded-full shadow-md flex items-center gap-10 font-poppins font-medium hover:bg-blue-100">
          Create
          <Plus className="h-4 w-4"/>
      </button>
    </div>
  )
}