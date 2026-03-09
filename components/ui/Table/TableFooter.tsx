import { ComponentPropsWithoutRef } from 'react'

export const TableFooter = ({ className, ... props }: ComponentPropsWithoutRef<'tfoot'>) => (
  <tfoot
    data-slot='table-footer'
    className={className}
    {...props}
  />
)
