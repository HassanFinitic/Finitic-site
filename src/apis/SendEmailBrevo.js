"use server";

import { brevoEmailContent } from "@/data/brevoEmailContent";

export async function SendEmailBrevo({ email, name }) {
  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
           name: "Finitic Marketing",
          email: "marketing@finitic.com",
        },
        to: [
          {
            email,
            name,
          },
        ],
        // subject: "Thank you for Your subscription in finitic",
        subject: "Covverr Image",
        htmlContent: brevoEmailContent,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Brevo API error: ${errorText}`);
    }

    const data = await res.json();
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
