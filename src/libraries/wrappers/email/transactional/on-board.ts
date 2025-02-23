import appData, { emails } from '@/data/app';
import resend from '@/libraries/resend';

import EmailOnboardWelcome from '@/components/email/onboard/welcome';
import { isProduction } from '@/utilities/helpers/environment';
import { EmailInquiry } from '@/types/email';
import { render } from '@react-email/render';

export const sendEmailTransactionalOnboard = async (params: {
  to: EmailInquiry['to'];
  userName: string;
}) => {
  const { data, error } = await resend.emails.send({
    from: `${appData.name.app} <${
      isProduction() ? emails.noreply! : process.env.NEXT_RESEND_EMAIL!
    }>`,
    to: [isProduction() ? params.to : emails.info!],
    subject: `Welcome To ${appData.name.app}`,
    html: await render(EmailOnboardWelcome({ userName: params.userName })),
    replyTo: emails.noreply!,
  });
  if (!error) {
    return data;
  } else {
    console.error('---> wrapper error - (send email (onboard)):', error);
    throw error;
  }
};
