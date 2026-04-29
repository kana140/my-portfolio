type StickyProps = {
  color: "yellow" | "pink";
  children: React.ReactNode;
  className?: string;
};

const themes = {
  yellow: { header: "#E8C84A", body: "#FEFF9C" },
  pink:   { header: "#D4849A", body: "#FFD1DC" },
};

export default function Sticky({ color, children, className }: StickyProps) {
  const { header, body } = themes[color];
  return (
    <div
      className={`flex flex-col shadow-xl text-sm ${className ?? ""}`}
      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
    >
      <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-t-md" style={{ backgroundColor: header }}>
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="px-3 py-3 flex-1 rounded-b-md" style={{ backgroundColor: body }}>
        {children}
      </div>
    </div>
  );
}
