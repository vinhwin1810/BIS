import { List, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the menu if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest("#hamburger-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button onClick={toggleMenu} className="p-2 rounded-md bg-white hover:bg-gray-100 active:bg-gray-200">
        <List color="grey" />
      </button>

      {/* Full-screen white rectangle */}
      {isOpen && (
        <div className ="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 h-64 p-6 rounded-lg shadow-lg"
          >
            {/* Close button inside the menu */}
            <button onClick={toggleMenu} className="absolute top-4 right-4 p-2">
              <X className="h-6 w-6 text-gray-700" />
            </button>

            <h2 className="text-xl font-semibold">Menu Content Here</h2>
            <p className="text-gray-600 mt-2">Add your items inside this white box.</p>
          </div>
        </div>
      )}
    </div>
  );
}