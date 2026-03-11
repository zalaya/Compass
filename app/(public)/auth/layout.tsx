import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='flex min-h-screen items-center justify-center bg-neutral-50'>
      <div className='w-full max-w-sm rounded-lg bg-white p-6 shadow-md'>
        {children}
      </div>
    </div>
  )
}
