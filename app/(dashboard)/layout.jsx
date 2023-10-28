import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// components
import Navbar from '../components/Navbar'

// use the special functions - createRouterHandlerClient
export default async function DashboardLayout({ children }) {

// we back to server component, () to invoke and import at the top
// need to add the cookies and import
const supabase = createServerComponentClient( {cookies})
  // extract data from the supabase.auth and .getSession() method
  // pass it as a prop - remember to add await
const { data } = await supabase.auth.getSession() 

  return (
    <>
    {/* get it as a prop user={} */}
    <Navbar user={data.session.user }/>
    {children}

    </>
  )
}
