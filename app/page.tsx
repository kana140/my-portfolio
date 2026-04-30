"use client";
import { useState } from "react";
import Window from "./ui/window";
import useWindowManager from "./hooks/useWindowManager";
import DesktopIcons from "./ui/desktop-icons";
import Taskbar from "./ui/taskbar";
import Sticky from "./ui/sticky";
import PixelatedBackground from "./ui/pixelated-background";
import LoadingScreen from "./ui/loading-screen";

export default function Home() {
  const { windows, open, close, focus, move, minimize } = useWindowManager();
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <div className="p-2 h-screen bg-black shadow-md overflow-hidden">
      <div className="relative m-auto h-full w-full rounded-t-2xl overflow-hidden flex flex-col justify-between p-1">
        <LoadingScreen isLoaded={bgLoaded} />
        <PixelatedBackground src="/pictures/background.png" pixelSize={2} onLoad={() => setBgLoaded(true)} />
        <div className="flex flex-row relative z-10">
          <DesktopIcons open={open} />
          {windows
            .filter((w) => !w.minimized)
            .sort((a, b) => a.z - b.z)
            .map((w) => {
              const title = w.app.title;
              const AppComponent = w.app.component;
              if (!AppComponent) return null;
              return (
                <Window
                  key={w.id}
                  title={title}
                  defaultSize={w.app.defaultSize}
                  link={w.app?.link}
                  x={w.x}
                  y={w.y}
                  z={w.z}
                  onFocus={() => focus(w.id)}
                  onClose={() => close(w.id)}
                  onMinimize={() => minimize(w.id)}
                  onMove={(x: number, y: number) => move(w.id, x, y)}
                >
                  <AppComponent />
                </Window>
              );
            })}
          <Sticky color="pink" className="m-auto w-64">
            <div className="space-y-2">
              <p>Hi, I'm Keitel (Key-tell), but you can call me Key!</p>
              <p>
                Feel free to look around, this is very much a work in progress
                but I hope you can see how much fun I've been having making this
                so far.
              </p>
              <p>
                I'm still trying to find ways to make this better, so please
                feel free to let me know if you have any suggestions on how I
                could improve!
              </p>
            </div>
          </Sticky>
          <Sticky color="yellow" className="ml-auto w-48">
            <p className="font-semibold mb-2">To do:</p>
            <ul className="space-y-1">
              {[
                "Check out Profile",
                "Check out Experience",
                "Check out Projects",
                "Visit LinkedIn",
                "Send me a message",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#E8C84A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Sticky>
        </div>
        <div className="relative z-10">
          <Taskbar open={open} windows={windows} />
        </div>
      </div>
    </div>
  );
}
