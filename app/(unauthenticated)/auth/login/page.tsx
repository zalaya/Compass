import { Metadata } from 'next'
import LoginForm from '@/modules/auth/components/LoginForm'

export const metadata: Metadata = {
  title: 'Login'
}

export default function Page() {
  return <LoginForm />
}
