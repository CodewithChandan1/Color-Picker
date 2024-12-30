import { Copy } from "lucide-react";

interface ColorDisplayProps {
  label: string;
  value: string | null;
  onCopy: (value: string, format: string) => void;
}

export default function ColorDisplay({
  label,
  value,
  onCopy,
}: ColorDisplayProps) {
  if (!value) return null;

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
      <span className="font-medium">{label}</span>
      <div className="flex items-center gap-2">
        <span>{value}</span>
        <button
          onClick={() => onCopy(value, label.toLowerCase())}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
