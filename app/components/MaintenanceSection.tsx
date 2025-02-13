interface MaintenanceSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function MaintenanceSection({
  title,
  children,
}: MaintenanceSectionProps) {
  return (
    <div className="bg-white rounded-sm shadow-md p-6 mb-10">
      <h2 className="text-gray-500 mb-4">{title}</h2>
      <div className="grid grid-cols-3 gap-6">{children}</div>
    </div>
  );
}
