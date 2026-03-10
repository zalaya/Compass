'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { loginAction } from '@/actions/auth/login.action'
import Button from '@/components/ui/Button'
import Form from '@/components/ui/Form/Form'
import FormField from '@/components/ui/Form/FormField/FormField'
import PasswordInput from '@/components/ui/PasswordInput'
import TextInput from '@/components/ui/TextInput'
import { loginSchema, LoginValues } from '@/modules/auth/schema'

const defaultValues: LoginValues = {
  email: '',
  password: ''
}

export default function LoginForm() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues
  })

  const { formState } = form

  async function onSubmit(values: LoginValues) {
    try {
      await loginAction(values)
    } catch (error) {
      form.setError('root', {
        message: (error as Error).message || 'Login failed'
      })
    }
  }

  return (
    <Form form={form} onSubmit={onSubmit} schema={loginSchema} className='space-y-6'>
      <div className='space-y-4'>
        <FormField name='email' label='Email'>
          <TextInput type='email' placeholder='email@example.com' />
        </FormField>
        <FormField name='password' label='Password'>
          <PasswordInput placeholder='12345678' />
        </FormField>
      </div>

      <Button type='submit' className='w-full' disabled={formState.isSubmitting}>
        {formState.isSubmitting ? 'Logging in...' : 'Log in'}
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
