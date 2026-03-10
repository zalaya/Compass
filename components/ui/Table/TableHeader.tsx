import { ComponentPropsWithoutRef } from 'react'

export default function TableHeader({ className, ... props }: ComponentPropsWithoutRef<'thead'>) {
  return (
    <thead
      data-slot='table-header'
      className={className}
      {...props}
    />
  )
}
