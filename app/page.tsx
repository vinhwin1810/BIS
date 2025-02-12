import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-800">Home</h1>
      <Image src="/logo.png" alt="logo" width={200} height={200} />
    </div>
  );
}
