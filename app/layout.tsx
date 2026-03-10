import type { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import Toaster from '@/components/ui/Toaster'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
