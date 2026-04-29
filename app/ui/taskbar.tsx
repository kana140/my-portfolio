import { App, OpenWindow } from "../lib/definitions";
import { TASKBARAPPS } from "../lib/content";
import HoverableSprite from "../ui/hoverable-sprite";
import useSound from "use-sound";
import Image from "next/image";

type TaskBarProps = {
  open: (id: string, app: App) => void;
  windows: OpenWindow[];
};

function DockIcon({
  app,
  isOpen,
  onClick,
  onMouseEnter,
}: {
  app: App;
  isOpen: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-1 group" onClick={onClick} onMouseEnter={onMouseEnter}>
      <div className="relative size-12 cursor-pointer transition-all duration-150 ease-out group-hover:scale-125 group-hover:-translate-y-2">
        {app?.animate ? (
          <div className="absolute inset-0 flex items-end justify-center">
            <div style={{ transform: "scale(0.375)", transformOrigin: "bottom center" }}>
              <HoverableSprite image={app.image} scale={1} />
            </div>
          </div>
        ) : app.externalLink ? (
          <a href={app.externalLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
            <Image src={app.image} alt={app.title} fill={true} className="object-contain" />
          </a>
        ) : (
          <Image src={app.image} alt={app.title} fill={true} className="object-contain" />
        )}
      </div>
      <div className={`w-1 h-1 rounded-full bg-white/80 transition-opacity duration-150 ${isOpen ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
}

export default function Taskbar({ open, windows }: TaskBarProps) {
  const [playHover] = useSound("/sounds/hover.mp3");
  const [playClick] = useSound("/sounds/mouse-click.mp3");

  const openAppIds = new Set(windows.map((w) => w.appId));

  const pinnedApps = (Object.keys(TASKBARAPPS) as Array<keyof typeof TASKBARAPPS>).map((a) => ({
    id: a,
    app: TASKBARAPPS[a] as App,
  }));

  const unpinnedWindows = windows.filter(
    (w) => !pinnedApps.some((p) => p.id === w.appId)
  );

  return (
    <div className="w-full flex justify-center pb-1">
      <div className="inline-flex items-end px-3 py-2 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl gap-1">
        {pinnedApps.map(({ id, app }) => (
          <DockIcon
            key={id}
            app={app}
            isOpen={openAppIds.has(id)}
            onClick={() => { playClick(); open(id, app); }}
            onMouseEnter={() => playHover()}
          />
        ))}

        {unpinnedWindows.length > 0 && (
          <>
            <div className="w-px self-stretch bg-white/30 mx-1 rounded-full" />
            {unpinnedWindows.map((w) => (
              <DockIcon
                key={w.id}
                app={w.app}
                isOpen={true}
                onClick={() => { playClick(); open(w.appId, w.app); }}
                onMouseEnter={() => playHover()}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
