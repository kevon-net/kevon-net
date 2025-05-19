import * as React from 'react';
import { Hr, Section, Text } from '@react-email/components';
import { dimmedText, Email as LayoutEmail, text } from './layout';

export const Inquiry = (props: { name: string; message: string }) => {
  return (
    <LayoutEmail
      props={{ preview: props.message }}
      options={{ withHeader: true, withFooter: false }}
    >
      <Section style={{ marginTop: '2rem' }}>
        <Text style={text}>
          {props.message || 'Sample Text'} <br />
        </Text>
      </Section>

      <Section style={{ marginTop: '2rem' }}>
        <Hr />
      </Section>

      <Section style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Text style={{ ...dimmedText, textAlign: 'center', fontSize: 11 }}>
          Sent from your portfolio website.
        </Text>
      </Section>
    </LayoutEmail>
  );
};

export default Inquiry;
