import { ComponentProps } from 'react'
import { Toaster as SonnerToaster } from 'sonner'

export default function Toaster(props: ComponentProps<typeof SonnerToaster>) {
  return (
    <SonnerToaster
      richColors
      toastOptions={{
        className: 'rounded-md border border-neutral-200 bg-white text-neutral-900 shadow-md',
      }}
      {...props}
    />
  )
}
