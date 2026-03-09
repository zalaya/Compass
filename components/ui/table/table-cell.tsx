import { ComponentPropsWithoutRef } from 'react'

export const TableCell = ({ className, ... props }: ComponentPropsWithoutRef<'td'>) => (
  <td
    data-slot='table-cell'
    className={className}
    {...props}
  />
)
