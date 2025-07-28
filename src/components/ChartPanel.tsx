import { useRef } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ChartPanelProps {
  darkMode: boolean;
}

const data = [
  { name: 'Jan', value: 200 },
  { name: 'Feb', value: 450 },
  { name: 'Mar', value: 300 },
  { name: 'Apr', value: 500 },
  { name: 'May', value: 700 },
];

export default function ChartPanel({ darkMode }: ChartPanelProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  const exportToCSV = () => {
    const csv = ['Month,Revenue'];
    data.forEach(row => csv.push(`${row.name},${row.value}`));
    const csvContent = csv.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'revenue_data.csv';
    link.click();
  };

  const exportToPDF = async () => {
    if (!chartRef.current) return;
    const canvas = await html2canvas(chartRef.current);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 10, pdfWidth, pdfHeight);
    pdf.save('revenue_chart.pdf');
  };

  return (
    <div
      ref={chartRef}
      className={`rounded-2xl shadow p-4 w-full ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Revenue Over Time</h2>
        <div className="space-x-2">
          <button
            onClick={exportToCSV}
            className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
          >
            Export CSV
          </button>
          <button
            onClick={exportToPDF}
            className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
          >
            Export PDF
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.9)' : 'rgba(243, 244, 246, 0.9)',
              border: 'none',
              color: darkMode ? '#fff' : '#000',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
