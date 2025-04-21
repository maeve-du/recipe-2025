import { v4 as uuidV4 } from 'uuid'

export const sampleRecipes = [
  {
    id: uuidV4(),
    name: 'Plain Chicken 1',
    servings: 3,
    cookTime: 1,
    instructions: [
      {
        value: 'Put salt on Chicken'
      },
      {
        value: 'Put chicken in oven'
      },
      {
        value: 'Eat chicken'
      }
    ],
    ingredients: [
      {
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: uuidV4(),
    name: 'Plain Pork 2',
    servings: 5,
    cookTime: 10,
    instructions: [
      {
        value: 'Put salt on Chicken'
      },
      {
        value: 'Put chicken in oven'
      },
      {
        value: 'Eat chicken'
      }
    ],
    ingredients: [
      {
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        name: 'Pork2',
        amount: '2 Pounds'
      },
      {
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
  {
    id: uuidV4(),
    name: 'Plain Apple Pai 3',
    servings: 10,
    cookTime: 15,
    instructions: [
      {
        value: 'Put salt on Chicken'
      },
      {
        value: 'Put chicken in oven'
      },
      {
        value: 'Eat chicken'
      }
    ],
    ingredients: [
      {
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
  {
    id: uuidV4(),
    name: 'Plain Apple Pai 4',
    servings: 10,
    cookTime: 15,
    instructions: [
      {
        value: 'Put salt on Chicken'
      },
      {
        value: 'Put chicken in oven'
      },
      {
        value: 'Eat chicken'
      }
    ],
    ingredients: [
      {
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  },
  {
    id: uuidV4(),
    name: 'Plain Apple Pai 5',
    servings: 10,
    cookTime: 15,
    instructions: [
      {
        value: 'Put salt on Chicken'
      },
      {
        value: 'Put chicken in oven'
      },
      {
        value: 'Eat chicken'
      }
    ],
    ingredients: [
      {
        name: 'Pork',
        amount: '2 Pounds'
      },
      {
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]
