'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { FormField } from '@/components/ui/form/form-field'
import { Input } from '@/components/ui/input'
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
    await signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: '/'
    })
  }

  return (
    <Form form={form} onSubmit={onSubmit} className='space-y-4'>
      <FormField name='email' label='Email'>
        <Input type='email' placeholder='email@example.com' />
      </FormField>
      <FormField name='password' label='Password'>
        <Input type='password' placeholder='********' />
      </FormField>

      <Button type='submit'>
        Log In
      </Button>
    </Form>
  )
}
