'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { registerAction } from '@/actions/auth/register.action'
import LoadingButton from '@/components/ui/Button/LoadingButton'
import Form from '@/components/ui/Form/Form'
import FormField from '@/components/ui/Form/FormField/FormField'
import PasswordInput from '@/components/ui/Input/PasswordInput'
import TextInput from '@/components/ui/Input/TextInput'
import { registerSchema, RegisterValues } from '@/modules/auth/schema'
import { cn } from '@/shared/cn'

const defaultValues: RegisterValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function RegisterForm() {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
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
    <Form form={form} onSubmit={onSubmit} schema={registerSchema} className='space-y-6'>
      <div className='space-y-4'>
        <FormField name='name' label='Name'>
          <TextInput placeholder='John Doe' />
        </FormField>
        <FormField name='email' label='Email'>
          <TextInput type='email' placeholder='email@example.com' />
        </FormField>
        <FormField name='password' label='Password'>
          <PasswordInput placeholder='12345678' />
        </FormField>
        <FormField name='confirmPassword' label='Confirm password'>
          <PasswordInput placeholder='12345678' />
        </FormField>
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
