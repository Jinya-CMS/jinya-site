import * as nodemailer from 'nodemailer';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      const email = data.get('email');
      const name = data.get('name');
      const concern = data.get('concern');
      const message = data.get('message');

      const transport = nodemailer.createTransport({
        host: process.env.MAIL_SERVER,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      });
      const mail = {
        from: 'noreply@jinya.de',
        to: 'developers@jinya.de',
        subject: concern,
        text: `From: ${name}
      Email: ${email}
      Message:
      ${message}`
      };
      await transport.sendMail(mail);

      return { success: true };
    } catch (e) {
      return { success: false };
    }
  }
};
