"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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
      <Textarea
        className="border border-stone-400 grow"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={2000}
        placeholder="Include a way to contact you again in your message so that we may reach out to you again. All messages are completely anonymous."
      />
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
  );
}
