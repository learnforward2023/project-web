'use client'
import React from 'react'
import { FloatButton } from 'antd'
import PrimaryHeader from '@/components/Headers/PrimaryHeader'
import HFooter from '@/components/HFooter'
import './index.scss'

interface PrimaryLayoutProps extends React.PropsWithChildren<{}> { }

export const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  return (
    <section className="PrimaryLayout">
      <PrimaryHeader />
      <section className="mx-auto flex max-w-7xl items-center justify-between lg:px-8 p-4 PrimaryLayout__Main">
        <main className="w-full">{children}</main>
        <FloatButton.BackTop />
      </section>
      <HFooter />
    </section>
  )
}
