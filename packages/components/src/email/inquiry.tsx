import * as React from 'react';
import { Section, Text } from '@react-email/components';
import { Email as LayoutEmail, text } from './layout';

export const Inquiry = (props: {
  userName: string;
  userMessage: string;
  userPhone?: string;
}) => {
  return (
    <LayoutEmail
      props={{ preview: props.userMessage }}
      options={{ withHeader: true, withFooter: false }}
    >
      <Section style={{ marginTop: '2rem' }}>
        <Text style={text}>
          {props.userMessage || 'Sample text'} <br />
          <br />
          Regards, <br />
          {props.userName || 'John Doe'}
          {props.userPhone && (
            <>
              <br />
              {props.userPhone}
            </>
          )}
        </Text>
      </Section>
    </LayoutEmail>
  );
};

export default Inquiry;
