import { useState, useMemo, createContext, useContext, FC } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { NavType } from '@/utils/types'

type NavContext = [NavType, Dispatch<SetStateAction<NavType>>]

const navContext = createContext<NavContext>(null)

export const NavProvider: FC = ({ children }) => {
  const [nav, setNav] = useState<NavType>('home')

  const navValue = useMemo<NavContext>(() => [nav, setNav], [nav])

  return <navContext.Provider value={navValue}>{children}</navContext.Provider>
}

export default function useCtxNav() {
  return useContext(navContext)
}
