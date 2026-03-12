type Entry = {
  count: number
  resetAt: number
}

const store = new Map<string, Entry>()

const WINDOW = 60 * 1000
const LIMIT = 5

export function rateLimit(key: string) {
  const now = Date.now()
  const entry = store.get(key)

  if (!entry || now > entry.resetAt) {
    store.set(key, {
      count: 1,
      resetAt: now + WINDOW
    })
    
    return
  }

  if (entry.count >= LIMIT) {
    const seconds = Math.ceil((entry.resetAt - now) / 1000)
    throw new Error(`Too many attempts. Try again in ${seconds}s.`)
  }

  entry.count++
}
