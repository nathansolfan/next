import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
    <h1>Next JS My project</h1>
     {/* <Link/> has more options that <a/>  , we import it by typing import Li*/}
     <Link href="/">Home</Link>
     <Link href="/news">About me</Link>
     </nav>
  )
}
