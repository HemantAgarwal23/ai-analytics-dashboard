interface KPIProps {
  title: string;
  value: string;
}

export default function KPIWidget({ title, value }: KPIProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-black dark:text-white w-full">
      <h2 className="text-sm text-gray-600 dark:text-gray-300">{title}</h2>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </div>
  );
}
