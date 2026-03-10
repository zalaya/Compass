import { ComponentPropsWithoutRef } from 'react'

export default function TableBody({ className, ... props }: ComponentPropsWithoutRef<'tbody'>) {
  return (
    <tbody
      data-slot='table-body'
      className={className}
      {...props}
    />
  )
}

