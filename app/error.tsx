'use client'

interface ErrorProps {
  reset: () => void
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div>
      <h2>Algo salió mal...</h2>
      <button onClick={() => reset()}>Reintentar</button>
    </div>
  )
}
