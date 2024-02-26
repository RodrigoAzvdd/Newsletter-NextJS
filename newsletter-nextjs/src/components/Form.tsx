'use client'

import axios from "axios"
import { useRef, useState } from "react"
import SuccessToast from "./SuccessToast"

const Form = () => {
    const emailInput = useRef<HTMLInputElement | null>(null)
    const nameInput = useRef<HTMLInputElement | null>(null)
    const [toastIsOpen, setToastIsOpen] = useState(false)

    const handleClick = () => {
        try {
            if (emailInput.current && nameInput.current) {
                axios.post('https://test-db-prod.vercel.app/api/users', { name: nameInput.current.value, email: emailInput.current.value })
                axios.post('https://newsletter-next-js.vercel.app/api/sendEmail')
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
            <form className="flex justify-center items-center gap-2 md:flex-col lg:flex-row">
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
                    md:w-full
                    lg:w-auto
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
