import me from "../../public/pictures/mee.jpeg";
import { Github, Linkedin, Mail } from "lucide-react";
import { cv } from "../lib/cv-json";
import { Badge } from "./badge";
import { SocialLinks } from "../lib/definitions";

const socialLinks: SocialLinks[] = [
  { icon: Github, link: "https://github.com/kana140" },
  { icon: Linkedin, link: "https://linkedin.com/in/keitelanana" },
  { icon: Mail, contact: "keitelwinslet@gmail.com" },
];

export default function Profile() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div>
          <div className="avatar avatar-online">
            <div className="ring-primary ring-offset-base-100 w-32 rounded-full ring-2 ring-offset-2">
              <img src={me.src} />
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold">Keitel Anana</h2>
        {socialLinks.map((social, key) => (
          <div key={key} className="flex flex-row text-xs gap-2 items-center">
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
            <p>{social.link ?? social.contact}</p>
          </div>
        ))}

        <p className="mt-2 text-sm">
          Hello! I'm a Software Developer with three years of experience. I
          mostly work with C#/.NET and JavaScript, but I love to play around
          with different technology for side projects (like this website, for
          example!)
        </p>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
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
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {cv.skills.map((skill, index) => (
              <Badge key={skill} variant="secondary" className="m-1">
                {skill}
              </Badge>
            ))}
          </div>

          <label className="tab">
            <input type="radio" name="my_tabs_4" defaultChecked />
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
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {cv.hobbies.map((skill, index) => (
              <Badge key={skill} variant="secondary" className="m-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
