import { ComponentPropsWithoutRef } from 'react'

export const Table = ({ className, ... props }: ComponentPropsWithoutRef<'table'>) => (
  <table
    data-slot='table'
    className={className}
    {...props}
  />
)
