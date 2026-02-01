"use client";
import { useState } from "react";
import Modal from "./ui/modal";
import useSound from "use-sound";
import Window from "./ui/window";
import HoverableSprite from "./ui/hoverable-sprite";
import { apps, taskBarApps } from "./lib/content";
import { App } from "./lib/definitions";
import { pixelify } from "./ui/fonts";

export default function Home() {
  const initialApp: App | undefined = apps.find(
    (app) => app.title === "FakeBook",
  );
  const [openedApp, setOpenedApp] = useState<App | undefined>(initialApp);
  const [playClick] = useSound("/sounds/mouse-click.mp3");
  const [playHover] = useSound("/sounds/hover.mp3");

  function openApp(app: App) {
    setOpenedApp(app);
  }

  function closeApp() {
    setOpenedApp(undefined);
  }

  return (
    <div className="m-auto w-[100vh] bg-desktop shadow-md p-5 flex flex-row">
      <div className="w-full h-[80vh] m-auto bg-[url(/pictures/background.png)] flex flex-col justify-between p-5">
        <div className="grid grid-cols-[1fr_auto_1fr]">
          <div className="grid grid-cols-1 gap-5">
            {apps.map((app, index) => (
              <div key={index} className="">
                <div
                  className={`size-20 hover:scale-105 cursor-pointer shadow-s`}
                  onClick={() => {
                    playClick();
                    console.log("clicked app:", app.title, app);
                    setOpenedApp(app);
                  }}
                  onMouseEnter={() => {
                    playHover();
                  }}
                >
                  {app.externalLink ? (
                    <a href={app.externalLink} target="_blank">
                      <img src={app.image}></img>
                    </a>
                  ) : (
                    <img src={app.image}></img>
                  )}
                </div>
                <p className="text-sm">{app.title}</p>
              </div>
            ))}
          </div>
          <div id="modal">
            {openedApp && openedApp.component && (
              <Window
                title={openedApp.title}
                defaultSize={openedApp.defaultSize}
                onClose={closeApp}
              >
                <openedApp.component />
              </Window>
            )}
          </div>
          <div
            className={`${pixelify.className} m-auto size-32 bg-[url(/pictures/sticky-note.png)] text-center flex`}
          >
            <p className="m-auto">To do: improve ui</p>
          </div>
        </div>
        <div className="">
          <div className="rounded-full bg-blue-100/80 backdrop-hue-rotate-45 w-[60%] h-12 m-auto flex flex-row gap-5 justify-evenly items-end">
            {taskBarApps.map((app, index) => (
              <div
                key={index}
                className="size-16 flex items-end justify-center relative cursor-pointer hover:scale-105"
                onClick={() => {
                  playClick();
                  setOpenedApp(app);
                }}
                onMouseEnter={() => {
                  playHover();
                }}
              >
                {app?.animate ? (
                  <HoverableSprite image={app.image} />
                ) : app.externalLink ? (
                  <a href={app.externalLink} target="_blank">
                    <img src={app.image}></img>
                  </a>
                ) : (
                  <img src={app.image}></img>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
