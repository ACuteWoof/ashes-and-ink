"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { caligraphy } from "../fonts";
import { useEffect, useState } from "react";
import { sendWebhook } from "../actions";
import Link from "next/link";

export default function Contact() {
  const [message, setMessage] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Send Message");

  useEffect(() => {
    if (message.length > 0) {
      setButtonText("Send Message");
    }
  }, [message]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className={"text-2xl " + caligraphy.className}>{"Contact Us"}</h2>
      <div className="prose prose-stone">
        You can send us a message through the textbox below either for
        requesting books to be made or support in general. We are also on the
        following social media platforms:
        <ul>
          <Link href="https://discord.gg/ngp9hJPjt9"><li>Discord</li> </Link>
          <Link href="https://instagram.com/ashesandink.classics"><li>Instagram</li> </Link>
        </ul>
      </div>
      <h3 className={"text-2xl " + caligraphy.className}>{"Send Anonymous Message"}</h3>
      <Textarea
        className="border border-stone-400 grow"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={2000}
        placeholder="Include a way to contact you again in your message so that we may reach out to you again. All messages are completely anonymous."
      />
      <div>
        <Button
          onClick={async () => {
            setMessage("");
            setButtonText("Sending...");
            await sendWebhook(message);
            setButtonText("Message Sent.");
          }}
          disabled={message.length === 0 || buttonText !== "Send Message"}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
