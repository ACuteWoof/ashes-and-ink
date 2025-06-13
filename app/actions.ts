"use server";

const webhookUrl = process.env.WEBHOOK_URL;

export async function sendWebhook(text: string) {
  if (!webhookUrl) {
    throw new Error("WEBHOOK_URL environment variable is not set");
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: text,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send webhook: ${response.statusText}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending webhook:", error);
    throw error;
  }
}
