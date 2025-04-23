import { create } from 'zustand'
import { sampleRecipes } from '@/data/sampleRecipes'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type UUID = string

interface Ingredient {
  name: string
  amount: string
}

interface Instruction {
  value: string
}

export interface Recipe {
  id: UUID
  name: string
  servings: number
  cookTime: number
  instructions: Instruction[]
  ingredients: Ingredient[]
}

interface RecipeActions {
  toggleRecipeSelection: (recipeId: UUID) => void
  setSelectedRecipeId: (recipeId: UUID | null) => void
  deleteRecipe: (recipeId: UUID) => void
  // addRecipe: (recipe?: Omit<Recipe, 'id'>) => void
  addRecipe: (recipeId: UUID) => void
  updateRecipe: (id: UUID, recipe: Partial<Recipe>) => void
}

interface RecipeStore {
  recipes: Recipe[]
  selectedRecipeId: UUID | null
  actions: RecipeActions
}

const useRecipeStore = create<RecipeStore>()(
  persist(
    immer((set) => ({
      recipes: [...sampleRecipes],
      selectedRecipeId: null,
      actions: {
        toggleRecipeSelection: (recipeId) => {
          return set((state) => {
            // If the same recipe is selected again, deselect it
            if (state.selectedRecipeId === recipeId) {
              state.selectedRecipeId = null
            } else {
              // Otherwise select the new recipe
              state.selectedRecipeId = recipeId
            }
          })
        },
        setSelectedRecipeId: (recipeId) => {
          return set((state) => {
            if (recipeId === null) {
              state.selectedRecipeId = null
            } else {
              state.selectedRecipeId = recipeId
            }
          })
        },

        deleteRecipe: (recipeId) =>
          set((state) => {
            // If the deleted recipe is currently selected, reset selection
            if (state.selectedRecipeId === recipeId) {
              state.selectedRecipeId = null
            }
            state.recipes = state.recipes.filter((recipe) => recipe.id !== recipeId)
          }),

        addRecipe: (recipeId) =>
          set((state) => {
            const defaultRecipe = {
              name: 'Untitled',
              servings: 1,
              cookTime: 1,
              instructions: [{ value: '' }],
              ingredients: [
                {
                  name: '',
                  amount: ''
                }
              ]
            }
            const newRecipe = {
              id: recipeId,
              ...defaultRecipe
            }
            state.recipes.unshift(newRecipe)
          }),

        updateRecipe: (id, updatedRecipe) =>
          set((state) => {
            // Find the index of the recipe with the matching id
            const index = state.recipes.findIndex((recipe) => recipe.id === id)
            // Only update if the recipe exists (index !== -1)
            // findIndex returns -1 when no element satisfies the condition
            if (index !== -1) {
              // Merge the existing recipe with the updated properties
              // This preserves properties not included in updatedRecipe
              state.recipes[index] = { ...state.recipes[index], ...updatedRecipe }
            }
          })
      }
    })),
    {
      name: 'recipe-storage',
      partialize: (state) => ({ recipes: state.recipes })
    }
  )
)

export const useRecipeList = () => useRecipeStore((state) => state.recipes)
export const useSelectedRecipeId = () => useRecipeStore((state) => state.selectedRecipeId)
export const useRecipeActions = () => useRecipeStore((state) => state.actions)

export const useSelectedRecipe = () => {
  const recipes = useRecipeList()
  const selectedId = useSelectedRecipeId()

  return recipes.find((recipe) => recipe.id === selectedId) || null
}
