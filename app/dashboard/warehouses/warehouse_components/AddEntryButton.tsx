"use client";

import { Plus } from "lucide-react";

interface AddEntryButtonProps {
  setIsModalOpen: (value: boolean) => void;
}

export default function AddEntryButton({ setIsModalOpen }: AddEntryButtonProps) {
  return (
    <button
      onClick={() => setIsModalOpen(true)}
      className="flex items-center px-6 py-3 bg-[#D2E2FF] text-black rounded-2xl hover:bg-[#B5CBF4]"
    >
      <Plus className="w-5 h-5 mr-2" />
      Add Location
    </button>
  );
}