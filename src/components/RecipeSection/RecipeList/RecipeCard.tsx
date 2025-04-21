import {
  ChefHatIcon,
  Clock4Icon,
  CookingPotIcon,
  LucideIcon,
  Trash2Icon,
  UsersIcon
} from 'lucide-react'
import { Recipe, useRecipeActions, useSelectedRecipeId } from '@/stores/recipeStore'
import { Button } from '@/components/Buttons/Button'
import { clsMerge } from '@/lib/utils'
import ConfirmationDialog from '@/components/ui/ConfirmationDialog'
import { useState } from 'react'
import { toast } from 'sonner'

interface RecipeCardProps {
  recipe: Recipe
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const handleDeleteConfirm = () => {
    try {
      if (recipe.id) {
        deleteRecipe(recipe.id)
      }
      setSelectedRecipeId(null)
      toast.success('Recipe deleted')
    } catch (error) {
      console.log(error)
      toast.error('Failed to delete recipe')
    }
  }
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const { setSelectedRecipeId, deleteRecipe, toggleRecipeSelection } = useRecipeActions()
  const selectedRecipeId = useSelectedRecipeId()
  const InstructionNotEmpty =
    recipe.ingredients.length >= 1 && recipe.instructions[0].value.length > 0
  const ingredientNotEmpty =
    recipe.ingredients.length >= 1 &&
    recipe.ingredients[0].name.length > 0 &&
    recipe.ingredients[0].amount.length > 0
  return (
    <div
      className={clsMerge(
        'p-6 bg-white transition-all drop-shadow-sm duration-300 ease-in-out rounded-2xl min-w-[320px]',
        selectedRecipeId === recipe.id
          ? 'border-2 border-indigo-600'
          : 'border-2 border-transparent'
      )}
      onClick={() => {
        // setSelectedRecipeId(recipe.id)
        toggleRecipeSelection(recipe.id)
      }}>
      <div className='flex justify-between items-center mb-6 gap-0.5'>
        <p className='text-xl font-bold line-clamp-2 w-full align-middle'>{recipe.name}</p>
        <Button
          variant={'outline'}
          className='text-zinc-500 hover:text-red-600 '
          size={'icon'}
          onClick={(event) => {
            event.stopPropagation()
            // deleteRecipe(recipe.id)
            setShowDeleteDialog(true)
          }}>
          <Trash2Icon className='w-5 h-5' />
        </Button>
        {/* Delete Confirmation Dialog */}
        <ConfirmationDialog
          open={showDeleteDialog}
          onClose={() => setShowDeleteDialog(false)}
          onConfirm={handleDeleteConfirm}
          title='Delete Recipe'
          description='Are you sure you want to delete this recipe? This action cannot be undone.'
          confirmText='Delete Recipe'
          cancelText='Cancel'
          variant='destructive'
        />
      </div>

      {/* Cook time */}
      <div className='flex flex-col gap-2'>
        <RecipeDetail
          label='Cook Time'
          value={recipe.cookTime}
          icon={Clock4Icon}
          unit={recipe.cookTime === 1 ? 'minute' : 'minutes'}
        />

        {/* Servings */}
        <RecipeDetail label='Servings' value={recipe.servings} icon={UsersIcon} />

        {/* Instructions */}
        <div>
          <RecipeDetail label='Instructions' icon={ChefHatIcon} />
          {InstructionNotEmpty ? (
            recipe.instructions.map((item, index) => (
              <li className='font-normal list-none flex gap-1 ml-2' key={index}>
                <p className='w-8 text-center text-foreground/50'>
                  {index + 1}
                  <span className='ml-0.5'>.</span>
                </p>
                <p className='w-full'>{item.value}</p>
              </li>
            ))
          ) : (
            <p className='w-full ml-2 mt-2 text-zinc-500'>No content</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <RecipeDetail label='Ingredients' icon={CookingPotIcon} />

          {ingredientNotEmpty ? (
            <div className='border rounded-lg overflow-hidden border-indigo-500/20 mt-3 ml-2'>
              <table className='w-full border-separate border-spacing-0'>
                <thead>
                  <tr className='text-left text-sm text-indigo-600 bg-indigo-500/5'>
                    <th className='w-1/2 px-3 py-2 font-normal border-b border-b-indigo-500/20'>
                      Name
                    </th>
                    <th className='w-1/2 px-3 py-2 font-normal border-b border-b-indigo-500/20'>
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recipe.ingredients.map((item, index) => (
                    <tr key={index} className='text-left'>
                      {/* bg-zinc-50  */}
                      <td className='w-2/3 font-normal p-3'>{item.name}</td>
                      <td className='w-1/3 font-normal p-3'>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className='w-full ml-2 mt-2 text-zinc-500'>No content</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default RecipeCard

interface RecipeDetailProps {
  label: string
  value?: string | number
  icon: LucideIcon
  unit?: string
}

const RecipeDetail = ({ label, value, icon: Icon, unit = '' }: RecipeDetailProps) => {
  return (
    <div className='flex items-center gap-1.5'>
      <Icon className='h-4 w-4 text-indigo-400' />
      <div>
        <span className='font-bold mr-3 align-middle text-indigo-600'>{label} :</span>
        {value && <span className='font-normal align-middle mr-2'>{value}</span>}
        {unit && <span>{unit}</span>}
      </div>
    </div>
  )
}
