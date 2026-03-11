'use client'

import Link from 'next/link'
import { toast } from 'sonner'
import LoadingButton from '@/components/ui/Button/LoadingButton'
import Form from '@/components/ui/Form/Form'
import FormField from '@/components/ui/Form/FormField/FormField'
import Input from '@/components/ui/Input/Input'
import PasswordInput from '@/components/ui/Input/PasswordInput'
import { registerAction } from '@/modules/auth/actions/register.action'
import { registerSchema, RegisterValues } from '@/modules/auth/auth.schema'
import { cn } from '@/shared/cn'
import { useZodForm } from '@/shared/use-zod-form'

const defaultValues: RegisterValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function RegisterForm() {
  const form = useZodForm({
    schema: registerSchema,
    defaultValues
  })

  const { isSubmitting } = form.formState

  async function onSubmit(values: RegisterValues) {
    try {
      await registerAction(values)
    } catch (error) {
      toast.error('Registration failed. Please check your input and try again.')
    }
  }

  return (
    <Form form={form} onSubmit={onSubmit} className='space-y-6'>
      <div className='space-y-4'>
        <FormField name='name' label='Name' render={({ field }) => (
          <Input placeholder='John Doe' {...field} />
        )} />
        <FormField name='email' label='Email' render={({ field }) => (
          <Input type='email' placeholder='email@example.com' {...field} />
        )} />
        <FormField name='password' label='Password' render={({ field }) => (
          <PasswordInput placeholder='12345678' {...field} />
        )} />
        <FormField name='confirmPassword' label='Confirm password' render={({ field }) => (
          <PasswordInput placeholder='12345678' {...field} />
        )} />
      </div>

      <LoadingButton type='submit' className='w-full' loading={isSubmitting}>
        Register
      </LoadingButton>

      <p className='text-center text-sm text-neutral-600'>
        Already have an account?{' '}
        <Link href='/auth/login' className={cn(
          'font-medium text-neutral-900',
          'hover:underline'
        )}>
          Log in
        </Link>
      </p>
    </Form>
  )
}
