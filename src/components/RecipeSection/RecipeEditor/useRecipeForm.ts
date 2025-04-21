import { Recipe } from '@/stores/recipeStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

// Form schema definition
export const RecipeFormSchema = z.object({
  name: z.string().min(3, {
    message: 'Recipe name should be at least 3 characters'
  }),
  cookTime: z
    .number({
      required_error: 'Cook time is required.',
      invalid_type_error: 'Cook time is required.'
    })
    .positive({ message: 'Cook time should be more than zero minutes' }),
  servings: z
    .number({ required_error: 'Amount of Servings is required.' })
    .positive({ message: 'Amount of Servings should be more than zero' }),
  instructions: z
    .array(
      z.object({
        value: z.string().min(3, { message: 'Instruction should be at least 3 characters' })
      })
    )
    .min(1, { message: 'Instructions are required' }),
  ingredients: z
    .array(
      z.object({
        name: z.string().min(1, { message: 'Ingredient name is required.' }),
        amount: z.string().min(1, { message: 'Ingredient Amount is required.' })
      })
    )
    .min(1, { message: 'Ingredients are required.' })
})

export type RecipeFormValues = z.infer<typeof RecipeFormSchema>

export const useRecipeForm = (recipe: Recipe) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RecipeFormValues>({
    resolver: zodResolver(RecipeFormSchema),
    defaultValues: {
      ...recipe
    }
  })

  // Reset form when recipe changes
  useEffect(() => {
    reset(recipe)
  }, [recipe, reset])

  const {
    fields: instructionFields,
    append: instructionAppend,
    remove: instructionRemove
  } = useFieldArray({
    name: 'instructions',
    control
  })

  const {
    fields: ingredientFields,
    append: ingredientAppend,
    remove: ingredientRemove
  } = useFieldArray({
    name: 'ingredients',
    control
  })

  return {
    register,
    handleSubmit,
    errors,
    instructionFields,
    instructionAppend,
    instructionRemove,
    ingredientFields,
    ingredientAppend,
    ingredientRemove,
    reset
  }
}
