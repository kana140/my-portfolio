import Image from "next/image";
import { aboutme } from "./lib/about-me-json";
import AboutMe from "./ui/about-me";
import me from "./../public/pictures/mee.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div
        className="hero bg-secondary h-[60vh] m-auto rounded-3xl shadow-md"
        style={{
          backgroundImage: `url(${me.src})`,
          backgroundPosition: "top",
        }}
      >
        <div className="hero-content rounded-3xl bg-neutral-50/90">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">{aboutme.header}</p>
            <Link
              href="/#about-me"
              className="btn bg-button shadow-md rounded-3xl"
            >
              Learn more about me
            </Link>
          </div>
        </div>
      </div>
      <div className="divider mt-5"></div>
      <section id="about-me my-5">
        <AboutMe />
      </section>
    </div>
  );
}
