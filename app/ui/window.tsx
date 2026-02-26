import { WindowProps } from "../lib/definitions";

export default function Window({
  title,
  defaultSize,
  onClose,
  children,
  closeOnBackdropClick = true,
}: WindowProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0"
        onClick={closeOnBackdropClick ? onClose : undefined}
      />

      <div
        className={`relative rounded-sm bg-window shadow-lg border-2 border-black/50 overflow-hidden z-1 w-[90vw] md:w-${defaultSize.w}`}
        style={{ height: defaultSize.h }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="h-7 flex items-center justify-between px-3 bg-border select-none text-white">
          <div className="font-medium text-sm">{title}</div>
          <button
            onClick={onClose}
            className="px-2 hover:bg-white/10 cursor-pointer"
            aria-label="Close window"
            type="button"
          >
            ×
          </button>
        </div>

        <div className="h-[calc(100%-2.5rem)] p-4 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
