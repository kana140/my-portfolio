import {
  GraduationCap,
  NotebookPen,
  BugOff,
  FileCode,
  CircleCheck,
} from "lucide-react";

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
      <li>
        <hr className="bg-text" />
        <div className="timeline-middle">
          <FileCode />
        </div>
        <div className="timeline-end md:mb-10">
          <time className="font-mono italic">September, 2024</time>
          <div className="text-lg font-black">
            Software Developer - StayinFront
          </div>
          Moved to Feature Patch Team. Deliver features in a fast paced
          environment
        </div>
        <hr className="bg-text" />
      </li>
      <li>
        <hr className="bg-text" />
        <div className="timeline-middle">
          <BugOff />
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">January, 2023</time>
          <div className="text-lg font-black">
            Product Technical Support Developer
          </div>
          Started career maintaining a Data Warehouse product where I learned
          strong technical skills in debugging and problem-solving high-priority
          production issues
        </div>
        <hr className="bg-text" />
      </li>
      <li>
        <hr className="bg-text" />
        <div className="timeline-middle">
          <GraduationCap />
        </div>
        <div className="timeline-end md:mb-10">
          <time className="font-mono italic">March, 2023</time>
          <div className="text-lg font-black">
            Graduated with a Bachelors of Science degree, Majoring in Computer
            Science
          </div>
        </div>
        <hr className="bg-text" />
      </li>
      <li>
        <hr className="bg-text" />
        <div className="timeline-middle">
          <NotebookPen />
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">March, 2022</time>
          <div className="text-lg font-black">Teaching Assistant</div>
          Assisted students in lab sessions
        </div>
      </li>
    </ul>
  );
}
