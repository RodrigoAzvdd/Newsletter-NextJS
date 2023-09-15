const Form = () => {
    return (
        <form action="" className="flex justify-center items-center gap-2">
            <input
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
            >Se inscrever</button>
        </form>
    )
}

export default Form