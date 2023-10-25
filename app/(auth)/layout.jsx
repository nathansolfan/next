import Link from 'next/link'
import React from 'react'

// Import the children as props and display it after </nav>
export default function AuthLayout({children}) {
  return (
    <>
    <nav>
        <h1>Nathan Next JS</h1>
    <Link href="/signup">Sign up</Link>
    <Link href="/login">Login</Link>
    </nav>
    {children}
    </>
  )
}
