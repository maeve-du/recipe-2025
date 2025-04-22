import { useState } from 'react'
import { useRecipeActions, useSelectedRecipe, useSelectedRecipeId } from '@/stores/recipeStore'
import { toast } from 'sonner'

export const useEditorState = () => {
  const formId = 'recipe-form'
  const selectedRecipe = useSelectedRecipe()
  const selectedRecipeId = useSelectedRecipeId()

  const [isFormValid, setIsFormValid] = useState(false)
  const [isFormDirty, setIsFormDirty] = useState(false)
  const [showCancelDialog, setShowCancelDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const { setSelectedRecipeId, deleteRecipe } = useRecipeActions()

  const handleCancelClick = () => {
    // Only show the dialog if the form has been modified
    if (isFormDirty) {
      setShowCancelDialog(true)
    } else {
      // If form is not modified, just close the editor without warning
      setSelectedRecipeId(null)
      toast.info('Editing canceled')
    }
  }

  return {
    toast,
    formId,
    selectedRecipeId,
    setSelectedRecipeId,
    selectedRecipe,
    deleteRecipe,
    isFormValid,
    setIsFormValid,
    isFormDirty,
    setIsFormDirty,
    showCancelDialog,
    setShowCancelDialog,
    showDeleteDialog,
    setShowDeleteDialog,
    handleCancelClick
  }
}
