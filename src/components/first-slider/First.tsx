import Slogan from '../components/../first-slider/Slogan'
import ContainerSlogans from '../../components/first-slider/ContainerSlogans'
import Illustration from '../../components/first-slider/Illustration'

//intersection
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
const FirstSlider = () => {
  const screenSmall = window.innerWidth < 768
  return (
    <section className=' min:h-screen md:h-screen flex flex-col md:items-center '>
      <div className='h-[90vh] flex justify-center items-center  md-h:1/2 md:flex-row md:justify-around md:items-center md:gap-12'>
        <Slogan />
        <Illustration />
      </div>

      {screenSmall ? (
        <InView className='h-screen border-t-4' threshold={0.25}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContainerSlogans />
            </motion.div>
          )}
        </InView>
      ) : (
        <ContainerSlogans />
      )}
    </section>
  )
}

export default FirstSlider
