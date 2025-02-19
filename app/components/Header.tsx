import { Building2, MapPinHouse } from "lucide-react";
import User from "./User";
import SearchBar from "./Search";

interface HeaderProps {
  userName?: string;
}

export default function Header({ userName = "Last, First" }: HeaderProps) {
  return (
    <header className="bg-white text-[#333333] shadow-sm">
      <div className="p-4">
        <div className="flex items-center justify-between gap-4 mb-20">
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
          <User userName={userName} />
        </div>
        <div className="relative">
          <SearchBar />
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
