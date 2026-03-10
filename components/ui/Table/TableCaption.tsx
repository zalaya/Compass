import { ComponentPropsWithoutRef } from 'react'

export default function TableCaption({ className, ... props }: ComponentPropsWithoutRef<'caption'>) {
  return (
    <caption
      data-slot='table-caption'
      className={className}
      {...props}
    />
  )
}
