import { v4 as uuidV4 } from 'uuid'

export const sampleRecipes = [
  {
    id: uuidV4(),
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '2:45',
    instructions: ['Put salt on Chicken', 'Put chicken in oven', 'Eat chicken'],
    ingredients: [
      {
        id: uuidV4(),
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: uuidV4(),
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: uuidV4(),
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: ['Put paprika on Pork', 'Put pork in oven', 'Eat pork'],
    ingredients: [
      {
        id: uuidV4(),
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        id: uuidV4(),
        name: 'Pork2',
        amount: '2 Pounds'
      },
      {
        id: uuidV4(),
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
  {
    id: uuidV4(),
    name: 'Plain Apple Pai',
    servings: 10,
    cookTime: '3:45',
    instructions: ['Put apples in pie', 'Put pie in oven', 'Eat pie'],
    ingredients: [
      {
        id: uuidV4(),
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        id: uuidV4(),
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
  {
    id: uuidV4(),
    name: 'Plain Apple Pai',
    servings: 10,
    cookTime: '3:45',
    instructions: ['Put apples in pie', 'Put pie in oven', 'Eat pie'],
    ingredients: [
      {
        id: uuidV4(),
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        id: uuidV4(),
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
  {
    id: uuidV4(),
    name: 'Plain Apple Pai',
    servings: 10,
    cookTime: '3:45',
    instructions: ['Put apples in pie', 'Put pie in oven', 'Eat pie'],
    ingredients: [
      {
        id: uuidV4(),
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        id: uuidV4(),
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
  {
    id: uuidV4(),
    name: 'Plain Apple Pai',
    servings: 10,
    cookTime: '3:45',
    instructions: ['Put apples in pie', 'Put pie in oven', 'Eat pie'],
    ingredients: [
      {
        id: uuidV4(),
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        id: uuidV4(),
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
  {
    id: uuidV4(),
    name: 'Plain Apple Pai',
    servings: 10,
    cookTime: '3:45',
    instructions: ['Put apples in pie', 'Put pie in oven', 'Eat pie'],
    ingredients: [
      {
        id: uuidV4(),
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        id: uuidV4(),
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]
