import { ComponentPropsWithoutRef } from 'react'

export default function TableColumn({ className, ... props }: ComponentPropsWithoutRef<'th'>) {
  return (
    <th
      data-slot='table-column'
      className={className}
      {...props}
    />
  )
}
