'use client';

import { Search, Star } from "lucide-react";
import { useState } from "react";
import { 
  Command, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

// Define types for the item list
interface Item {
  label: string;
  href?: string;
  active?: boolean;
}

// Define the StarButton props
interface StarButtonProps {
  isFilled: boolean;
}

export default function SearchBar(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");
  const [isStarFilled, setIsStarFilled] = useState<boolean>(false);

  const filteredItems = itemList.filter((item) => 
    item.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative min-w-[320px] max-w-[600px] w-full flex items-center">
      <Command className={cn(
        "rounded-lg border",
        inputValue && "rounded-b-none border-b-0"
      )}>
        <CommandInput 
          placeholder="Search..." 
          value={inputValue} 
          onValueChange={setInputValue}
        />
        {inputValue && (
          <div className="absolute left-0 right-0 top-full z-50">
            <CommandList className="rounded-b-lg border border-t-0 bg-popover shadow-md">
              <CommandEmpty>
                Sorry, we couldn't find any matches for "{inputValue}".
              </CommandEmpty>
              <CommandGroup>
                {filteredItems.map((item) => (
                  <CommandItem key={item.label} value={item.label}>
                    <Search className="" />
                    <span>{item.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </div>
        )}
      </Command>
      <button
        className="ml-3 bg-[#58E2D3] rounded-full shadow-md p-3"
        onClick={() => setIsStarFilled(!isStarFilled)}
      >
        <StarButton isFilled={isStarFilled} />
      </button>
    </div>
  );
}

function StarButton({ isFilled }: StarButtonProps): JSX.Element {
  return (
    <Star className="h-5 w-5" fill={isFilled ? "black" : "none"} />
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
