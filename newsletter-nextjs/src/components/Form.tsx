import axios from "axios"
import { useRef } from "react"

const Form = () => {
    const input = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        try {
            if (input.current) {
                axios.post('https://newsletter-next-js.vercel.app/api/subscribers', { email: input.current.value })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form action="" className="flex justify-center items-center gap-2">
            <input
                ref={input}
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
    )
}

export default Form
