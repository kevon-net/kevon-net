'use server';

import appData from '@/data/app';
import { API_URL } from '@/data/constants';
import { isProduction } from '@/utilities/helpers/environment';
import EmailOnboardNewsletter from '@/components/email/onboard/newsletter';
import { render } from '@react-email/render';
import EmailInquiry from '@/components/email/inquiry';

export type SendEmail = {
  from: { name: string; email: string };
  subject: string;
};

export const sendEmail = async (params: {
  from: { name: string; email: string };
  subject: string;
  message: string;
}) => {
  try {
    const response = await fetch(`${API_URL.RESEND}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_RESEND_KEY_GENERAL}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${params.from.name} <${process.env.NEXT_PUBLIC_EMAIL_DELIVERY}>`,
        to: [process.env.NEXT_PUBLIC_EMAIL_CONTACT],
        subject: params.subject,
        html: await render(
          EmailInquiry({
            name: params.from.name,
            message: params.message,
          })
        ),
        replyTo: `${params.from.name} <${params.from.email}>`,
      }),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> service error (send email):', error);
    throw error;
  }
};

export const sendOnboardNewsletter = async (params: { email: string }) => {
  const contactEmail = process.env.NEXT_PUBLIC_EMAIL_CONTACT || '';
  const noReplyEmail = process.env.NEXT_PUBLIC_EMAIL_NOREPLY || '';

  try {
    const response = await fetch(`${API_URL.RESEND}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_RESEND_KEY_GENERAL}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${appData.name.app} <${noReplyEmail}>`,
        to: [isProduction() ? params.email : contactEmail],
        subject: `Welcome To Kevon's Newsletter`,
        html: await render(EmailOnboardNewsletter()),
      }),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> service error (send email):', error);
    throw error;
  }
};
