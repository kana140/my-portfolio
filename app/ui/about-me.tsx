"use client";
import { cv } from "../lib/cv-json";
import Timeline from "../ui/timeline";
import { useState } from "react";
import me from "../../public/pictures/mee.jpeg";
import { Badge } from "./badge";

export default function AboutMe() {
  const [professional, setProfessional] = useState(false);

  return (
    <>
      <div className="w-1/2 my-2 flex gap-2 relative">
        <p>Boring Version</p>
        <input
          type="checkbox"
          className="toggle"
          checked={professional}
          onChange={() => setProfessional(!professional)}
        ></input>
      </div>
      <h1 className="text-center text-4xl my-5 font-bold">About Me</h1>
      <div className="flex flex-row gap-5">
        <div className="flex w-2/6 flex-col gap-5">
          <div className="avatar my-2">
            <div className="w-64 rounded-full m-auto">
              <img src={me.src} />
            </div>
          </div>
          <div className="hero bg-primary rounded-3xl shadow-md">
            <div className="hero-content text-center">
              <div className="max-w-md">
                {/* <h3 className="text-xl font-bold mt-2">Professional Summary</h3> */}
                <h1 className="text-2xl font-bold">
                  {professional ? "Keitel Anana" : "Kei 🔑 "}
                </h1>
                <p className="py-6">
                  {professional ? cv.summary.professional : cv.summary.fun}
                </p>
              </div>
            </div>
          </div>
          <div className="hero bg-primary rounded-3xl shadow-md">
            <div className="hero-content block text-center">
              <h1 className="text-2xl font-bold">Skills</h1>
              {cv.skills.map((skill, index) => (
                <Badge key={skill} variant="secondary" className="m-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <a href="/projects">
            <div className="hero bg-primary rounded-3xl shadow-md">
              <div className="hero-content text-center">
                <h1 className="text-2xl font-bold">Projects</h1>
                <p>Click here to view</p>
              </div>
            </div>
          </a>
          <div className="hero bg-primary rounded-3xl shadow-md">
            <div className="hero-content text-center">
              <h1 className="text-2xl font-bold">Hobbies</h1>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="hero bg-primary w-4/6 rounded-3xl">
          <div className="hero-content text-center block">
            <h1 className="text-2xl font-bold">Experience</h1>
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
}
