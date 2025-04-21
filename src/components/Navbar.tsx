import { useRecipeActions } from '@/stores/recipeStore'
import PageContainer from './ui/PageContainer'
import { v4 as uuidV4 } from 'uuid'
import { Button } from './Buttons/Button'
import { CirclePlusIcon } from 'lucide-react'
import { toast } from 'sonner'

const Navbar = () => {
  const { addRecipe, setSelectedRecipeId } = useRecipeActions()
  return (
    <PageContainer top='top-0' background='bg-indigo-500/90'>
      <h1 className='text-3xl text-center w-full font-bold text-white whitespace-nowrap'>
        Recipes 2025
      </h1>
      <Button
        className='absolute right-6 px-10 flex items-center'
        variant={'dark'}
        size={'lg'}
        onClick={() => {
          try {
            // Generate a new ID for the recipe
            const newRecipeId = uuidV4()

            // Add the new recipe with this ID
            addRecipe(newRecipeId)
            
            // Select the newly added recipe
            setSelectedRecipeId(newRecipeId)
            
            // Scroll to the top of the page
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
            
            toast.success('New recipe created')
          } catch (error) {
            console.log(error)
            toast.error('Failed to create new recipe')
          }
        }}>
        <span className='text-indigo-600'>New Recipe</span>
        <CirclePlusIcon className='stroke-3 text-indigo-600' />
      </Button>
    </PageContainer>
  )
}
export default Navbar
