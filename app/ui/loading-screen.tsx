"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen({ isLoaded }: { isLoaded: boolean }) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  // Fill to ~80% while waiting
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 80) {
          clearInterval(interval);
          return p;
        }
        return p + 1.5;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // When loaded, fill to 100% then fade out
  useEffect(() => {
    if (!isLoaded) return;
    setProgress(100);
    const t1 = setTimeout(() => setFading(true), 400);
    const t2 = setTimeout(() => setGone(true), 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isLoaded]);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-100 transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left floppy ear */}
        <ellipse
          cx="22"
          cy="50"
          rx="14"
          ry="22"
          transform="rotate(-12 22 50)"
          fill="white"
        />
        {/* Right floppy ear */}
        <ellipse
          cx="78"
          cy="50"
          rx="14"
          ry="22"
          transform="rotate(12 78 50)"
          fill="white"
        />
        {/* Head */}
        <circle cx="50" cy="46" r="28" fill="white" />
        {/* Left eye */}
        <circle cx="41" cy="41" r="3.5" fill="black" />
        {/* Right eye */}
        <circle cx="59" cy="41" r="3.5" fill="black" />
        {/* Nose */}
        <ellipse cx="50" cy="52" rx="5" ry="3.5" fill="black" />
        {/* Mouth */}
        <path
          d="M 45 57 Q 50 62 55 57"
          stroke="black"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-white">Loading Key's MacBook</p>
      <div className="mt-5 w-48 h-[3px] bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
