import PageContainer from './ui/PageContainer'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <PageContainer bottom='bottom-0' height='h-8' background='bg-white/80'>
      <div className='text-center w-full text-sm flex justify-center gap-2'>
        <div>© {currentYear} Maeve Du</div>
        <a
          href='https://github.com/maeve-du/recipe-2025'
          target='_blank'
          aria-label='GitHub 仓库'
          className='cursor-pointer w-6 aspect-square group transition-transform'>
          <img
            src='github-fill.svg'
            alt='GitHub'
            className='h-5 opacity-55 group-hover:opacity-100 transition-all hover:scale-105'
          />
        </a>
      </div>
    </PageContainer>
  )
}
export default Footer
