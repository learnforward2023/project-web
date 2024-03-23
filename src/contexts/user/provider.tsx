'use client'
import { useEffect, useState } from 'react'
import { UserContext, UserType } from './context'
import { TOGETHER_TOKEN } from '@/constants/constants'
import { jwtDecode } from 'jwt-decode'

type UserProviderProps = {
  children: React.ReactNode
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType>({ id: -1, email: '' })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(TOGETHER_TOKEN)

      if (token) {
        const userDecoded: UserType = jwtDecode(JSON.parse(token))

        setUser({
          id: userDecoded.id,
          email: userDecoded.email,
          provider: userDecoded?.provider,
          name: userDecoded?.name
        })
      }
    }
  }, [])

  return <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>
}

export default UserProvider
