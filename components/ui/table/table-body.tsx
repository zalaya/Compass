import { ComponentPropsWithoutRef } from 'react'

export const TableBody = ({ className, ... props }: ComponentPropsWithoutRef<'tbody'>) => (
  <tbody
    data-slot='table-body'
    className={className}
    {...props}
  />
)
