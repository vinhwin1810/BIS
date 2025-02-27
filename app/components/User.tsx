interface UserProps {
  userName?: string;
}

import Image from "next/image";

export default function User({ userName = "Last, First" }: UserProps) {
  return (
    <div className="relative" ref={userMenuRef}>
      <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap" onClick={toggleUserMenu}>
        <span className="text-sm hidden sm:inline">{userName}</span>
        <Image
          className="text-gray-500 rounded-full"
          src="/bis-logo.png"
          alt="BIS Computer Solutions"
          width={30}
          height={30}
        />
      </div>

      {showUserMenu && (
        <div className="absolute right-0 top-10 w-48 bg-white shadow-lg rounded-xl p-3 flex flex-col z-50">
          <button className="p-3 rounded-lg hover:bg-gray-100 hover:font-bold text-black transition-all">
            Change Password
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-100 hover:font-bold text-black transition-all">
            Log Out
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-100 hover:font-bold text-black transition-all">Help</button>
        </div>
      )}
    </div>
  );
}
