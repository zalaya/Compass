import type { PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Toaster from '@/components/ui/Toaster'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Compass',
    template: '%s | Compass'
  }
}

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
