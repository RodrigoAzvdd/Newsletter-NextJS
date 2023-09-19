'use client'

type SuccessToastProps = {
    toastIsOpen: boolean
}

const SuccessToast = ({ toastIsOpen }: SuccessToastProps) => {
    return (
        toastIsOpen ? (
            <div className="text-white font-semibold fixed bottom-10 right-24 bg-green-500 px-10 py-4 rounded-md text-lg">
                <span>Email Cadastrado.</span>
            </div>
        ) : null
    )
}

export default SuccessToast