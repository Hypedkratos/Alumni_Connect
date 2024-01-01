import { Inter } from 'next/font/google'
import '../globals.css'
import {Footer, Navbar } from '@/components'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alumni-Connect',
  description: 'Designed for students to connect Alumni.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
