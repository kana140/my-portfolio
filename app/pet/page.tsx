"use client";
import { useState } from "react";
import Modal from "../ui/modal";
import useSound from "use-sound";
// import clickSfx from "../../public/sounds/";
import Profile from "../ui/profile";
import Projects from "../ui/projects";
import Timeline from "../ui/timeline";
import { App } from "../lib/definitions";
import Window from "../ui/window";
import HoverableSprite from "../ui/hoverable-sprite";
import MyExperiences from "../ui/my-experience";
import DogMail from "../ui/dog-mail";

export default function Page() {
  const [openedApp, setOpenedApp] = useState<App | null>(null);
  const [playClick] = useSound("/sounds/mouse-click.mp3");
  const [playHover] = useSound("/sounds/hover.mp3");
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  function openApp(app: App) {
    setOpenedApp(app);
  }

  function closeApp() {
    setOpenedApp(null);
  }

  const apps: App[] = [
    {
      title: "FakeBook",
      component: Profile,
      defaultSize: { w: 500, h: 500 },
      image: "/pictures/fakebook.png",
    },
    {
      title: "Experience",
      component: MyExperiences,
      defaultSize: { w: 500, h: 500 },
      image: "/pictures/cv.png",
    },
    {
      title: "Projects",
      component: Projects,
      defaultSize: { w: 800, h: 700 },
      image: "/pictures/projects.png",
    },
  ];

  const taskBarApps: App[] = [
    {
      title: "GitHub",
      component: Profile,
      defaultSize: { w: 500, h: 500 },
      image: "/pictures/github-external.png",
      externalLink: "https://github.com/kana140",
    },
    {
      title: "LinkedIn",
      component: Profile,
      defaultSize: { w: 500, h: 500 },
      image: "/pictures/linkedin.png",
      externalLink: "https://www.linkedin.com/in/keitelanana/",
    },
    {
      title: "DogMail",
      component: DogMail,
      defaultSize: { w: 500, h: 500 },
      image: "/pictures/dog-mail.png",
      animate: true,
    },
  ];

  // const activeApp = openedApp
  //   ? apps.find((item) => item.title === openedApp.title)
  //   : null;

  return (
    <div className="m-auto w-[100vh] bg-desktop shadow-md p-5 flex flex-row">
      <div className="w-full h-[80vh] m-auto bg-[url(/pictures/background.png)] flex flex-col justify-between p-5">
        {/* <div className="grid grid-cols-3 p-5"> */}
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
          {/* <div className="pixel-corners bg-blue-100 size-52 ml-auto"></div> */}
          <div aria-hidden="true" />
        </div>
        <div className="">
          <div className="rounded-full bg-blue-100/80 backdrop-hue-rotate-45 w-[60%] h-12 m-auto flex flex-row gap-5 justify-evenly items-end">
            {taskBarApps.map((app, index) => (
              <div
                key={index}
                className="hover:scale-105 size-16 cursor-pointer"
                onClick={() => {
                  playClick();
                  console.log("clicked app:", app.title, app);
                  setOpenedApp(app);
                }}
                // onMouseEnter={() => {
                //   playHover();
                // }}
                onMouseEnter={() => {
                  playHover();
                  setHoveredIndex(1);
                }}
                onMouseLeave={() => setHoveredIndex(0)}
              >
                {app?.animate ? (
                  <HoverableSprite image={app.image} frameNo={hoveredIndex} />
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
        {/* <div className="bg-white pixel-corners w-[90%] h-[90%] m-auto"></div> */}
        {/* <h1>MY PET</h1>
      <br></br>
      <p> Coming soon...</p> */}
      </div>
    </div>
  );
}
