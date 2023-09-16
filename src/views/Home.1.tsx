import FirstSlider from '../components/first-slider/First'
import ServicesSlider from '../components/services-slider/ServicesSlider'
import Navbar from '../components/Navbar'
import { useInView } from 'react-intersection-observer'

export function Home() {
  const { ref: myRef, inView: firstObserver } = useInView()
  const { ref: myRef2, inView: secondObserver } = useInView()
  const { ref: myRef3, inView: thirdObserver } = useInView()
  return (
    <div className='flex flex-col items-start md:items-center '>
      <header className='w-full'>
        <Navbar
          firstObserver={firstObserver}
          secondObserver={secondObserver}
          thirdObserver={thirdObserver}
        />
      </header>
      <main>
        <FirstSlider myRef={myRef} />
        <ServicesSlider myRef3={myRef3} />
      </main>
    </div>
  )
}
