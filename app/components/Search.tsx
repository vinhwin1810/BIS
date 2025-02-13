import { Search, Star } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center w-1/2">
      {/* Input Container with Search Icon */}
      <div className="flex items-center flex-grow border border-[#A4A4A4] rounded-3xl px-5 py-2">
        <Search className="h-6 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-4 py-1 outline-none bg-transparent"
        />
      </div>

      {/* Button Outside Input */}
      <button className="ml-3 bg-[#FFD942] rounded-full shadow-md p-3.5">
        <Star className="h-5 w-5" />
      </button>
    </div>
  );
}
