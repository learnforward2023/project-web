import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ConfigProvider, ThemeConfig } from 'antd'

const roboto = localFont({ src: '../fonts/Roboto-Regular.ttf' })

const theme: ThemeConfig = {
  token: {
    fontSize: 14,
    colorPrimary: '#3c82f7'
  }
}

import './globals.scss'

export const metadata: Metadata = {
  title: process.env.APP_TITLE,
  description: 'Generated by create next app',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon.ico',
        href: '/favicon.ico'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon.ico',
        href: '/favicon.ico'
      }
    ]
  }
}

import UserProvider from '../contexts/user/provider'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ConfigProvider theme={theme}>
          <UserProvider>
            <section className="s2together">
              {children}
            </section>
          </UserProvider>

        </ConfigProvider>
      </body>
    </html>
  )
}
