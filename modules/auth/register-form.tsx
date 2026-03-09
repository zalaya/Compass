'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { FormField } from '@/components/ui/form/form-field'
import { Input } from '@/components/ui/input'
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
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })

    if (!response.ok) {
      console.error('Register failed')
      return
    }

    await signIn('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: '/'
    })
  }

  return (
    <Form form={form} onSubmit={onSubmit} className='space-y-4'>
      <FormField name='name' label='Name'>
        <Input placeholder='Your name...' />
      </FormField>
      <FormField name='email' label='Email'>
        <Input type='email' placeholder='email@example.com' />
      </FormField>
      <FormField name='password' label='Password'>
        <Input type='password' placeholder='********' />
      </FormField>

      <Button type='submit'>
        Register
      </Button>
    </Form>
  )
}
