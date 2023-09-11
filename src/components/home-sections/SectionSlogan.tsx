import { useSelector } from 'react-redux'
import { Button } from '@nextui-org/react'
import { Theme } from '../../utils/Types'
function SectionSlogan() {
  const theme: string = useSelector((state: { theme: Theme }) => state.theme)

  return (
    <section className='flex flex-col justify-center pb-24 gap-16 items-center min-h-[80vh]'>
      <h3
        className={
          theme === 'dark'
            ? 'text-white text-center px-2 font-extrabold text-5xl'
            : 'text-black text-center px-2 font-extrabold text-5xl'
        }
      >
        Donde la{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-t from-[#C63DF8] to-pink-600'>
          creatividad
        </span>{' '}
        se conecta con la{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-t from-[#C63DF8] to-pink-600'>
          tecnología
        </span>
      </h3>
      <div className='w-full flex flex-col items-center gap-4 px-4'>
        <Button className='w-full md:w-[150px] rounded-full' color='primary'>
          Ver Proyectos
        </Button>
        <Button
          className={
            theme === 'dark'
              ? 'w-full md:w-[150px] bg-black border rounded-full'
              : 'w-full md:w-[150px] bg-white border-2 border-black rounded-full'
          }
        >
          Contactános
        </Button>
      </div>
    </section>
  )
}

export default SectionSlogan
