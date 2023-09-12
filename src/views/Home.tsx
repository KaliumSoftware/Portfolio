import SectionIllustration from '../components/home-sections/SectionIllustration'
import SectionSlogan from '../components/home-sections/SectionSlogan'

function Home() {
  return (
    <div className='py-8 min-h-[90vh] flex items-start md:items-center '>
      <main className=' md:pt-0 flex flex-col justify-center items-center  md:flex-row md:justify-around md:items-center md:gap-12'>
        <SectionSlogan />
        <SectionIllustration />
      </main>
    </div>
  )
}

export default Home
