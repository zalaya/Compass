import { ComponentPropsWithoutRef } from 'react'

export default function TableFooter({ className, ... props }: ComponentPropsWithoutRef<'tfoot'>) {
  return (
    <tfoot
      data-slot='table-footer'
      className={className}
      {...props}
    />
  )
}
