"use client";

import { Search, Star } from "lucide-react";
import { useState } from "react";

// Define types for item list entries
interface Item {
  label: string;
  href?: string;
  active?: boolean;
}

// Define props for components
interface SearchSuggestionsProps {
  searched: string;
}

interface OneSuggestionProps {
  searchResult: string;
  searched: string;
}

interface StarButtonProps {
  isFilled: boolean;
}

export default function SearchBar() {
  const [isStarFilled, setIsStarFilled] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="flex-col">
      <div className="flex items-start w-1/2">
        {/* Input Container with Search Icon */}
        <div className="relative flex flex-col flex-grow border border-[#A4A4A4] rounded-3xl py-2">
          <div className="flex items-center px-4">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-2 py-1 outline-none"
            />
          </div>
          <SearchSuggestions searched={searchQuery} />
        </div>

        {/* Button Outside Input */}
        <button
          className="ml-3 bg-[#58E2D3] rounded-full shadow-md p-3"
          onClick={() => setIsStarFilled(!isStarFilled)}
        >
          <StarButton isFilled={isStarFilled} />
        </button>
      </div>
    </div>
  );
}

function SearchSuggestions({ searched }: SearchSuggestionsProps) {
  let possibleResults: Item[] = [];

  if (searched) {
    possibleResults = itemList.filter((item) =>
      item.label.toLowerCase().includes(searched.toLowerCase())
    );
  }

  if (searched && possibleResults.length > 0) {
    return (
      
      <div className="absolute top-full max-h-[200px] bg-white border border-grey shadow-lg rounded-2xl overflow-y-auto z-10">
        {possibleResults.map((item, index) => (
          <OneSuggestion key={index} searchResult={item.label} searched={searched} />
        ))}
      </div>
    );
  } else if (searched && searched.length < 14 && possibleResults.length <= 0) {
    return (
      <div className="absolute top-full max-h-[200px] bg-white border border-grey shadow-lg rounded-2xl overflow-y-auto z-10">
        <OneSuggestion
          searchResult={"Sorry, we couldn't find any matches for " + searched}
          searched={searched}
        />
      </div>
    );
  } else if (searched && searched.length >= 14 && possibleResults.length <= 0) {
    return (
      <div className="absolute top-full max-h-[200px] bg-white border border-grey shadow-lg rounded-2xl overflow-y-auto z-10">
        <OneSuggestion
          searchResult={"Sorry, we couldn't find any matches for " + searched.slice(0, 14) + "..."}
          searched={searched.slice(0, 14)}
        />
      </div>
    );
  } else {
    return null;
  }
}

function OneSuggestion({ searchResult, searched }: OneSuggestionProps) {
  // Highlight matching text
  const regex = new RegExp(`(${searched})`, "gi");
  const parts = searchResult.split(regex);

  return (
    <button className="bg-white hover:bg-gray-200 py-2 rounded-md transition-colors duration-300 text-left w-full">
      <div className="flex items-start px-4">
        <Search className="h-5 w-5 text-gray-500 mr-2 " />
        <span>
          {parts.map((part, index) =>
            part.toLowerCase() === searched.toLowerCase() ? (
              <span key={index} className="font-bold text-black">
                {part}
              </span>
            ) : (
              part
            )
          )}
        </span>
      </div>
    </button>
  );
}

function StarButton({ isFilled }: StarButtonProps) {
  return isFilled ? (
    <Star className="h-5 w-5" fill="black" />
  ) : (
    <Star className="h-5 w-5" />
  );
}

const itemList: Item[] = [
  { label: "Order Processing", href: "/dashboard" },
  { label: "Inventory Management", href: "/dashboard/item-maintenance", active: true },
  { label: "Purchasing/Receiving", href: "/dashboard" },
  { label: "Accounts Receivable", href: "/dashboard" },
  { label: "Accounts Payable", href: "/dashboard" },
  { label: "Manufacturing", href: "/dashboard" },
  { label: "Sales Analysis", href: "/dashboard" },
  { label: "Customer Service", href: "/dashboard" },
  { label: "Admin Maintenance", href: "/dashboard" },
  { label: "Security", href: "/dashboard" },
  { label: "Maintenance" },
  { label: "Physical Inventory" },
  { label: "Transaction Processing" },
  { label: "Reports" },
  { label: "Item Maintenance" },
  { label: "Reason Codes" },
  { label: "Transaction Types" },
  { label: "Warehouses" },
  { label: "Item Images" },
  { label: "Department Code Maintenance" },
  { label: "Inventory Price/Vendor Cost Loading" },
  { label: "Classes" },
  { label: "UOM Maintenance" },
  { label: "Cross References" },
  { label: "Unit References" },
  { label: "Unit Conversion Factors" },
  { label: "Item Images Query" },
  { label: "Pricing Level Maintenance" },
];