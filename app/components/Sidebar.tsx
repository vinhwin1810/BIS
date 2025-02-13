// components/Sidebar.tsx
import { useState } from "react";

const menuData = [
  {
    title: "Inventory Management",
    submenus: [
      {
        title: "Maintenance",
        items: ["Physical Inventory", "Transaction Processing", "Reports"],
        nextMenu: {
          title: "Item Maintenance",
          items: [
            "Reason Codes", "Transaction Types", "Warehouses", "Item Images",
            "Department Code Maintenance", "Inventory Price/Vendor Cost Loading",
            "Classes", "UOM Maintenance", "Cross References", "Unit References",
            "Unit Conversion Factors", "Item Images Query", "Pricing Level Maintenance"
      
          ]
        }
      }
    ]
  }
];

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [highlightedItem, setHighlightedItem] = useState(null);

  return (
    <div className="flex">
      {/* Dark Blue Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        {menuData.map((menu, i) => (
          <button
            key={i}
            className={`w-full text-left p-2 rounded-lg ${activeMenu === i ? 'bg-orange-500 text-white' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveMenu(activeMenu === i ? null : i)}
          >
            {menu.title}
          </button>
        ))}
      </aside>

      {/* White Sidebar (First Level - Appears to the Right) */}
      {activeMenu !== null && (
        <aside className="w-64 bg-white text-black p-4 shadow-lg">
          {menuData[activeMenu].submenus.map((submenu, j) => (
            <div key={j}>
              <button
                className={`w-full text-left p-2 rounded-lg ${activeSubmenu === j ? 'bg-orange-500 text-white' : 'hover:bg-gray-200'}`}
                onClick={() => setActiveSubmenu(activeSubmenu === j ? null : j)}
              >
                {submenu.title}
              </button>
              {activeSubmenu === j && (
                <ul>
                  {submenu.items.map((item, k) => (
                    <li key={k} className="p-2 hover:bg-gray-100">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>
      )}

      {/* White Sidebar (Second Level - Appears to the Right of First Sidebar) */}
      {activeMenu !== null && activeSubmenu !== null && menuData[activeMenu].submenus[activeSubmenu].nextMenu && (
        <aside className="w-64 bg-white text-black p-4 shadow-lg">
          <button
            className={`w-full text-left p-2 rounded-lg ${highlightedItem === 'Item Maintenance' ? 'bg-orange-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => setHighlightedItem(highlightedItem === 'Item Maintenance' ? null : 'Item Maintenance')}
          >
            {menuData[activeMenu].submenus[activeSubmenu].nextMenu.title}
          </button>
          {highlightedItem === 'Item Maintenance' && (
            <ul>
              {menuData[activeMenu].submenus[activeSubmenu].nextMenu.items.map((item, l) => (
                <li
                  key={l}
                  className={`p-2 rounded-lg cursor-pointer ${activeItem === l ? 'bg-orange-500 text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveItem(l)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </aside>
      )}
    </div>
  );
}

