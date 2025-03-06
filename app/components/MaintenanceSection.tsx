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
      <h2 className="text-gray-500 mb-1 ml-1">{title}</h2>
      <div className="relative">
        <div className="absolute inset-0 bg-[#1B3487] rounded-lg translate-x-2 translate-y-2"></div>
        <div className="relative bg-white rounded-lg shadow-sm p-6 z-10">{children}</div>
      </div>
    </div>
  );
} 
