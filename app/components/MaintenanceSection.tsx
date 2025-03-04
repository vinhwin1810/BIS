interface MaintenanceSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function MaintenanceSection({
  title,
  children,
}: MaintenanceSectionProps) {
  return (    
    <div className="relative mb-6">
      {/* Title moved outside the box */}
      <h2 className="text-gray-300">{title}</h2>

      {/* Blue background */}
      <div className="absolute top-10 left-3 -right-3 -bottom-3 bg-[#1B3487] rounded-3xl"></div>

      {/* Main container */}
      <div className="relative bg-white rounded-3xl shadow-md p-6 border">
        <div className="grid grid-cols-3 gap-6">{children}</div>
      </div>
    </div>
    

  );
} 
