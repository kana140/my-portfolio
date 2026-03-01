"use client";
import { WindowProps } from "../lib/definitions";
import { useRef } from "react";
import { isMobile } from "react-device-detect";
import ChromeBar from "./chrome";

export default function Window({
  title,
  defaultSize,
  x,
  y,
  z,
  onFocus,
  onClose,
  onMinimize,
  onMove,
  children,
  link,
}: WindowProps) {
  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });

  const submitSearch = (search: string) => {
    if (search != "https://www.facebook.com/keitel.anana/") {
      return false;
    }
  };

  const onMouseDownTitle = (e: { clientX: any; clientY: any }) => {
    onFocus?.();
    dragRef.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      originX: Number(x),
      originY: Number(y),
    };

    const onMoveDoc = (ev: { clientX: number; clientY: number }) => {
      if (!dragRef.current.dragging) return;
      const dx = ev.clientX - dragRef.current.startX;
      const dy = ev.clientY - dragRef.current.startY;
      onMove?.(dragRef.current.originX + dx, dragRef.current.originY + dy);
    };

    const onUpDoc = () => {
      dragRef.current.dragging = false;
      document.removeEventListener("mousemove", onMoveDoc);
      document.removeEventListener("mouseup", onUpDoc);
    };

    document.addEventListener("mousemove", onMoveDoc);
    document.addEventListener("mouseup", onUpDoc);
  };

  return (
    <div
      className={`absolute flex flex-col rounded-xl bg-window shadow-lg border-2 border-black/50 dark:bg-neutral-800 dark:text-white dark:shadow-lg dark:border dark:border-white/10 `}
      style={{
        left: isMobile ? 0 : x,
        top: isMobile ? "10%" : y,
        width: isMobile ? "auto" : defaultSize.w,
        height: isMobile ? "auto" : defaultSize.h,
        zIndex: z,
      }}
      onMouseDown={onFocus}
    >
      <div
        className="h-10 flex items-center justify-between px-3 bg-border  dark:bg-neutral-900 cursor-move select-none"
        onMouseDown={onMouseDownTitle}
      >
        <div className="font-medium text-sm">{title}</div>
        <div className="flex gap-2">
          <button
            onClick={(e) => (e.stopPropagation(), onMinimize?.())}
            className="cursor-pointer rounded-full bg-yellow-500 text-transparent font-bold size-3 flex items-center justify-center hover:text-shadow-neutral-800"
          >
            —
          </button>
          <button
            onClick={(e) => (e.stopPropagation(), onClose?.())}
            className="cursor-pointer rounded-full bg-red-500 text-transparent font-bold size-3 flex items-center justify-center hover:text-shadow-neutral-800"
          >
            ×
          </button>
        </div>
      </div>
      {link ? <ChromeBar /> : ""}
      <div className={`flex-1 ${link ? " " : "p-4"} overflow-auto`}>
        {children}
      </div>
    </div>
  );
}
