'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { cn } from '@/components/cn'
import Button from '@/components/ui/Button'
import Form from '@/components/ui/Form/Form'
import FormField from '@/components/ui/Form/FormField/FormField'
import PasswordInput from '@/components/ui/PasswordInput'
import TextInput from '@/components/ui/TextInput'
import { registerAction } from '@/modules/auth/register.action'
import { registerSchema, RegisterValues } from '@/modules/auth/schema'

export default function RegisterForm() {
  const form = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  async function onSubmit(values: RegisterValues) {
    await registerAction(values)
  }

  return (
    <Form form={form} onSubmit={onSubmit} className='space-y-6'>
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

      <Button type='submit' className='w-full'>
        Register
      </Button>

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
