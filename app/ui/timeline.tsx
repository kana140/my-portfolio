import {
  GraduationCap,
  NotebookPen,
  BugOff,
  FileCode,
  CircleCheck,
} from "lucide-react";
import { EXPERIENCE_TIMELINE } from "../lib/content";

export default function Timeline() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <CircleCheck />
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">Current</time>
        </div>
        <hr className="bg-text" />
      </li>
      {EXPERIENCE_TIMELINE.map((experience, index) => (
        <li key={index}>
          <hr className="bg-text" />
          <div className="timeline-middle">
            <experience.icon />
          </div>
          <div
            className={`${index % 2 === 0 ? "timeline-start mb-10 md:text-end" : "timeline-end md:mb-10"}`}
          >
            <time className="font-mono italic">{experience.timeframe}</time>
            <p>
              <i>{experience.company}</i>
            </p>
            <div className="text-lg font-black">{experience.role}</div>
            {experience.description}
          </div>
          {index != EXPERIENCE_TIMELINE.length - 1 ? (
            <hr className="bg-text" />
          ) : (
            <></>
          )}
        </li>
      ))}
    </ul>
  );
}
