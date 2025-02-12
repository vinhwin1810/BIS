import User from "@/app/components/User";
import SearchBar from "@/app/components/Search";

export default function ItemMaintenance() {
  return (
    <div className="p-4 text-[rgb(51,51,51)] flex items-center justify-between gap-4 mb-6">
      <SearchBar />
      <User />
    </div>
  );
}
