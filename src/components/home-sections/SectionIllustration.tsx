import illustration_on from '../../assets/illustration-yellow.png'
import illustration_off from '../../assets/illustration-yellow_off.png'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Theme } from '../../utils/Types'
function SectionIllustration() {
  const theme: string = useSelector((state: { theme: Theme }) => state.theme)
  const [turnOn, setTurnOn] = useState(false)

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
    <div className='hidden md:flex w-1/2 md:w-1/3  pt-8 md:pb-24  justify-center items-center'>
      {theme === 'dark' ? (
        <img
          className='w-full'
          src={turnOn ? illustration_on : illustration_off}
          alt=''
        />
      ) : (
        <img className='w-full' src={illustration_off} alt='' />
      )}
    </div>
  )
}

export default SectionIllustration
