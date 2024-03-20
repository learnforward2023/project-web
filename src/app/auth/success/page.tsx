'use client'
import { PrimaryLayout } from '@/components/Layouts/PrimaryLayout'
import { TOGETHER_TOKEN } from '@/constants/constants'
import { useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

export default function Success() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  React.useEffect(() => {
    if (token) {
      localStorage.setItem(TOGETHER_TOKEN, JSON.stringify(token))
      router.push('/')
    }
  }, [token])

  return (
    <PrimaryLayout></PrimaryLayout>
  )
}
