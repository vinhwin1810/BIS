"use client";

import { Search, Star } from "lucide-react";
import { useState } from "react";


export default function SearchBar() {

  const [isStarFilled, setIsStarFilled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className = "flex flex-col">
      <div className="flex items-start w-1/2">
        {/* Input Container with Search Icon */}
        <div className="flex flex-col flex-grow border border-[#A4A4A4] rounded-2xl px-4 py-2">
          <div className="flex items-center">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow px-2 py-1 outline-none"
          />
          </div>
          <SearchSuggestions searched = {searchQuery} />
        </div>

        {/* Button Outside Input */}
        <button className="ml-3 bg-[#58E2D3] rounded-full shadow-md p-3" onClick={() => setIsStarFilled(!isStarFilled)}>
          <StarButton isFilled = {isStarFilled}/>
        </button>
      </div>
    </div>
  );
}

function SearchSuggestions({ searched }) {
  if (searched){
    return (
      <div className="flex flex-col">
        <hr className="border-t border-gray-400 w-full my-2" />
        <OneSuggestion searchResult = {searched}/>
        <OneSuggestion searchResult = {searched}/>
      </div>
    );
  }
}

function OneSuggestion({searchResult}){
  return(
    <button className="bg-white hover:bg-gray-200 py-2 transition-colors duration-300 text-left w-full">
          {/* Flex container for icon + text */}
          <div className="flex items-center">
            <Search className="h-5 w-5 text-gray-500 mr-2" />
            <span>{searchResult}</span>
          </div>
    </button>
  )
}


function StarButton({ isFilled }){
  if (isFilled){
    return (
      <Star className="h-5 w-5"
      />
    );
  }
  else{
    return (
      <Star
        className="h-5 w-5"
        fill="black"
      />
    );
  }
}
