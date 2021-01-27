import { FC, useState } from 'react'
import Link from 'next/link'

const Nav: FC = () => {
  const [where, setWhere] = useState<string>('home')
  const [nav, setNav] = useState<boolean>(true)

  const navigation: string[] = [
    'home',
    'about',
    'projects',
    'blogs',
    'contacts',
  ]

  const whereHandler = (tab: string) => {
    setWhere(tab)
  }

  return (
    <nav className="flex fixed justify-center text-custom-offwhite items-center contain mt-20 left-1/2 transform -translate-x-1/2">
      <img className="h-10" src="/logo.svg" alt="logo" />
      <ul className="font-bold flex gap-10 text-xl ml-auto mr-2">
        {nav &&
          navigation.map((nav, index) => (
            <Link key={index} href={nav === 'home' ? '/' : `/${nav}`}>
              <a onClick={() => whereHandler(nav)}>
                <li
                  className={`uppercase hover:text-custom transition duration-500 ${
                    nav === where && 'text-custom'
                  }`}
                >
                  {nav}
                </li>
              </a>
            </Link>
          ))}
      </ul>
      <div
        id="nav-icon4"
        className={nav && `open-n`}
        onClick={() => setNav(!nav)}
      >
        <span
          className={
            !nav
              ? `bg-custom`
              : `bg-custom-offwhite` + ' transition-colors duration-500'
          }
        ></span>
        <span
          className={
            !nav
              ? `bg-custom`
              : `bg-custom-offwhite` + ' transition-colors duration-500'
          }
        ></span>
        <span
          className={
            !nav
              ? `bg-custom`
              : `bg-custom-offwhite` + ' transition-colors duration-500'
          }
        ></span>
      </div>
    </nav>
  )
}

export default Nav
