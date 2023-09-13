import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import CardServices from './CardServices'

const services = [
  {
    title: 'Desarrollo de Aplicaciones',
    subtitle: 'Aplicaciones Web y Mobile',
    paragraph: 'Creamos aplicaciones web y mobiles para tu negocio.',
  },
  {
    title: 'Front End',
    subtitle: 'Diseño del Sitio Web',
    paragraph: 'Diseñamos tu sitio web justo como lo imaginas.',
  },
  {
    title: 'Back End',
    subtitle: 'Desarrollo de Aplicaciones',
    paragraph:
      'Diseñamos arquitecturas de micro servicios para crear soluciones con gran escalabilidad y performance, aplicando análisis automatizado de nuestro desarrollo.',
  },
  {
    title: 'Base de Datos',
    subtitle: 'Mantenimiento de Bases de Datos',
    paragraph: 'Creamos o mantenemos bases de datos para tu negocio.',
  },
]

function ServicesSlider() {
  return (
    <InView className='h-screen border-t-4' threshold={0.25}>
      {({ ref, inView }) => (
        <motion.section
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className='pt-8'
        >
          <h4 className='py-16 text-center font-semibold text-3xl'>
            Nuestros <span>Servicios</span> más solicitados
          </h4>
          <div className='flex flex-col gap-12 p-4'>
            {services.map((service, index) => (
              <CardServices
                key={index}
                title={service.title}
                subtitle={service.subtitle}
                paragraph={service.paragraph}
              />
            ))}
          </div>
        </motion.section>
      )}
    </InView>
  )
}

export default ServicesSlider
