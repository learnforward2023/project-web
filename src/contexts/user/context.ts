import { createContext } from 'react'

export type UserType = {
  id: number
  email: string
  provider?: string
  name?: string
}

export const UserContext = createContext(null as unknown as [UserType, React.Dispatch<React.SetStateAction<UserType>>])
