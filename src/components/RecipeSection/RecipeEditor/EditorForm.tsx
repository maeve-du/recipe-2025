import { Button } from '@/components/Buttons/Button'
import { Input } from '@/components/ui/input'
import { clsMerge } from '@/lib/utils'
import { ReactNode } from 'react'
import { useRecipeForm } from './useRecipeForm'
import { toast } from 'sonner'
import { Recipe } from '@/stores/recipeStore'
import RemoveItemButton from '@/components/Buttons/RemoveItemButton'

interface EditorFormProps {
  recipe: Recipe
  formId: string
  setIsFormValid: (isValid: boolean) => void
  setIsFormDirty: (isValid: boolean) => void
}

const EditorForm = ({ recipe, formId, setIsFormValid, setIsFormDirty }: EditorFormProps) => {
  const {
    updateRecipe,
    register,
    handleSubmit,
    errors,
    instructionFields,
    instructionAppend,
    instructionRemove,
    ingredientFields,
    ingredientAppend,
    ingredientRemove
  } = useRecipeForm(recipe, setIsFormValid, setIsFormDirty)

  return (
    <div className='min-h-full mb-32 px-6'>
      <form
        id={formId}
        onSubmit={handleSubmit((data) => {
          try {
            if (recipe?.id) {
              updateRecipe(recipe?.id, data)
            }
            toast.success('Recipe saved')
          } catch (error) {
            console.log(error)
            toast.error('Failed to save recipe. Please try again.')
          }
        })}
        className='flex flex-col gap-2'>
        {/* Recipe name */}
        <FormItemField label='Recipe name'>
          <Input {...register('name')} />
          {errors.name && <ErrorMessage message={errors.name.message} />}
        </FormItemField>

        {/* Recipe cook time */}
        <FormItemField label='Cook time'>
          <div className='flex items-center gap-3 w-full'>
            <Input {...register('cookTime', { valueAsNumber: true })} type='number' min={1} />
            <span>minutes</span>
          </div>
          {errors.cookTime && <ErrorMessage message={errors.cookTime?.message} />}
        </FormItemField>

        {/* Recipe servings */}
        <FormItemField label='Servings'>
          <Input {...register('servings', { valueAsNumber: true })} type='number' min={1} />
          {errors.servings && <ErrorMessage message={errors.servings.message} />}
        </FormItemField>

        {/* Recipe instructions */}
        <FormItemGroupField label='Instructions'>
          {instructionFields.map((field, index) => (
            <div key={field.id} className='flex flex-col items-center gap-2 pl-2'>
              <div className='w-full flex items-start gap-2'>
                <span className='whitespace-nowrap w-[15%] h-9 flex items-center'>
                  {`Step ${index + 1}`}
                </span>
                <div className='w-[85%] flex flex-col gap-1'>
                  <Input
                    {...register(`instructions.${index}.value`)}
                    placeholder={`Step ${index + 1}`}
                  />
                  {errors.instructions && errors.instructions[index]?.value && (
                    <ErrorMessage message={errors.instructions[index].value.message} />
                  )}
                </div>
                <div className='h-9 flex items-center'>
                  <RemoveItemButton
                    isDisabled={instructionFields.length <= 1}
                    onClick={() => instructionRemove(index)}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className='flex w-full justify-end'>
            <Button type='button' className='w-50' onClick={() => instructionAppend({ value: '' })}>
              + Add instruction
            </Button>
          </div>
        </FormItemGroupField>

        {/* Recipe ingredients */}
        <FormItemGroupField label='Ingredients'>
          {ingredientFields.map((field, index) => (
            <div key={field.id} className='flex gap-2 pl-2'>
              <div className='flex w-full gap-5'>
                <div className='flex-1/2 flex flex-col gap-1'>
                  <div className='pl-2'>Name</div>
                  <Input
                    {...register(`ingredients.${index}.name`)}
                    placeholder={`Ingredient ${index + 1}`}
                  />
                  {errors.ingredients && errors.ingredients[index]?.name && (
                    <ErrorMessage message={errors.ingredients[index]?.name?.message} />
                  )}
                </div>
                <div className='flex-1/2 flex flex-col gap-1'>
                  <div className='pl-2'>Amount</div>
                  <Input {...register(`ingredients.${index}.amount`)} placeholder='Amount' />
                  {errors.ingredients && errors.ingredients[index]?.amount && (
                    <ErrorMessage message={errors.ingredients[index]?.amount?.message} />
                  )}
                </div>
              </div>
              <div className='h-17 flex items-end'>
                <div className='h-9 flex items-center'>
                  <RemoveItemButton
                    isDisabled={ingredientFields.length <= 1}
                    onClick={() => ingredientRemove(index)}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className='flex w-full justify-end'>
            <Button
              type='button'
              className='w-50'
              onClick={() => ingredientAppend({ name: '', amount: '' })}>
              + Add Ingredients
            </Button>
          </div>
        </FormItemGroupField>
      </form>
    </div>
  )
}
export default EditorForm

// --------------------------- Components

// Form label
interface FormLabelProps {
  label: string
}
const FormLabel = ({ label }: FormLabelProps) => {
  return (
    <label className='h-9 flex items-center font-bold whitespace-nowrap w-[160px] text-zinc-900'>
      {label}
    </label>
  )
}

// Error messages
interface ErrorMessageProps {
  message: string | undefined
}
const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className='pl-2 text-red-700 text-sm'>{message}</p>
}

// Form item field
interface FormItemProps extends FormLabelProps {
  children: ReactNode
}
const FormItemField = ({ label, children }: FormItemProps) => {
  return (
    <div className={clsMerge('flex flex-col gap-2')}>
      <div className='flex w-full'>
        <FormLabel label={label} />
        <div className='w-full flex flex-col gap-1'>{children}</div>
      </div>
    </div>
  )
}
// Form item group field
const FormItemGroupField = ({ label, children }: FormItemProps) => {
  return (
    <div className={clsMerge('flex flex-col gap-2')}>
      <FormLabel label={label} />
      <div className='flex flex-col gap-3 w-full mt-2'>{children}</div>
    </div>
  )
}
