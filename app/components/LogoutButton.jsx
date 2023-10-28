// first step is to declare client compo
"use client"

import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


export default function LogoutButton() {
    const router = useRouter()

    const handleLogout = async () => {
    // create a function for onClick - define it client comp
    const supabase = createClientComponentClient()
    // signout and error as resp, add await
    const { error } = await supabase.auth.signOut()
    // if no error sends to login page
    if(!error){
        router.push('/login')
    }
}
  return (    
    // add onClick event
    <button className='btn-primary' onClick={handleLogout}>
        Logout
    </button>
    
  )
}
