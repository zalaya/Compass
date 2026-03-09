import { ComponentPropsWithoutRef } from 'react'

export const TableRow = ({ className, ... props }: ComponentPropsWithoutRef<'tr'>) => (
  <tr
    data-slot='table-row'
    className={className}
    {...props}
  />
)
