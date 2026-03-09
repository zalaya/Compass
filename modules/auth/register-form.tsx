'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { FormField } from '@/components/ui/form/form-field'
import { Input } from '@/components/ui/input'
import { registerAction } from '@/modules/auth/register-action'
import { registerSchema, RegisterValues } from '@/modules/auth/schema'

export default function RegisterForm() {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  async function onSubmit(values: RegisterValues) {
    await registerAction(values)
  }

  return (
    <Form form={form} onSubmit={onSubmit} className='space-y-6'>
      <div className='space-y-4'>
        <FormField name='name' label='Name'>
          <Input placeholder='John Doe' />
        </FormField>
        <FormField name='email' label='Email'>
          <Input type='email' placeholder='email@example.com' />
        </FormField>
        <FormField name='password' label='Password'>
          <Input type='password' placeholder='12345678' />
        </FormField>
      </div>

      <Button type='submit' className='w-full'>
        Register
      </Button>

      <p className='text-center text-sm text-neutral-600'>
        Already have an account?{' '}
        <Link
          href='/auth/login'
          className='font-medium text-neutral-900 hover:underline'
        >
          Log in
        </Link>
      </p>
    </Form>
  )
}
