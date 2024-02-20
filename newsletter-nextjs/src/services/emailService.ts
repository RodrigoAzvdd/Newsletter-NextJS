import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'emailboasvindasdorod@gmail.com',
        pass: 'lock kkwl rdfj qrxq'
    }
})

async function sendMail(email: string) {
    const info = await transporter.sendMail({
        from: ' Olá!! <emailboasvindasdorod@gmail.com>',
        to: email,
        subject: "Bem vindo!!",
        text: "Bem vindo, meu amigo :)",
        html: "<h1>Bem vindo, meu amigo :)</h1>",
    });

    console.log("Message sent: %s", info.messageId);
}

export default sendMail