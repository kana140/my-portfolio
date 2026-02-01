"use server";
import { z } from "zod";

const ContactSchema = z.object({
  // fromName: z.string().min(1).max(100),
  name: z.string().email(),
  email: z.string().min(1).max(100),
  title: z.string().min(1).max(100),
  message: z.string().min(1).max(5000),
});

export type State = { ok: true } | { ok: false; error: string };

export async function sendEmail(
  state: State,
  formData: FormData,
): Promise<State> {
  const parsed = ContactSchema.safeParse({
    // fromName: formData.get("fromName"),
    name: formData.get("fromEmail"),
    email: formData.get("fromEmail"),
    title: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return { ok: false, error: "Invalid form data" };
  }

  const service_id = process.env.EMAILJS_SERVICE_ID;
  const template_id = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!service_id || !template_id || !publicKey || !privateKey) {
    return { ok: false, error: "Check server configurations" };
  }

  console.log(parsed.data);

  const payload = {
    service_id,
    template_id,
    user_id: publicKey,
    accessToken: privateKey,
    template_params: parsed.data,
  };
  try {
    const r = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      return { ok: false, error: `Email failed to send: ${r.status}` };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("unknown error occured");
    }
  }

  return { ok: true };
}
