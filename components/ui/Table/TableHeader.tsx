import { ComponentPropsWithoutRef } from 'react'

export const TableHeader = ({ className, ... props }: ComponentPropsWithoutRef<'thead'>) => (
  <thead
    data-slot='table-header'
    className={className}
    {...props}
  />
)
