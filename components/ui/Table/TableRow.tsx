import { ComponentPropsWithoutRef } from 'react'

export default function TableRow({ className, ... props }: ComponentPropsWithoutRef<'tr'>) {
  return (
    <tr
      data-slot='table-row'
      className={className}
      {...props}
    />
  )
}
