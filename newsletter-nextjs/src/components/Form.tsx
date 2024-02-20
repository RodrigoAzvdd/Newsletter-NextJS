'use client'

import axios from "axios"
import { useRef, useState } from "react"
import SuccessToast from "./SuccessToast"

const nodemailer = require('nodemailer')

const Form = () => {
    const emailInput = useRef<HTMLInputElement | null>(null)
    const nameInput = useRef<HTMLInputElement | null>(null)
    const [toastIsOpen, setToastIsOpen] = useState(false)

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


    const handleClick = () => {
        try {
            if (emailInput.current && nameInput.current) {
                axios.post('https://test-db-prod.vercel.app/api/users', { name: nameInput.current.value, email: emailInput.current.value })
                sendMail(emailInput.current.value)
                setToastIsOpen(true)
                setTimeout(() => {
                    setToastIsOpen(false)
                }, 3000);
            } else {
                alert('Erro ao enviar informações.')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form className="flex justify-center items-center gap-2">

                <input
                    ref={nameInput}
                    type="text"
                    placeholder="Nome"
                    className={`
                    font-semibold
                    bg-sky-950 
                    h-12
                    w-80
                    px-4 
                    rounded-sm
                    text-white
                    outline-none
                    border
                    border-sky-900
                    focus:border-sky-400
                `}
                    required
                />

                <input
                    ref={emailInput}
                    type="email"
                    placeholder="Seu e-mail principal"
                    className={`
                    font-semibold
                    bg-sky-950 
                    h-12
                    w-80
                    px-4 
                    rounded-sm
                    text-white
                    outline-none
                    border
                    border-sky-900
                    focus:border-sky-400
                `}
                    required
                />

                <button
                    className={`
                    bg-sky-600 
                    h-12
                    px-5 
                    rounded-sm
                    text-white
                    hover:bg-sky-800
                    transition
                    duration-150    
                `}
                    onClick={e => {
                        e.preventDefault()
                        handleClick()
                    }}
                >Se inscrever</button>
            </form>
            <SuccessToast toastIsOpen={toastIsOpen} />
        </>
    )
}

export default Form
