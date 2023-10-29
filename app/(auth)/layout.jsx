import {createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// Import the children as props and display it after </nav>
export default async function AuthLayout({children}) {
  // create the Client compo and add the cookie as argument
  const supabase = createServerComponentClient({cookies})
  const { data } = await supabase.auth.getSession()

// Here`s the opposite, if user is logd in, redirect to home page
  if(data.session){
    redirect('/')
  }
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
