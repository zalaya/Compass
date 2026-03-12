import RegisterForm from '@/modules/auth/components/RegisterForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register'
}

export default function Page() {
  return <RegisterForm />
}
