import { createContext, useContext } from 'react'

export type UserType = {
  id: number
  email: string
  provider?: string
  name?: string
}

export const UserContext = createContext({} as UserType)
export const UserSetContext = createContext<React.Dispatch<React.SetStateAction<UserType>>>({} as React.Dispatch<React.SetStateAction<UserType>>)

export const useSetUser = () => {
  const setUser = useContext(UserSetContext)

  if (!setUser) {
    throw new Error('useSetUser must be used within a UserSetContext Provider')
  }
  return setUser
}
