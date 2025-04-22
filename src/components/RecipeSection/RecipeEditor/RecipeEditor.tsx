import { Button } from '@/components/Buttons/Button'
import { Fragment } from 'react/jsx-runtime'
import { Separator } from '@radix-ui/react-separator'
import { Trash2Icon } from 'lucide-react'
import EditorForm from './EditorForm'
import { clsMerge } from '@/lib/utils'
import { useEditorState } from './useEditorState'
import ConfirmationDialog from '@/components/ui/ConfirmationDialog'

// Editor
const RecipeEditor = () => {
  const {
    toast,
    formId,
    selectedRecipeId,
    setSelectedRecipeId,
    selectedRecipe,
    deleteRecipe,
    isFormValid,
    setIsFormValid,
    setIsFormDirty,
    showCancelDialog,
    setShowCancelDialog,
    handleCancelClick,
    showDeleteDialog,
    setShowDeleteDialog
  } = useEditorState()

  if (!selectedRecipe) return null

  return (
    <div className='bg-white flex-2 sticky rounded-lg drop-shadow-sm w-[65%] top-[82px] h-[80dvh] overflow-scroll'>
      {/* Header */}
      <EditorHeader
        formId={formId}
        isFormValid={isFormValid}
        onShowCancelDialog={handleCancelClick}
        onShowDeleteDialog={() => setShowDeleteDialog(true)}
      />
      <Separator className='my-6' />

      {/* Form */}
      <EditorForm
        recipe={selectedRecipe}
        formId={formId}
        setIsFormValid={setIsFormValid}
        setIsFormDirty={setIsFormDirty}
      />

      {/* Cancel Confirmation Dialog */}
      <ConfirmationDialog
        open={showCancelDialog}
        onClose={() => setShowCancelDialog(false)}
        onConfirm={() => {
          setSelectedRecipeId(null)
          toast.info('Editing canceled')
        }}
        title='Cancel Editing'
        description='Are you sure you want to cancel? All unsaved changes will be lost.'
        confirmText='Discard Changes'
        cancelText='Continue Editing'
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        open={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={() => {
          if (selectedRecipeId) {
            try {
              deleteRecipe(selectedRecipeId)
              toast.success('Recipe deleted')
            } catch (error) {
              console.log(error)
              toast.error('Failed to delete recipe')
            }
          }
        }}
        title='Delete Recipe'
        description='Are you sure you want to delete this recipe? This action cannot be undone.'
        confirmText='Delete Recipe'
        cancelText='Cancel'
        variant='destructive'
      />
    </div>
  )
}
export default RecipeEditor

interface EditorHeaderProps {
  formId: string
  isFormValid: boolean
  onShowCancelDialog: () => void
  onShowDeleteDialog: () => void
}

// header
const EditorHeader = ({
  formId,
  onShowCancelDialog,
  onShowDeleteDialog,
  isFormValid
}: EditorHeaderProps) => {
  return (
    <Fragment>
      <div className='flex justify-between items-center px-6 sticky top-0 bg-white h-20 shadow-sm w-full z-30'>
        <h2 className='text-3xl'>Edit recipe</h2>
        <div className='flex gap-3'>
          <Button
            type='submit'
            form={formId}
            className={clsMerge('w-25', isFormValid ? 'opacity-100' : 'opacity-50')}>
            Save
          </Button>
          <Button className='w-25' variant={'outline'} onClick={onShowCancelDialog}>
            Cancel
          </Button>
          <Button
            size='icon'
            variant={'outline'}
            className='text-zinc-500 hover:text-red-600'
            onClick={onShowDeleteDialog}>
            <Trash2Icon />
          </Button>
        </div>
      </div>
    </Fragment>
  )
}
