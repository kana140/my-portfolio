"use client";
import Window from "./ui/window";
import useWindowManager from "./hooks/useWindowManager";
import DesktopIcons from "./ui/desktop-icons";
import Taskbar from "./ui/taskbar";

export default function Home() {
  const { windows, open, close, focus, move, minimize } = useWindowManager();

  return (
    <div className="p-2 h-screen bg-desktop shadow-md overflow-hidden">
      <div className="m-auto h-full w-full bg-[url(/pictures/background.png)] flex flex-col justify-between p-2">
        <div className="flex flex-row">
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
          <div className="m-auto border-2 border-black bg-pink-50 w-70 p-5 text-center">
            <div className="m-auto">
              <p>Hi, I'm Keitel (Key-tell), but you can call me Key!</p>
              <br />
              <p>
                Feel free to look around, this is very much a work in progress
                but I hope you can see how much fun I've been having making this
                so far.
              </p>
              <br />
              <p>
                I'm still trying to find ways to make this better, so please
                feel free to let me know if you have any suggestions on how I
                could improve!
              </p>
            </div>
          </div>
          <div
            className={`ml-auto border-2 border-black bg-yellow-100 text-center flex flex-col`}
          >
            {/* ooooh make this a tickable thinggg */}
            <div className="p-2">
              <p className="">To do: </p>
              <ul>
                <input type="checkbox" /> Check out Profile{" "}
              </ul>
              <ul>
                <input type="checkbox" /> Check out Experience{" "}
              </ul>
              <ul>
                <input type="checkbox" /> Check out projects{" "}
              </ul>
              <ul>
                <input type="checkbox" /> Visit LinkedIn{" "}
              </ul>
              <ul>
                <input type="checkbox" /> Send me a message{" "}
              </ul>
              <ul>
                {" "}
                {/* <input type="checkbox" /> Leave a message in guest book! */}
              </ul>
            </div>
          </div>
        </div>
        <Taskbar open={open} windows={windows} />
      </div>
    </div>
  );
}
