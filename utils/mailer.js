import { createTransport } from 'nodemailer';
import { mailInfo } from '../config.js';

export const send = async ({
  from,
  to,
  subject,
  text,
  html,
  attachments,
  auth,
}) => {
  const trans = createTransport(auth ? { ...mailInfo, auth } : mailInfo);
  //   console.log('**********>>', attachments);
  try {
    const result = await trans.sendMail({
      from,
      to,
      subject,
      text,
      html,
      attachments,
    });
    console.log(result);
  } catch (error) {
    throw error;
  }
};
