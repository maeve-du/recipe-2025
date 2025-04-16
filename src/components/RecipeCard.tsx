import { it } from 'node:test'
import { Button } from './Button'

interface RecipeDetailProps {
  label: string
  value: string | number
}

type UUID = string

interface Ingredient {
  id: UUID
  name: string
  amount: string
}

export interface Recipe {
  id: UUID
  name: string
  servings: number
  cookTime: string
  instructions: string[]
  ingredients: Ingredient[]
}

interface RecipeItemProps {
  recipe: Recipe
}

const RecipeDetail = ({ label, value }: RecipeDetailProps) => {
  return (
    <div>
      <span className='font-bold mr-3'>{label}:</span>
      <span className='font-light'>{value}</span>
    </div>
  )
}

const RecipeCard = ({ recipe }: RecipeItemProps) => {
  const { name } = recipe
  return (
    <div className='p-6 bg-white border-2 border-gray-300 rounded-2xl min-w-[320px]'>
      <div className='flex justify-between items-center mb-3'>
        <p className='text-2xl font-bold lin leading-[2]'>{name}</p>
        <Button variant={'destructive'}>Delete</Button>
      </div>
      <div className='flex flex-col gap-1'>
        <RecipeDetail label='Cook Time' value={recipe.cookTime} />
        <RecipeDetail label='Servings' value={recipe.servings} />
        <RecipeDetail label='Instructions' value={recipe.cookTime} />
        <div>
          <span className='font-bold mr-3'>Instructions:</span>
          {recipe.instructions.map((item, index) => (
            <li className='font-light list-decimal' key={index}>
              {item}
            </li>
          ))}
        </div>
        <div>
          <span className='font-bold mr-3'>Ingredients:</span>
          <table className='w-full mt-1 bg-gray-50 rounded-sm'>
            <thead>
              <tr className='text-left border-b border-gray-300'>
                <th className='pb-1 w-1/2 font-normal p-3'>Name</th>
                <th className='pb-1 w-1/2 font-normal p-3'>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recipe.ingredients.map((item) => (
                <tr key={item.id}>
                  <td className='font-light px-3 py-2'>{item.name}</td>
                  <td className='font-light px-3 py-2'>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
