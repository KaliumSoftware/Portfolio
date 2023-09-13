import illustration_on from '../../assets/illustrations/illustration-yellow.png'
import illustration_off from '../../assets/illustrations/illustration-yellow_off.png'
import illustration_Day from '../../assets/illustrations/illustration-yellow_off_day-mode.png'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Theme } from '../../utils/Types'
function Illustration() {
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
    <div className='hidden md:inline-block w-1/4'>
      {theme === 'dark' ? (
        <img
          className='w-full'
          src={turnOn ? illustration_on : illustration_off}
          alt=''
        />
      ) : (
        <img className='w-full' src={illustration_Day} alt='' />
      )}
    </div>
  )
}

export default Illustration
