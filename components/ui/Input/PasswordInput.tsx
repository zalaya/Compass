'use client'

import { forwardRef, InputHTMLAttributes,useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import TextInput from '@/components/ui/Input/TextInput'
import { cn } from '@/shared/cn'

const PasswordInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='relative'>
      <TextInput
        ref={ref}
        type={visible ? 'text' : 'password'}
        className={cn(
          'pr-10',
          className
        )}
        {...props}
      />
      <button
        type='button'
        onClick={() => setVisible((visible) => !visible)}
        className={cn(
          'absolute cursor-pointer inset-y-0 right-0 flex items-center pr-3 text-neutral-400 transition-colors duration-150',
          'hover:text-neutral-700'
        )}
      >
        {visible ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  )
})

export default PasswordInput
