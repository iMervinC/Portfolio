import {
  useState,
  useMemo,
  createContext,
  useContext,
  FC,
  Dispatch,
  SetStateAction,
} from 'react'
import { NavType } from '@/utils/types'

type NavContext = [NavType, Dispatch<SetStateAction<NavType>>]

const navContext = createContext<NavContext>(null)

export const NavProvider: FC = ({ children }) => {
  const [nav, setNav] = useState<NavType>('home')

  const navValue = useMemo<[NavType, Dispatch<SetStateAction<NavType>>]>(
    () => [nav, setNav],
    [nav]
  )

  return <navContext.Provider value={navValue}>{children}</navContext.Provider>
}

const useCtxNav = () => {
  return useContext(navContext)
}

export default useCtxNav
