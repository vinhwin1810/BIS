import Header from "@/app/components/Header"; // Update this path

export default function Dashboard() {
  const maintenanceItems = [
    {
      title: "Maintenance",
      items: ["Physical Inventory", "Transaction Processing", "Reports"],
    },
    {
      title: "Item Maintenance",
      items: [
        "Reason Codes",
        "Transaction Types",
        "Warehouses",
        "Item Images",
        "Department Code Maintenance",
        "Inventory Price/Vendor Cost Loading",
        "Classes",
        "UOM Maintenance",
        "Cross References",
        "Unit References",
        "Unit Conversion Factors",
        "Item Images Query",
        "Pricing Level Maintenance",
      ],
    },
  ];

  return (
    <div className="">
      <Header userName="Macho, Michael" />
      {/* {maintenanceItems.map((section) => (
        <div key={section.title} className="space-y-4">
          <div className="bg-gray-200 p-3 rounded-t-md">
            <h2 className="font-medium">{section.title}</h2>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow">
            {section.items.map((item) => (
              <button
                key={item}
                className="block w-full text-left p-2 hover:bg-gray-50"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
}
