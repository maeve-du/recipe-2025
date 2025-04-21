import PageContainer from './ui/PageContainer'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <PageContainer bottom='bottom-0' height='h-8' background='bg-white/80'>
      <div className='text-center w-full text-sm'>© {currentYear} Maeve Du</div>
    </PageContainer>
  )
}
export default Footer
