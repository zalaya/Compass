import { ComponentPropsWithoutRef } from 'react'

export const TableCaption = ({ className, ... props }: ComponentPropsWithoutRef<'caption'>) => (
  <caption
    data-slot='table-caption'
    className={className}
    {...props}
  />
)
