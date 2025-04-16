import Navbar from './components/Navbar'
import RecipeEditor from './components/RecipeEditor'
import RecipeList from './components/RecipeList'

const App = () => {
  return (
    <div className='flex flex-col gap-3 w-full'>
      <Navbar />
      <div className='flex flex-row justify-between gap-3 px-6 w-full max-w-[1400px] mx-auto bg-red-200 mb-12'>
        <RecipeList />
        <RecipeEditor />
      </div>
    </div>
  )
}
export default App
