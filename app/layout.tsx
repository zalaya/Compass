import type { PropsWithChildren } from 'react'
import { Geist } from 'next/font/google'
import Toaster from '@/components/ui/Toaster'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={geist.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
