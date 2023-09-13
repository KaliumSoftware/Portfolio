//sliders
import FirstSlider from '../components/first-slider/First'
import ServicesSlider from '../components/services-slider/ServicesSlider'
//components
import Navbar from '../components/Navbar'

//intersection

function Home() {
  return (
    <div className='flex flex-col items-start md:items-center '>
      <header className='w-full'>
        <Navbar />
      </header>
      <main>
        <FirstSlider />
        <ServicesSlider />
      </main>
    </div>
  )
}

export default Home
