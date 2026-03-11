import { NextResponse } from 'next/server'
import { registerSchema } from '@/modules/auth/auth.schema'
import { authService } from '@/modules/auth/auth.service'

export async function POST(request: Request) {
  const body = await request.json()
  const data = validateRequest(body)

  if (data instanceof NextResponse) {
    return data
  }

  try {
    const user = await authService.register(data)

    return NextResponse.json({
      id: user.id,
      email: user.email
    })
  } catch {
    return NextResponse.json(
      { error: 'User already exists' },
      { status: 409 }
    )
  }
}

const validateRequest = (body: unknown) => {
  const result = registerSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { error: 'Invalid data' },
      { status: 400 }
    )
  }

  return result.data
}
