import { Button } from './Button'

const Navbar = () => {
  return (
    <div className='sticky bg-white top-0 h-24 z-50 w-full'>
      <div className='max-w-[1400px] flex items-center justify-between px-6 h-full mx-auto'>
        <div></div>
        <h1 className='text-6xl text-center font-bold text-emerald-800 whitespace-nowrap'>
          Recipes 2025
        </h1>
        <Button className=''>Add Recipe</Button>
      </div>
    </div>
  )
}
export default Navbar
