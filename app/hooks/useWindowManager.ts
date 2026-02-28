import { useState, useCallback } from "react";
import { App, OpenWindow } from "../lib/definitions";

export default function useWindowManager() {
  const [windows, setWindows] = useState<OpenWindow[]>([]);
  const [nextZ, setNextZ] = useState(1);
  const open = useCallback(
    (id: string, app: App) => {
      setWindows((prev) => {
        const existing = prev.find((w) => w.appId === id);
        if (existing) {
          return prev.map((w) =>
            w.id === existing.id ? { ...w, minimized: false, z: nextZ + 1 } : w,
          );
        }
        return [
          ...prev,
          {
            id: crypto.randomUUID(),
            appId: id,
            app,
            x: 120 + prev.length * 30,
            y: 80 + prev.length * 30,
            w: app.defaultSize.w,
            h: app.defaultSize.h,
            z: nextZ + 1,
            minimized: false,
          },
        ];
      });
      setNextZ((z) => z + 1);
    },
    [nextZ],
  );

  const close = (id: string) =>
    setWindows((prev) => prev.filter((w) => w.id !== id));

  const focus = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? {
              ...w,
              z: nextZ + 1,
              minimized: false,
            }
          : w,
      ),
    );
    setNextZ((z) => z + 1);
  };

  const move = (id: string, x: number, y: number) =>
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));

  const minimize = (id: string) =>
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)),
    );

  return { windows, open, close, move, minimize, focus };
}
