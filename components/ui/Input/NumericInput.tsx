'use client'

import { KeyboardEvent } from 'react'
import { forwardRef, InputHTMLAttributes, useRef } from 'react'
import { ChevronDown,ChevronUp } from 'lucide-react'
import TextInput from '@/components/ui/Input/TextInput'
import { cn } from '@/shared/cn'

type NumericInputProps = InputHTMLAttributes<HTMLInputElement>

const NumericInput = forwardRef<HTMLInputElement, NumericInputProps>(({ className, step = 1, min, max, ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleStep(direction: 'up' | 'down') {
    const input = inputRef.current

    if (!input) return

    const current = input.value === '' ? 0 : Number(input.value)

    let next = direction === 'up'
      ? current + Number(step)
      : current - Number(step)

    if (min !== undefined) next = Math.max(next, Number(min))
    if (max !== undefined) next = Math.min(next, Number(max))

    input.value = String(next)
    input.dispatchEvent(new Event('input', { bubbles: true }))
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.ctrlKey || event.metaKey) return

    const allowedKeys = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab'
    ]

    if (allowedKeys.includes(event.key) || (event.key >= '0' && event.key <= '9') || event.key === '.') return

    event.preventDefault()
  }

  return (
    <div className='relative'>
      <TextInput
        ref={(node) => {
          inputRef.current = node

          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
        }}
        className={cn('pr-10', className)}
        min={min}
        max={max}
        onKeyDown={handleKeyDown}
        step={step}
        {...props}
      />
      <div className='absolute inset-y-0 right-0 flex flex-col border-l border-neutral-200'>
        <button
          type='button'
          onClick={() => handleStep('up')}
          className='flex h-1/2 items-center justify-center px-2 text-neutral-400 hover:text-neutral-700'
        >
          <ChevronUp size={14} />
        </button>
        <button
          type='button'
          onClick={() => handleStep('down')}
          className='flex h-1/2 items-center justify-center px-2 text-neutral-400 hover:text-neutral-700'
        >
          <ChevronDown size={14} />
        </button>
      </div>
    </div>
  )
}
)

export default NumericInput
