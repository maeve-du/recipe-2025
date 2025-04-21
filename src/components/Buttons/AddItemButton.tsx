import { PlusIcon } from 'lucide-react'
import { Button } from './Button'

interface AddItemButtonProps {
  onClick: () => void
  label: string
}

const AddItemButton = ({ onClick, label }: AddItemButtonProps) => {
  return (
    <Button type='button' variant='outline' size='sm' className='mt-2 w-fit' onClick={onClick}>
      <PlusIcon className='w-4 h-4' />
      <span className='h-4'>{label}</span>
    </Button>
  )
}

export default AddItemButton
