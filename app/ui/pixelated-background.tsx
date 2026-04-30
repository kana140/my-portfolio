"use client";
import { useEffect, useRef } from "react";

type Props = { src: string; pixelSize?: number; onLoad?: () => void };

export default function PixelatedBackground({ src, pixelSize = 8, onLoad }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = (img: HTMLImageElement) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!w || !h) return;
      canvas.width = w;
      canvas.height = h;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const offscreen = document.createElement("canvas");
      offscreen.width = Math.max(1, Math.floor(w / pixelSize));
      offscreen.height = Math.max(1, Math.floor(h / pixelSize));
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, offscreen.width, offscreen.height);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(offscreen, 0, 0, w, h);
    };

    const img = new window.Image();
    imgRef.current = img;
    img.onload = () => {
      draw(img);
      onLoad?.();
    };
    img.src = src;

    const observer = new ResizeObserver(() => {
      if (imgRef.current?.complete) draw(imgRef.current);
    });
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [src, pixelSize, onLoad]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
