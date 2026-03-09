import type { PropsWithChildren } from 'react'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={geist.className}>
        {children}
      </body>
    </html>
  )
}
