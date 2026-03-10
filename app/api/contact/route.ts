import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, company, service, message } = body;

    const data = await resend.emails.send({
      from: "Studio Contact <onboarding@resend.dev>",
      to: ["builtbystudio@gmail.com"],
      subject: `New Website Inquiry from ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>

        <p><strong>Project Details:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, data });

  } catch (error) {
    return Response.json({ success: false, error });
  }
}