import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './logo.png'
import LogoutButton from './LogoutButton'
// from dashboard/layout we get the user prop and output it at the bottom
export default function Navbar( {user}) {
  return (
    <nav>
      {/* 1 - we added the logo.png and now we import it on <Image/> */}
      <Image
      src={Logo}
      alt='Logo picture'
      // we set a width bc the pic is big
      width={75}
      // quality = default is 70or80 
      quality={100}
      // look at the source of the img and while it a blur while the image loads
      placeholder='blur'
      />
    <h1>Nathan Ferreira`s Portfolio</h1>
     {/* <Link/> has more options that <a/>  , we import it by typing import Li*/}
     <Link href="/">Home</Link>
     <Link href="/tickets">Tickets</Link>
     <Link href="/tickets/create">Create</Link>
     <Link href="/login">Login</Link>

     {/* output here the user prop */}
     {user && <span>Hello, {user.email}</span>}

     {/* add btn to logout, needs to be a client, which will redirect once logout */}
     <LogoutButton/>
    
     </nav>
  )
}
