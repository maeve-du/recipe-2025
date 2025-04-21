import { clsMerge } from '@/lib/utils'
import RecipeList from './RecipeSection/RecipeList/RecipeList'
import RecipeEditor from './RecipeSection/RecipeEditor/RecipeEditor'
import { useSelectedRecipeId } from '@/stores/recipeStore'

const RecipeSection = () => {
  const selectedRecipeId = useSelectedRecipeId()

  return (
    <div
      className={clsMerge(
        'flex flex-row justify-between gap-6 px-6 w-full mx-auto mb-20 max-w-[1200px] min-w-[960px] '
      )}>
      <RecipeList />
      {selectedRecipeId && <RecipeEditor />}
    </div>
  )
}
export default RecipeSection
