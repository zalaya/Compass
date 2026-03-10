import { NextResponse } from 'next/server'
import { registerSchema } from '@/modules/auth/auth.schema'
import { authService } from '@/modules/auth/auth.service'

export async function POST(request: Request) {
  const body = await request.json()
  const result = registerSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { error: 'Invalid data' },
      { status: 400 }
    )
  }

  try {
    const { id, email } = await authService.register(result.data)

    return NextResponse.json({ id, email })
  } catch {
    return NextResponse.json(
      { error: 'User already exists' },
      { status: 409 }
    )
  }
}
