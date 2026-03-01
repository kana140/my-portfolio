import me from "../../public/pictures/mee.jpeg";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  BookHeart,
  Search,
  Bell,
  LayoutGrid,
  MessageCircleHeart,
} from "lucide-react";
import { cv } from "../lib/cv-json";
import { Badge } from "./badge";
import { SocialLinks } from "../lib/definitions";
import Image from "next/image";
import fakebook from "../../public/pictures/fakebook.png";

const socialLinks: SocialLinks[] = [
  { icon: Github, link: "https://github.com/kana140", title: "GitHub" },
  {
    icon: Linkedin,
    link: "https://linkedin.com/in/keitelanana",
    title: "LinkedIn",
  },
  { icon: Mail, contact: "keitelwinslet@gmail.com", title: "Email" },
];

export default function Profile() {
  return (
    <div className="bg-base-100">
      <div className="flex flex-row items-center gap-2 w-full p-2 shadow-sm">
        <div className="size-8 cursor-pointer">
          <Image
            src={fakebook.src}
            width={100}
            height={100}
            alt="Logo of FakeBook"
          />
        </div>
        <div className="bg-gray-200 p-2 rounded-full h-full inline-flex items-center gap-1 text-gray-400">
          <Search size={16} className="" />
          <input
            type="text"
            className="outline-none text-sm"
            placeholder={"Search Fakebook"}
          ></input>
        </div>
        <div className="ml-auto flex flex-row gap-2">
          <div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
            <LayoutGrid size={20} color="#000000" fill={"#000000"} />
          </div>
          <div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
            <MessageCircleHeart size={20} color="#000000" fill={"#000000"} />
          </div>
          <div className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
            <Bell size={20} color="#000000" fill={"#000000"} />
          </div>
        </div>
      </div>
      <div className="dark:bg-darkmode dark:text-dark-text p-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row">
            <div className="avatar">
              <div className="w-32 rounded-full mb-2">
                <Image
                  src={me.src}
                  alt="image of me"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex flex-col m-2">
              <h2 className="text-xl font-bold inline-flex gap-2 items-center">
                Keitel Anana <p className="text-sm font-thin">(Key-tell) </p>
              </h2>
              <p>0 friends</p>
              <p className="inline-flex items-center text-sm gap-1">
                <MapPin size={12} />
                Melbourne
              </p>
            </div>
          </div>
          <hr className="text-gray-300"></hr>
          <div className="tabs tabs-lift bg-base-200 dark:bg-dark-card">
            <label className="tab flex flex-row gap-2">
              <input type="radio" name="my_tabs_4" defaultChecked />
              <BookHeart size={14} color="#000000" strokeWidth={0.75} />
              Personal Details
            </label>
            <div className="tab-content p-4">
              <div className="flex flex-col">
                {socialLinks.map((social, key) => (
                  <div
                    key={key}
                    className="flex flex-row text-xs gap-2 items-center"
                  >
                    {social.link ? (
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <social.icon className="size-[1.5em]" />
                      </a>
                    ) : (
                      <social.icon className="size-[1.5em]" />
                    )}
                    <p className="font-light">
                      {social.title ?? social.contact}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-2 text-sm leading-relaxed">
                I'm a Software Developer with three years of experience. I
                mostly work with C#/.NET and JavaScript, but I love to play
                around with different technology for side projects (like this
                website, for example!)
              </p>
            </div>
            <label className="tab">
              <input type="radio" name="my_tabs_4" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              My Skills
            </label>
            <div className="tab-content p-4">
              {cv.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="m-1">
                  {skill}
                </Badge>
              ))}
            </div>

            <label className="tab">
              <input type="radio" name="my_tabs_4" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>
              Hobbies
            </label>
            <div className="tab-content p-4">
              {cv.hobbies.map((skill, index) => (
                <Badge key={index} variant="secondary" className="m-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
