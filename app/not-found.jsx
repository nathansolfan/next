import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    // text-center is a tailwind class
    <main className='text-center'>
        <h2 className='text-3x1'>There was a problem</h2>
        <p>We couldnt find the page</p>
        {/* we link to dashboard inside a <p/> */}
        <p> <Link href="/">Dashboard</Link> </p>

    </main>
  )
}
