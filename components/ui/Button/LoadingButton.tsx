import { ComponentProps } from 'react'
import { LoaderCircle } from 'lucide-react'
import Button from '@/components/ui/Button/Button'

type LoadingButtonProps = ComponentProps<typeof Button> & {
  loading?: boolean
}

export default function LoadingButton({ loading,  children,  disabled,  ...props }: LoadingButtonProps) {
  return (
    <Button disabled={loading || disabled} {...props}>
      {loading ? (
        <LoaderCircle className='h-4 w-4 animate-spin' />
      ) : (
        children
      )}
    </Button>
  )
}
