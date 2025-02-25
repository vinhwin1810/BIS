"use client";

import { Search } from "lucide-react";
import { useState } from "react";
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

  const filteredItems = itemList.filter((item) =>
    item.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative min-w-[320px] max-w-[600px] w-full flex items-center">
      <Command
        className={cn(
          "rounded-lg border",
          inputValue && "rounded-b-none border-b-0"
        )}
      >
        <CommandInput
          placeholder="Search..."
          value={inputValue}
          onValueChange={setInputValue}
        />
        {inputValue && (
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
