import NavLinks from "./nav-links";
import logo from "../../public/pictures/logo.png";

export default function Nav() {
  return (
    // <div className="flex justify-center border-b border-thistle bg-dark-lavender">
    //   <NavLinks />
    // </div>
    <div className="navbar sticky top-0 rounded-4xl w-[90vw] m-auto mb-2 mt-2 bg-primary shadow-md z-1">
      <div className="flex-1">
        <a href="/" className="">
          <img src={logo.src} className="size-16 rounded-full" />
        </a>
      </div>
      <NavLinks />
    </div>
  );
}
