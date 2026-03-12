import { Metadata } from 'next'
import RegisterForm from '@/modules/auth/components/RegisterForm'

export const metadata: Metadata = {
  title: 'Register'
}

export default function Page() {
  return <RegisterForm />
}
