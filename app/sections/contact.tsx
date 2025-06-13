"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { caligraphy } from "../fonts";
import { useEffect, useState } from "react";
import { sendWebhook } from "../actions";

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
      <Textarea
        className="border border-stone-400 grow"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={2000}
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
