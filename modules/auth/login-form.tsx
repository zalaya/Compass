'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { FormField } from '@/components/ui/form/form-field'
import { PasswordInput } from '@/components/ui/password-input'
import { TextInput } from '@/components/ui/text-input'
import { loginAction } from '@/modules/auth/login-action'
import { loginSchema, LoginValues } from '@/modules/auth/schema'

export default function LoginForm() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function onSubmit(values: LoginValues) {
    await loginAction(values)
  }

  return (
    <Form form={form} onSubmit={onSubmit} className='space-y-6'>
      <div className='space-y-4'>
        <FormField name='email' label='Email'>
          <TextInput type='email' placeholder='email@example.com' />
        </FormField>
        <FormField name='password' label='Password'>
          <PasswordInput placeholder='12345678' />
        </FormField>
      </div>

      <Button type='submit' className='w-full'>
        Log in
      </Button>

      <p className='text-center text-sm text-neutral-600'>
        Don't have an account?{' '}
        <Link
          href='/auth/register'
          className='font-medium text-neutral-900 hover:underline'
        >
          Register
        </Link>
      </p>
    </Form>
  )
}
