import { App, OpenWindow } from "../lib/definitions";
import { TASKBARAPPS } from "../lib/content";
import HoverableSprite from "../ui/hoverable-sprite";
import useSound from "use-sound";
import Image from "next/image";

type TaskBarProps = {
  open: (id: string, app: App) => void;
  windows: OpenWindow[];
};

export default function Taskbar({ open, windows }: TaskBarProps) {
  const [playHover] = useSound("/sounds/hover.mp3");
  const [playClick] = useSound("/sounds/mouse-click.mp3");

  return (
    <div className="w-full flex justify-center">
      <div className="inline-flex p-2 rounded-2xl bg-blue-100/80 backdrop-hue-rotate-45 items-center flex-row justify-around gap-2">
        {(Object.keys(TASKBARAPPS) as Array<keyof typeof TASKBARAPPS>).map(
          (a, index) => {
            const app: App = TASKBARAPPS[a];
            return (
              <div
                key={index}
                className="size-14 flex items-end justify-center relative cursor-pointer hover:scale-105"
                onClick={() => {
                  playClick();
                  open(a, app);
                }}
                onMouseEnter={() => {
                  playHover();
                }}
              >
                {app?.animate ? (
                  <HoverableSprite image={app.image} />
                ) : app.externalLink ? (
                  <a
                    href={app.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={app.image} alt="image of app" fill={true} />
                  </a>
                ) : (
                  <Image src={app.image} alt="image of app" fill={true} />
                )}
              </div>
            );
          },
        )}
        <div className="divider lg:divider-horizontal"></div>
        {windows.map((window, index) => {
          const app = window.app;
          return (
            <div
              key={index}
              className="size-14 flex items-end justify-center relative cursor-pointer hover:scale-105"
              onClick={() => {
                playClick();
                open(window.appId, app);
              }}
              onMouseEnter={() => {
                playHover();
              }}
            >
              {app?.animate ? (
                <HoverableSprite image={app.image} />
              ) : app.externalLink ? (
                <a
                  href={app.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={app.image} alt="image of app" fill={true} />
                </a>
              ) : (
                <Image src={app.image} alt="image of app" fill={true} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
