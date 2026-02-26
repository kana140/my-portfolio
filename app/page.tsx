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
  const [openedApp, setOpenedApp] = useState<App | undefined>();
  const [playClick] = useSound("/sounds/mouse-click.mp3");
  const [playHover] = useSound("/sounds/hover.mp3");

  function openApp(app: App) {
    setOpenedApp(app);
  }

  function closeApp() {
    setOpenedApp(undefined);
  }

  return (
    <div className="p-2 h-screen bg-desktop shadow-md">
      <div className="m-auto h-full w-full bg-[url(/pictures/background.png)] flex flex-col justify-between p-2">
        <div className="flex flex-row">
          <div className="grid grid-cols-1 gap-5">
            {apps.map((app, index) => (
              <div key={index} className="inline-flex flex-col items-center">
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
            className={`${pixelify.className} ml-auto border-2 border-black bg-yellow-100 text-center flex flex-col`}
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
        <div className="">
          <div className="w-58 p-2 rounded-2xl bg-blue-100/80 backdrop-hue-rotate-45 m-auto flex flex-row justify-around">
            {taskBarApps.map((app, index) => (
              <div
                key={index}
                className="size-14 flex items-end justify-center relative cursor-pointer hover:scale-105"
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
