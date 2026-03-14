import { redirect } from 'next/navigation'
import { auth } from '@/auth'

export default async function Page() {
  const session = await auth()

  if (session) {
    redirect('/dashboard') // TODO: Redirect to the defaultOrganization's dashboard.
  }

  redirect('/auth/login')
}
