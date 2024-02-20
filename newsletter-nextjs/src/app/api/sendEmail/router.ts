import { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend'

const resend = new Resend('re_ZByteQuz_FNUk8JnCwUL1fsr7RQ8NG364');

type RequestBody = {
    email: string,
    name: string
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {

        const { name, email }: RequestBody = req.body
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Hello world',
            react: EmailTemplate({ firstName: name }),
            text: 'Test'
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
