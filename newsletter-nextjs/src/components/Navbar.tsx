'use client'

import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex flex-col gap-4 sm:flex-row h-16 justify-between items-center pb-24 pt-14 px-14 lg:px-52">
            <Link href={'/'} className="text-white font-bold text-2xl">INSIGHTS</Link>
            <div className="flex gap-5">
                <Link href={'/'} className="text-white text-base hover:text-gray-500 transition">início</Link>
                <Link href={'/about'} className="text-white text-base hover:text-gray-500 transition">sobre</Link>
                <Link href={'/subscribers'} className="text-white text-base hover:text-gray-500 transition">assinantes</Link>
            </div>
        </nav>
    )
}

export default Navbar

