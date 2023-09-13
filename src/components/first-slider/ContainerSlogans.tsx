//hooks
import { Theme } from '../../utils/Types'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
//icons
import { BsGear } from 'react-icons/bs'
import { PiDeviceMobileSpeaker } from 'react-icons/pi'
import { RxUpdate } from 'react-icons/rx'

function ContainerSlogans() {
  //global state
  const theme: string = useSelector((state: { theme: Theme }) => state.theme)
  //local state
  const [turnOn, setTurnOn] = useState(false)
  //small screens media
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
    switchTurnOn()
  }, [])

  return (
    <div className='w-full flex justify-center '>
      <div className='md:w-[70%] py-16 grid grid-cols-1 md:grid-cols-4 gap-8 px-8 justify-center'>
        <Card
          className={
            smallScreen
              ? ' p-3 z-10 pb-0'
              : turnOn
              ? 'opacity-100 p-3 z-10 pb-0'
              : 'opacity-50 p-3 z-10 pb-0'
          }
        >
          <CardHeader className='gap-2'>
            <div
              className={
                theme === 'dark'
                  ? 'flex justify-center p-2 rounded-full items-center bg-gradient-to-r from-[#FDF119]/40 to-[#A39C14]/40 text-[#FDF119]'
                  : 'flex justify-center p-2 rounded-full items-center bg-gradient-to-r from-[#FDF119]/60 to-[#A39C14]/60 text-black'
              }
            >
              <BsGear size={24} />
            </div>
            <h5 className='font-bold'>Diseño de Calidad</h5>
          </CardHeader>
          <CardBody>
            <p>
              Utilizamos las ultimas tecnologías al crear la página ideal para
              tu negocio
            </p>
          </CardBody>
        </Card>
        <Card
          className={
            smallScreen
              ? ' p-3 z-10 pb-0'
              : turnOn
              ? 'opacity-100 p-3 z-10 pb-0'
              : 'opacity-50 p-3 z-10 pb-0'
          }
        >
          <CardHeader className='gap-2'>
            <div
              className={
                theme === 'dark'
                  ? 'flex justify-center p-2 rounded-full items-center bg-gradient-to-r from-[#FDF119]/40 to-[#A39C14]/40 text-[#FDF119]'
                  : 'flex justify-center p-2 rounded-full items-center bg-gradient-to-r from-[#FDF119] to-[#A39C14] text-black'
              }
            >
              <PiDeviceMobileSpeaker size={24} />
            </div>
            <h5 className='font-bold'>Experiencia móvil</h5>
          </CardHeader>
          <CardBody>
            <p>
              Tu sitio web se adaptará a cualquier dispositivo para dar la mejor
              experiencia a tus clientes.
            </p>
          </CardBody>
        </Card>
        <Card
          className={
            smallScreen
              ? ' p-3 z-10 pb-0'
              : turnOn
              ? 'opacity-100 p-3 z-10 pb-0'
              : 'opacity-50 p-3 z-10 pb-0'
          }
        >
          <CardHeader className='gap-2'>
            <div
              className={
                theme === 'dark'
                  ? 'flex justify-center p-2 rounded-full items-center bg-gradient-to-r from-[#FDF119]/40 to-[#A39C14]/40 text-[#FDF119]'
                  : 'flex justify-center p-2 rounded-full items-center bg-gradient-to-r from-[#FDF119] to-[#A39C14] text-black'
              }
            >
              <RxUpdate size={24} />
            </div>
            <h5 className='font-bold'>Actualización constante</h5>
          </CardHeader>
          <CardBody>
            <p>Utilizamos las ultimas tecnologías para tu negocio</p>
          </CardBody>
        </Card>
        <Card
          className={
            smallScreen
              ? ' p-3 z-10 pb-0'
              : turnOn
              ? 'opacity-100 p-3 z-10 pb-0'
              : 'opacity-50 p-3 z-10 pb-0'
          }
        >
          <CardHeader className='gap-2'>
            <div
              className={
                theme === 'dark'
                  ? 'flex justify-center p-2 rounded-full items-center bg-gradient-to-r from-[#FDF119]/40 to-[#A39C14]/40 text-[#FDF119]'
                  : 'flex justify-center p-2 rounded-full items-center bg-gradient-to-r from-[#FDF119] to-[#A39C14] text-black'
              }
            >
              <BsGear size={24} />
            </div>
            <h5 className='font-bold'>Actualización constante</h5>
          </CardHeader>
          <CardBody>
            <p>Utilizamos las ultimas tecnologías para tu negocio</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default ContainerSlogans
