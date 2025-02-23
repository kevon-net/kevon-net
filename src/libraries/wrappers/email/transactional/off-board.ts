import appData, { emails } from '@/data/app';
import resend from '@/libraries/resend';

import EmailConfirm from '@/components/email/off-board/confirm';
import { isProduction } from '@/utilities/helpers/environment';
import { EmailInquiry } from '@/types/email';
import { render } from '@react-email/render';

export const sendEmailTransactionalOffboardConfirm = async (params: {
  to: EmailInquiry['to'];
  link: string;
  userName: string;
}) => {
  const { data, error } = await resend.emails.send({
    from: `${appData.name.app} <${
      isProduction() ? emails.noreply! : process.env.NEXT_RESEND_EMAIL!
    }>`,
    to: [isProduction() ? params.to : emails.info!],
    subject: `${appData.name.app} Account Deletion`,
    html: await render(
      EmailConfirm({ link: params.link, userName: params.userName })
    ),
    replyTo: emails.noreply!,
  });
  if (!error) {
    return data;
  } else {
    console.error(
      '---> wrapper error - (send email (off board confirm)):',
      error
    );
    throw error;
  }
};
