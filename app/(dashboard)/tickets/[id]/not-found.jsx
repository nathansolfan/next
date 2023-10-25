import Link from 'next/link'
import React from 'react'

// [...] means that its dynamic. DOTS mean it can matches with many routes
export default function NotFound() {
  return (
    // text-center is a tailwind class
    <main className='text-center'>
        <h2 className='text-3x1'>THIS IS A SPECIFIC ERROR instead of 404</h2>
        <p>We couldnt find the page</p>
        {/* we link to dashboard inside a <p/> */}
        <p> <Link href="/">Dashboard</Link> </p>

    </main>
  )
}
