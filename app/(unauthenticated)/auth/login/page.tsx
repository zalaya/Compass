import LoginForm from '@/modules/auth/components/LoginForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login'
}

export default function Page() {
  return <LoginForm />
}
