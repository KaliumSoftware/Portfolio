//assets
import logoWhite from '../assets/logos/logo-black-nobg.png'
import logoDark from '../assets/logos/logo-white-nobg.png'
import { BsSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import { Theme } from '../utils/Types'
//hooks
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/actions/actions.js'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarItem,
  Button,
} from '@nextui-org/react'

const goTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Nav() {
  const location = useLocation()

  const dispatch = useDispatch()
  const theme = useSelector((state: { theme: Theme }) => state.theme)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeChange = () => {
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
  }

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About Us', href: '/about' },
    { label: 'Kalium Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <Navbar
      className={
        theme === 'dark' ? 'bg-black text-white/80' : 'bg-white text-black'
      }
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          {location.pathname === '/' ? (
            <button onClick={goTop}>
              <img
                className='w-24'
                src={theme === 'dark' ? logoWhite : logoDark}
                alt='Kalium'
              />
            </button>
          ) : (
            <Link to={'/'}>
              <img
                className='w-24'
                src={theme === 'dark' ? logoWhite : logoDark}
                alt='Kalium'
              />
            </Link>
          )}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive></NavbarItem>
        <NavbarItem>
          {location.pathname === '/services' ? (
            <Link to='/services' className='text-blue-500' aria-current='page'>
              Services
            </Link>
          ) : (
            <Link
              to='/services'
              aria-current='page'
              className='hover:text-white/60'
            >
              Services
            </Link>
          )}
        </NavbarItem>
        <NavbarItem>
          {location.pathname === '/projects' ? (
            <Link to='/projects' className='text-blue-500' aria-current='page'>
              Projects
            </Link>
          ) : (
            <Link
              to='/projects'
              aria-current='page'
              className='hover:text-white/60'
            >
              Projects
            </Link>
          )}
        </NavbarItem>

        <NavbarItem isActive>
          {location.pathname === '/about' ? (
            <Link to='/about' className='text-blue-500' aria-current='page'>
              About Us
            </Link>
          ) : (
            <Link
              to='/about'
              aria-current='page'
              className='hover:text-white/60'
            >
              About Us
            </Link>
          )}
        </NavbarItem>
        <NavbarItem isActive>
          {location.pathname === '/team' ? (
            <Link to='/team' className='text-blue-500' aria-current='page'>
              Kalium Team
            </Link>
          ) : (
            <Link
              to='/team'
              aria-current='page'
              className='hover:text-white/60'
            >
              Kalium Team
            </Link>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='sm:flex gap-4' justify='end'>
        <NavbarItem>
          <Button className='hidden sm:inline-block text-white bg-gradient-to-t from-[#5d2671] to-pink-800'>
            Contact
          </Button>
        </NavbarItem>
        <NavbarItem>
          <button
            onClick={handleThemeChange}
            className={
              theme === 'dark'
                ? 'text-white flex items-center'
                : 'text-black flex items-center'
            }
          >
            {theme === 'dark' ? (
              <BsSunFill size={24} />
            ) : (
              <BsFillMoonFill size={24} />
            )}
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
      />
      <NavbarMenu
        className={
          theme === 'dark'
            ? 'bg-white bg-opacity-5 text-white/80'
            : 'bg-black bg-opacity-5 text-black'
        }
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className='w-full'
              to={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
