import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();
    const website = formData.get('website')?.toString();

    if (website) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'Lecobyte <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL || '',
      replyTo: email,
      subject: `New Lecobyte inquiry from ${name}`,
      text: `
New Lecobyte contact form submission

Name:
${name}

Email:
${email}

Message:
${message}

Submitted:
${new Date().toISOString()}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}