import { ComponentPropsWithoutRef } from 'react'

export default function TableCell({ className, ... props }: ComponentPropsWithoutRef<'td'>) {
  return (
    <td
      data-slot='table-cell'
      className={className}
      {...props}
    />
  )
}
