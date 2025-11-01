import React from 'react'
import NavBar from '@/components/navbar'

const RootLayout = ({ children } : Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
        <NavBar />
        {children}
    </main>
  )
}

export default RootLayout
