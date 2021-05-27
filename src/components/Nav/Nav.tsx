import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '../UI'
import { MobileNav } from './MobileNav'
import { NavType } from '@/utils/types'
import useWindowSize from '@/hooks/useWindowSize'
import useCtxNav from '@/hooks/useCtxNav'

export const Nav: FC = () => {
  const size = useWindowSize()
  const [nav, setNav] = useCtxNav()
  const [isOpen, setisOpen] = useState<boolean>(false)

  const navigation: NavType[] = ['home', 'projects', 'blogs', 'contacts']

  const navHandler = (_tab: NavType) => {
    setNav(_tab)
    size.width <= 768 && setisOpen(false)
  }

  return (
    <nav className="nav my-container">
      <Link href="/">
        <button aria-label="logo" onClick={() => navHandler('home')}>
          <Logo />
        </button>
      </Link>
      <div className="flex justify-between items-center">
        {size.width <= 768 ? (
          <AnimatePresence>
            {isOpen && (
              <MobileNav
                navigation={navigation}
                where={nav}
                navHandler={navHandler}
              />
            )}
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 25, opacity: 0 }}
                className="font-bold flex gap-10 text-xl mr-2"
              >
                {navigation.map((_nav, index) => (
                  <li
                    key={index}
                    className={`uppercase hover:text-custom transition duration-500 ${
                      nav === _nav && 'text-custom'
                    }`}
                  >
                    <Link key={index} href={_nav === 'home' ? '/' : `/${_nav}`}>
                      <a onClick={() => navHandler(_nav)}>{_nav}</a>
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        )}

        <div
          id="nav-icon4"
          className={`${size.width <= 768 && 'ml-auto'} ${isOpen && 'open-n'}`}
          onClick={() => setisOpen(!isOpen)}
        >
          <span
            className={
              !isOpen
                ? `bg-custom-offwhite`
                : `bg-custom` + ' transition-colors duration-500'
            }
          ></span>
          <span
            className={
              !isOpen
                ? `bg-custom-offwhite`
                : `bg-custom` + ' transition-colors duration-500'
            }
          ></span>
          <span
            className={
              !isOpen
                ? `bg-custom-offwhite`
                : `bg-custom` + ' transition-colors duration-500'
            }
          ></span>
        </div>
      </div>
    </nav>
  )
}

export const NavFooter = () => {
  const [, setNav] = useCtxNav()

  return (
    <nav className="text-2xl sm:text-4xl pt-10">
      <ul className="flex space-x-8">
        <li className="nav-item-footer nav-footer">
          <a
            rel="noreferrer"
            href="https://github.com/iMervinC"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li className="nav-item-footer nav-footer">
          <Link href="/projects">
            <a onClick={() => setNav('projects')}>Projects</a>
          </Link>
        </li>
        <li className="nav-item-footer nav-footer">
          <a rel="noreferrer" href="/ItormaMervinChistianT-Resume.pdf" download>
            Resumé
          </a>
        </li>
      </ul>
    </nav>
  )
}
