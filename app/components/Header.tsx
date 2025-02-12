// components/Header.tsx
import { Search, Star, User, Building2, MapPinHouse } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  userName?: string;
}

export default function Header({ userName = "Last, First" }: HeaderProps) {
  return (
    <header className="bg-white text-[#333333] shadow-sm">
      <div className="p-4">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="relative inline-block">
              <Building2
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <select className="flex space-x-2 p-2 pl-9 border-[#A4A4A4] border rounded-xl min-w-[200px] appearance-normal">
                <option>Company</option>
              </select>
            </div>
            <div className="relative inline-block">
              <MapPinHouse
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <select className="flex space-x-2 p-2 pl-9 border-[#A4A4A4] border rounded-xl min-w-[200px] appearance-normal">
                <option>Location</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">{userName}</span>
            <Image
              className="text-gray-500"
              src="/bis-logo.png"
              alt="BIS Computer Solutions"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-10 py-2 border border-[#A4A4A4] rounded-2xl w-1/2"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5" />
          <button className="absolute ml-4 bg-[#58E2D3] rounded-full shadow-md p-3 ">
            <Star className="h-5 w-5" />
          </button>
        </div>

        {/* <div className="flex items-center gap-4">

          <div className="flex flex-col text-right text-sm">
            <button className="hover:text-blue-600">Change Password</button>
            <button className="hover:text-blue-600">Log Out</button>
            <button className="hover:text-blue-600">Help</button>
          </div>
        </div> */}
      </div>
    </header>
  );
}
