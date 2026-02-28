import { env } from '$env/dynamic/private';
import { createTransport } from 'nodemailer';

/** @type {import("./$types").Actions} */
export const actions = {
	default: async ({ request }) => {
		try {
			const data = await request.formData();
			const email = data.get('email');
			const name = data.get('name');
			const concern = data.get('concern');
			const message = data.get('message');

			const transport = createTransport({
				host: env.MAIL_SERVER,
				port: env.MAIL_PORT,
				secure: true,
				auth: {
					user: env.MAIL_USER,
					pass: env.MAIL_PASS
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
			console.error(e);
			return { success: false };
		}
	}
};
