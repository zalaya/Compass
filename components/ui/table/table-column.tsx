import { ComponentPropsWithoutRef } from 'react'

export const TableColumn = ({ className, ... props }: ComponentPropsWithoutRef<'th'>) => (
  <th
    data-slot='table-column'
    className={className}
    {...props}
  />
)
