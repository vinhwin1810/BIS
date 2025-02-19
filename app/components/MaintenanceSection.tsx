interface MaintenanceSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function MaintenanceSection({
  title,
  children,
}: MaintenanceSectionProps) {
  return (    
    <div className="relative">
      {/* Blue background */}
      <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#1B3487] rounded-3xl"></div>

      {/* Main container */}
      <div className="relative bg-white rounded-3xl shadow-md p-6 border">
        <h2 className="text-gray-500 mb-3">{title}</h2>
          <div className="grid grid-cols-3 gap-6">{children}</div>
          
      {/* </div> */}
      </div>
    </div>

  );
} 
