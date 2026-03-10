import { ComponentPropsWithoutRef } from 'react'

export default function Table({ className, ... props }: ComponentPropsWithoutRef<'table'>) {
  return (
    <table
      data-slot='table'
      className={className}
      {...props}
    />
  )
}
