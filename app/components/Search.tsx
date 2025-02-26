"use client";

import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { itemList } from "./constants/constant";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const filteredItems = itemList.filter((item) =>
    item.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Hide results
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={searchBarRef} className="relative min-w-[320px] max-w-[600px] w-full flex items-center">
      <Command
        className={cn(
          "rounded-lg border",
          isOpen && "rounded-b-none border-b-0"
        )}
      >
        <CommandInput
          placeholder="Search..."
          value={inputValue}
          onValueChange={(value) => {
            setInputValue(value);
            setIsOpen(true); // Show results when typing
          }}
        />
        {isOpen && (
          <div className="absolute left-0 right-0 top-full z-50">
            <CommandList className="rounded-b-lg border border-t-0 bg-popover shadow-md">
              <CommandEmpty>
                {`Sorry, we couldn't find any matches for "${inputValue}".`}
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
    </div>
  );
}
