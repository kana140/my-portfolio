import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Star,
  EllipsisVertical,
} from "lucide-react";
import { ChromeButton } from "./button";

export default function ChromeBar() {
  return (
    <div className="w-full bg-base-200 flex flex-row items-center justify-evenly border-b border-gray-200">
      <ChromeButton>
        <ArrowLeft size={15} />
      </ChromeButton>
      <ChromeButton>
        <ArrowRight size={15} color={"grey"} />
      </ChromeButton>
      <ChromeButton>
        <RotateCw size={14} strokeWidth={2.5} />
      </ChromeButton>
      <div className="flex flex-row gap-2 w-[60%] rounded-full bg-gray-200 text-black justify-between items-center m-1.5 p-2">
        <input
          type="text"
          className="w-full outline-none"
          defaultValue="https://www.facebook.com/keitel.anana/"
          // onSubmit={submitSearch}
        ></input>
        <ChromeButton>
          <Star size={14} strokeWidth={1} className="fill" onClick={() => {}} />
        </ChromeButton>
      </div>
      <ChromeButton>
        <EllipsisVertical size={16} fill="#000000" />
      </ChromeButton>
    </div>
  );
}
