import { MinusIcon } from 'lucide-react'
import { Button } from './Button'

interface DeleteItemButtonProps {
  onClick: () => void
  isDisabled: boolean
}

const RemoveItemButton = ({ onClick, isDisabled }: DeleteItemButtonProps) => {
  return (
    <Button
      type='button'
      disabled={isDisabled}
      variant='destructive'
      size='icon'
      className='rounded-full w-5 h-5'
      onClick={onClick}>
      <MinusIcon className='text-white' />
    </Button>
  )
}

export default RemoveItemButton
