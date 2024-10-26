import React from 'react'
import '../../../globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Header from './header'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={cn(inter.className, 'dark mx-auto max-w-[1200px] antialiased')}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default Layout
