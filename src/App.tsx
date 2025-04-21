import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import RecipeSection from './components/RecipeSection'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <div className='flex flex-col justify-between gap-3 w-full min-h-[100dvh]'>
      <Navbar />
      <RecipeSection />
      <Footer />
      <Toaster position='top-center' />
    </div>
  )
}
export default App
