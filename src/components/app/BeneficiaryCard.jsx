import { Building2 } from "lucide-react";

export default function BeneficiaryCard({ data, selected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(data.id)}
      className={`w-full cursor-pointer border rounded-xl p-4 flex items-center justify-between 
      ${selected ? "border-(--primary) bg-(--primary)/5" : "border-(--border) bg-(--bg-surface)"}`}
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg bg-(--bg-primary)">
          <Building2 className="text-(--primary)" size={22} />
        </div>

        <div>
          <h3 className="font-semibold text-base">{data.name}</h3>
          <p className="text-sm text-(--text-secondary)">
            {data.bank} • {data.account} • {data.country}
          </p>
        </div>
      </div>

      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
        ${selected ? "border-(--primary)" : "border-(--border)"}`}
      >
        {selected && (
          <div className="w-2.5 h-2.5 rounded-full bg-(--primary)"></div>
        )}
      </div>
    </div>
  );
}
