import { useState } from 'react'
import { Recipe, useRecipeActions, useSelectedRecipeId } from '@/stores/recipeStore'
import { toast } from 'sonner'

export const useRecipeCard = (recipe: Recipe) => {
  const selectedRecipeId = useSelectedRecipeId()
  const { setSelectedRecipeId, deleteRecipe, toggleRecipeSelection } = useRecipeActions()

  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const toggleCard = () => toggleRecipeSelection(recipe.id)

  const openDeleteDialog = (event: React.MouseEvent) => {
    event.stopPropagation()
    setShowDeleteDialog(true)
  }

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false)
  }

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

  const isInstructionNotEmpty =
    recipe.instructions.length >= 1 && recipe.instructions[0].value.length > 0

  const isIngredientNotEmpty =
    recipe.ingredients.length >= 1 &&
    recipe.ingredients[0].name.length > 0 &&
    recipe.ingredients[0].amount.length > 0

  return {
    toggleCard,
    selectedRecipeId,
    openDeleteDialog,
    closeDeleteDialog,
    showDeleteDialog,
    handleDeleteConfirm,
    isInstructionNotEmpty,
    isIngredientNotEmpty
  }
}
