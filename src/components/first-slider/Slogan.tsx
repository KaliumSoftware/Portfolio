import { useSelector } from 'react-redux'
import { Theme } from '../../utils/Types'
import { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import classNames from 'classnames'
function Slogan() {
  const theme: string = useSelector((state: { theme: Theme }) => state.theme)
  const [turnOn, setTurnOn] = useState(false)
  const smallScreen = window.innerWidth < 768

  const switchTurnOn = () => {
    setTimeout(() => {
      setTurnOn(true)
    }, 500)
    setTimeout(() => {
      setTurnOn(false)
    }, 1500)
    setTimeout(() => {
      setTurnOn(true)
    }, 2000)
    setTimeout(() => {
      setTurnOn(false)
    }, 2100)
    setTimeout(() => {
      setTurnOn(true)
    }, 2200)
    setTimeout(() => {
      setTurnOn(false)
    }, 2500)
    setTimeout(() => {
      setTurnOn(true)
    }, 2800)
  }

  useEffect(() => {
    if (smallScreen) setTurnOn(true)
    if (!smallScreen) switchTurnOn()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* text-transparent bg-clip-text bg-gradient-to-t from-[#FDF119] to-[#A39C14] */
  return (
    <div
      className={
        'flex flex-col justify-center items-center md:h-1/2 md:w-1/3 gap-8'
      }
    >
      <h3
        className={
          theme === 'dark'
            ? turnOn
              ? classNames(
                  'opacity-100',
                  ' text-white text-center md:text-start px-2 font-extrabold text-4xl lg:text-5xl',
                )
              : classNames(
                  classNames(
                    'opacity-50',
                    ' text-white text-center md:text-start px-2 font-extrabold text-4xl lg:text-5xl',
                  ),
                )
            : 'text-black text-center md:text-start px-2 font-extrabold text-4xl lg:text-5xl'
        }
      >
        Donde la <span className='text-[#f2c510]'>creatividad</span> se conecta
        con la <span className='text-[#f2c510]'>tecnología</span>
      </h3>
      <div className='w-full flex flex-col items-center gap-4 px-4'>
        <Button
          className={
            turnOn
              ? classNames(
                  'opacity-100',
                  'text-black font-bold text-md bg-[#f2c510] w-full md:w-[150px] rounded-full',
                )
              : classNames(
                  'opacity-50',
                  'text-black font-bold text-md bg-[#f2c510] w-full md:w-[150px] rounded-full',
                )
          }
        >
          Our Proyects
        </Button>
        <Button
          className={
            theme === 'dark'
              ? classNames(
                  turnOn
                    ? 'opacity-100 w-full md:w-[150px] font-bold text-md bg-black border rounded-full'
                    : 'opacity-50 w-full md:w-[150px] font-bold text-md bg-black border rounded-full',
                )
              : 'w-full md:w-[150px] bg-white border-2 font-bold text-md border-black rounded-full'
          }
        >
          Contact us
        </Button>
      </div>
    </div>
  )
}

export default Slogan
