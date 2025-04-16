import { sampleRecipes } from '@/data/sampleRecipes'
import RecipeCard from './RecipeCard'

const RecipeList = () => {
  return (
    <div className='flex flex-col gap-2 flex-1'>
      {sampleRecipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  )
}
export default RecipeList
