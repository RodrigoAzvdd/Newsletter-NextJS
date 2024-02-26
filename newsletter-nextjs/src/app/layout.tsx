import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'INSIGHTS',
  description: 'Criado por Rodrigo Azevedo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-black min-h-screen flex flex-col">
          <Navbar />
          {children}
          <footer className='flex gap-1 text-xs py-10 text-white md:text-md lg:text-base items-center justify-center'>
            Feito por <a target='_blank' href='https://github.com/RodrigoAzvdd' className='hover:text-sky-500 duration-200 transition-all cursor-pointer'>Rodrigo Azevedo</a>
          </footer>
        </div>
      </body>
    </html>
  )
}
