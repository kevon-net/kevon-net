import * as React from 'react';
import { Hr, Link, Section, Text } from '@react-email/components';
import appData from '@/data/app';
import { colors, dimmedText, Email as LayoutEmail, text } from '../layout';

export const Newsletter = () => {
  const message = `You have successfully subscribed to the ${appData.name.app} newsletter. You will be recieving occational marketing and news emails.`;

  return (
    <LayoutEmail props={{ preview: message }}>
      <Section>
        <Text style={text}>
          Thank you for subscribing to my newsletter! I&apos;m excited to have
          you join my space. By subscribing, you&apos;ll receive the latest
          updates, exclusive insights, and helpful tips on my work delivered
          straight to your inbox. I promise to keep my content relevant,
          engaging, and tailored to your interests. If you ever have questions,
          feedback, or suggestions for what you&apos;d like to see, feel free to
          contact me at{' '}
          <Link
            href={`mailto:${appData.emails.contact}`}
            style={{
              color: colors.pri,
              textDecorationLine: 'underline',
            }}
          >
            {appData.emails.contact}
          </Link>
          . Welcome aboard—I&apos;m thrilled to keep you in the loop!
        </Text>
      </Section>

      <Section style={{ marginTop: '2rem' }}>
        <Hr />
      </Section>

      <Section style={{ marginTop: '2rem' }}>
        <Text style={{ ...dimmedText, textAlign: 'center' }}>
          I&apos;ll never email you and ask you to disclose any personal
          information.
        </Text>
      </Section>
    </LayoutEmail>
  );
};

export default Newsletter;
