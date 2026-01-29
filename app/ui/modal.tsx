import { useState, useEffect } from "react";

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="pixel-corners relative w-full max-w-md bg-blue-100 dark:bg-foreground p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-3 top-3 rounded-full px-2 text-sm text-gray-400 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
