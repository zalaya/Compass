import { ComponentPropsWithoutRef } from 'react'

export const Table = ({ className, ... props }: ComponentPropsWithoutRef<'table'>) => (
  <table
    data-slot='table'
    className={className}
    {...props}
  />
)

export const TableHeader = ({ className, ... props }: ComponentPropsWithoutRef<'thead'>) => (
  <thead
    data-slot='table-header'
    className={className}
    {...props}
  />
)

export const TableBody = ({ className, ... props }: ComponentPropsWithoutRef<'tbody'>) => (
  <tbody
    data-slot='table-body'
    className={className}
    {...props}
  />
)

export const TableFooter = ({ className, ... props }: ComponentPropsWithoutRef<'tfoot'>) => (
  <tfoot
    data-slot='table-footer'
    className={className}
    {...props}
  />
)

export const TableRow = ({ className, ... props }: ComponentPropsWithoutRef<'tr'>) => (
  <tr
    data-slot='table-row'
    className={className}
    {...props}
  />
)

export const TableColumn = ({ className, ... props }: ComponentPropsWithoutRef<'th'>) => (
  <th
    data-slot='table-column'
    className={className}
    {...props}
  />
)

export const TableCell = ({ className, ... props }: ComponentPropsWithoutRef<'td'>) => (
  <td
    data-slot='table-cell'
    className={className}
    {...props}
  />
)

export const TableCaption = ({ className, ... props }: ComponentPropsWithoutRef<'caption'>) => (
  <caption
    data-slot='table-caption'
    className={className}
    {...props}
  />
)
