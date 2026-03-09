import { NextResponse } from 'next/server'
import { registerSchema } from '@/modules/auth/schema'

export async function POST(request: Request) {
  const body = await request.json()
  const result = registerSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { error: 'Invalid data' },
      { status: 400 }
    )
  }

  return NextResponse.json({ success: true })
}
