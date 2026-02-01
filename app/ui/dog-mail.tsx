import emailjs from "@emailjs/browser";
import { sendEmail } from "../lib/actions";
import { useActionState } from "react";
import { State } from "../lib/actions";

export default function DogMail() {
  const initialState: State = { ok: false, error: "" };
  const [state, formAction] = useActionState(sendEmail, initialState);
  return (
    <div>
      <form action={formAction} className="flex flex-col gap-2">
        <div className="flex flex-row gap-5 items-center">
          <label className="" htmlFor="myEmail">
            To:
          </label>
          <div className="">
            <input
              id="myEmail"
              type="email"
              name="myEmail"
              defaultValue="keitelwinslet@gmail.com"
              readOnly={true}
              className=""
            />
          </div>
        </div>
        <hr className="bg-hr" />
        <div className="flex flex-row gap-5 items-center">
          <label className="" htmlFor="fromEmail">
            From:
          </label>
          <div className="">
            <input
              id="fromEmail"
              type="email"
              name="fromEmail"
              required
              className=""
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-row gap-5 items-center">
          <label className="" htmlFor="subject">
            Subject:
          </label>
          <div className="">
            <input
              id="subject"
              type="text"
              name="subject"
              required
              className=""
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <div className="h-full">
            <textarea
              id="message"
              name="message"
              required
              className="w-full h-full p-2 rounded-sm"
            />
          </div>
        </div>
        <button type="submit" className="size-8 button bg-button"></button>
      </form>
    </div>
  );
}
