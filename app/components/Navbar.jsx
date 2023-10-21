import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './logo.png'

export default function Navbar() {
  return (
    <nav>
      {/* 1 - we added the logo.png and now we import it on <Image/> */}
      <Image
      src={Logo}
      alt='Logo picture'
      // we set a width bc the pic is big
      width={70}
      // quality = default is 70or80 
      quality={100}
      // look at the source of the img and while it a blur while the image loads
      placeholder='blur'
      />
    <h1>Next JS My project</h1>
     {/* <Link/> has more options that <a/>  , we import it by typing import Li*/}
     <Link href="/">Home</Link>
     <Link href="/news">About me</Link>
     </nav>
  )
}
