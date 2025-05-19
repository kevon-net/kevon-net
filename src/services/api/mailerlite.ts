'use server';

import { API_URL } from '@/data/constants';
import { sendOnboardNewsletter } from './email/send';
import { segmentFullName } from '@/utilities/formatters/string';

export type SubscriberAdd = {
  name: string;
  email: string;
};

export const subscriberAdd = async (
  params: SubscriberAdd,
  options?: { notify?: boolean }
) => {
  try {
    const now = new Date();

    const response = await fetch(`${API_URL.MAILERLITE}/subscribers`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_MAILERLITE_KEY_PORTFOLIO}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: params.email,
        groups: [process.env.NEXT_MAILERLITE_GROUP_GENERAL],
        status: 'active',
        subscribed_at: now.toISOString().replace('T', ' ').slice(0, 19),
        opted_in_at: now.toISOString().replace('T', ' ').slice(0, 19),
        fields: {
          name: segmentFullName(params.name).first,
          last_name: segmentFullName(params.name).last,
        },
      }),
    });

    if (response.status >= 400) {
      throw new Error('API Service Error');
    }

    if (options?.notify && response.status == 201) {
      // send welcome email if new user
      await sendOnboardNewsletter({ email: params.email });
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('---> service error (add subscriber):', error);
    throw error;
  }
};
