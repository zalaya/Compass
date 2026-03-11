'use client'

import Link from 'next/link'
import { toast } from 'sonner'
import LoadingButton from '@/components/ui/Button/LoadingButton'
import Form from '@/components/ui/Form/Form'
import FormField from '@/components/ui/Form/FormField/FormField'
import Input from '@/components/ui/Input/Input'
import PasswordInput from '@/components/ui/Input/PasswordInput'
import { loginAction } from '@/modules/auth/actions/login.action'
import { loginSchema, LoginValues } from '@/modules/auth/auth.schema'
import { cn } from '@/shared/cn'
import { useZodForm } from '@/shared/use-zod-form'

const defaultValues: LoginValues = {
  email: '',
  password: ''
}

export default function LoginForm() {
  const form = useZodForm({
    schema: loginSchema,
    defaultValues
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: LoginValues) {
    try {
      await loginAction(values)
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.')
    }
  }

  return (
    <Form form={form} onSubmit={onSubmit} className='space-y-6'>
      <div className='space-y-4'>
        <FormField name='email' label='Email' render={({ field }) => (
          <Input type='email' placeholder='email@example.com' {...field} />
        )} />
        <FormField name='password' label='Password' render={({ field }) => (
          <PasswordInput placeholder='12345678' {...field} />
        )} />
      </div>

      <LoadingButton type='submit' className='w-full' loading={isSubmitting}>
        Log in
      </LoadingButton>

      <p className='text-center text-sm text-neutral-600'>
        Don't have an account?{' '}
        <Link href='/auth/register' className={cn(
          'font-medium text-neutral-900',
          'hover:underline'
        )}>
          Register
        </Link>
      </p>
    </Form>
  )
}
