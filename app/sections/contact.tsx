"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { caligraphy } from "../fonts";
import { useState } from "react";
import { sendWebhook } from "../actions";

export default function Contact() {
  const [message, setMessage] = useState<string>("");

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
            await sendWebhook(message);
            setMessage("");
          }}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
}
