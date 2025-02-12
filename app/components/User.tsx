interface UserProps {
  userName?: string;
}

import Image from "next/image";

export default function User({ userName = "Last, First" }: UserProps) {
  return (
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
  );
}
