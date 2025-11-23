import Link from "next/link";
import NavLinks from "./nav-links";

export default function Nav() {
  return (
    <div className="w-screen h-48 flex flex-col justify-center items-center">
      <div className="flex flex-col text-center">
        <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
          <Link href="/">
            <strong>Kei Anana </strong>
          </Link>
        </h1>
        <p className="mt-3 text-pretty text-xl text-muted-foreground md:text-2xl">
          Developer & Designer
        </p>
      </div>
      <div className="flex">
        <NavLinks />
      </div>
    </div>
  );
}
