import { ComponentPropsWithoutRef } from 'react'

const Root = (props: ComponentPropsWithoutRef<'table'>) => (
  <table data-slot='table' {...props} />
)

const Header = (props: ComponentPropsWithoutRef<'thead'>) => (
  <thead data-slot='table-header' {...props} />
)

const Body = (props: ComponentPropsWithoutRef<'tbody'>) => (
  <tbody data-slot='table-body' {...props} />
)

const Footer = (props: ComponentPropsWithoutRef<'tfoot'>) => (
  <tfoot data-slot='table-footer' {...props} />
)

const Row = (props: ComponentPropsWithoutRef<'tr'>) => (
  <tr data-slot='table-row' {...props} />
)

const Column = (props: ComponentPropsWithoutRef<'th'>) => (
  <th data-slot='table-column' {...props} />
)

const Cell = (props: ComponentPropsWithoutRef<'td'>) => (
  <td data-slot='table-cell' {...props} />
)

const Caption = (props: ComponentPropsWithoutRef<'caption'>) => (
  <caption data-slot='table-caption' {...props} />
)

export const Table = {
  Root,
  Header,
  Body,
  Footer,
  Row,
  Column,
  Cell,
  Caption
}
