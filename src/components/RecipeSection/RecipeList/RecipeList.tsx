import { useRecipeList } from '@/stores/recipeStore'
import RecipeCard from './RecipeCard'

const RecipeList = () => {
  const recipes = useRecipeList()

  return (
    <div className='flex flex-col gap-6 w-[35%] pt-4 min-h-screen'>
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  )
}
export default RecipeList
