import { APPS } from "../lib/content";
import { App, IconsProp } from "../lib/definitions";
import useSound from "use-sound";
import Image from "next/image";

export default function DesktopIcons({ open }: IconsProp) {
  const [playClick] = useSound("/sounds/mouse-click.mp3");
  const [playHover] = useSound("/sounds/hover.mp3");
  return (
    <div className="grid grid-cols-1 gap-5">
      {(Object.keys(APPS) as Array<keyof typeof APPS>).map((a, index) => {
        const app: App = APPS[a];
        return (
          <div key={index} className="inline-flex flex-col items-center">
            <div
              className={`size-20 hover:scale-105 cursor-pointer shadow-s`}
              onClick={() => {
                playClick();
                open(a, app);
              }}
              onMouseEnter={() => {
                playHover();
              }}
            >
              {app.externalLink ? (
                <a href={app.externalLink} target="_blank">
                  <Image src={app.image} alt="app" width={100} height={100} />
                </a>
              ) : (
                <Image src={app.image} alt="app" width={100} height={100} />
              )}
            </div>
            <p className="text-xs text-white text-center font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{app.title}</p>
          </div>
        );
      })}
    </div>
  );
}
