import { Recipe, useRecipeActions } from '@/stores/recipeStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

// Form schema definition
export const RecipeFormSchema = z.object({
  name: z.string().min(3, {
    message: 'Recipe name must be at least 3 characters long'
  }),
  cookTime: z
    .number({
      required_error: 'Please specify a cook time',
      invalid_type_error: 'Cook time must be a number (e.g., 30)'
    })
    .positive({ message: 'Cook time must be greater than zero' }),
  servings: z
    .number({
      required_error: 'Please specify the number of servings',
      invalid_type_error: 'Servings must be a number (e.g., 4)'
    })
    .positive({ message: 'Number of servings must be greater than zero' }),
  instructions: z
    .array(
      z.object({
        value: z.string().min(3, { message: 'Each instruction must be at least 3 characters long' })
      })
    )
    .min(1, { message: 'Please add at least one instruction' }),
  ingredients: z
    .array(
      z.object({
        name: z.string().min(1, { message: 'Please enter an ingredient name' }),
        amount: z.string().min(1, { message: 'Please specify the amount' })
      })
    )
    .min(1, { message: 'Please add at least one ingredient' })
})

export type RecipeFormValues = z.infer<typeof RecipeFormSchema>

export const useRecipeForm = (
  recipe: Recipe,
  setIsFormValid?: (isValid: boolean) => void,
  setIsFormDirty?: (isFormDirty: boolean) => void
) => {
  const { updateRecipe } = useRecipeActions()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset
  } = useForm<RecipeFormValues>({
    resolver: zodResolver(RecipeFormSchema),
    defaultValues: {
      ...recipe
    },
    mode: 'onChange'
  })

  // Update the form's validity state whenever isValid changes
  useEffect(() => {
    if (setIsFormValid) {
      setIsFormValid(isValid)
    }
  }, [isValid, setIsFormValid])

  // Track if the form has been modified
  useEffect(() => {
    if (setIsFormDirty) {
      setIsFormDirty(isDirty)
    }
  }, [isDirty, setIsFormDirty])

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
    updateRecipe,
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
