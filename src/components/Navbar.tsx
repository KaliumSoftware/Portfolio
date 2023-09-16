//assets
import logoWhite from '../assets/logos/Logo_yellow_pixel_perfect-png-white.png'
import logoDark from '../assets/logos/logo-white-nobg.png'
import { BsSunFill } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'
import { Theme } from '../utils/Types'
//hooks

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
  Link,
} from '@nextui-org/react'

const goTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
export default function Nav({ firstObserver, secondObserver, thirdObserver }) {
  const location = useLocation()
  const dispatch = useDispatch()
  const theme = useSelector((state: { theme: Theme }) => state.theme)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const colorLink =
    theme === 'dark'
      ? scrolled
        ? 'text-black'
        : 'text-white'
      : scrolled
      ? 'text-white'
      : 'text-black'

  const colorLinkHover = firstObserver
    ? 'hover:text-yellowGamer'
    : secondObserver
    ? 'hover:text-yellowGamer'
    : thirdObserver
    ? 'hover:text-pink-400'
    : 'hover:text-yellowGamer'
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
        theme === 'dark'
          ? scrolled
            ? 'fixed bg-white/50 bg-opacity-50 transition-colors'
            : 'fixed bg-black'
          : scrolled
          ? 'fixed bg-black bg-opacity-50 transition-colors'
          : 'fixed bg-white'
      }
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          {location.pathname === '/' ? (
            <button onClick={goTop}>
              <img
                className='w-24'
                src={
                  theme === 'dark'
                    ? scrolled
                      ? logoDark
                      : logoWhite
                    : scrolled
                    ? logoWhite
                    : logoDark
                }
                alt='Kalium'
              />
            </button>
          ) : (
            <Link className={`${colorLinkHover} font-bold`} href='/'>
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
            <Link
              className={`${colorLink} ${colorLinkHover} font-bold`}
              href='/services'
              aria-current='page'
            >
              Services
            </Link>
          ) : (
            <Link
              className={`${colorLink} ${colorLinkHover} font-bold`}
              href='/services'
              aria-current='page'
            >
              Services
            </Link>
          )}
        </NavbarItem>
        <NavbarItem>
          {location.pathname === '/projects' ? (
            <Link
              className={`${colorLink} ${colorLinkHover} font-bold`}
              href='/projects'
              aria-current='page'
            >
              Projects
            </Link>
          ) : (
            <Link
              className={`${colorLink} ${colorLinkHover} font-bold`}
              href='/projects'
              aria-current='page'
            >
              Projects
            </Link>
          )}
        </NavbarItem>

        <NavbarItem isActive>
          {location.pathname === '/about' ? (
            <Link
              className={`${colorLink} ${colorLinkHover} font-bold`}
              href='/about'
              aria-current='page'
            >
              About Us
            </Link>
          ) : (
            <Link
              className={`${colorLink} ${colorLinkHover} font-bold`}
              href='/about'
              aria-current='page'
            >
              About Us
            </Link>
          )}
        </NavbarItem>
        <NavbarItem isActive>
          {location.pathname === '/team' ? (
            <Link
              className={`${colorLink} ${colorLinkHover} font-bold`}
              href='/team'
              aria-current='page'
            >
              Kalium Team
            </Link>
          ) : (
            <Link
              className={`${colorLink} ${colorLinkHover} font-bold`}
              href='/team'
              aria-current='page'
            >
              Kalium Team
            </Link>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='sm:flex gap-4' justify='end'>
        <NavbarItem>
          <Button className='hidden sm:inline-block text-black bg-yellowGamer'>
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
              <BsSunFill color={scrolled ? 'black' : 'white'} size={24} />
            ) : (
              <BsFillMoonFill color={scrolled ? 'white' : 'black'} size={24} />
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
              className={`${colorLink} ${colorLinkHover} font-bold`}
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
