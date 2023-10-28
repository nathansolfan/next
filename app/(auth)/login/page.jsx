"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import AuthForm from '../AuthForm'

export default function Login() {
// create states
const router = useRouter()
const [error, setError] = useState('')

  // Import the <AuthForm/>
  // The submission of the form - Create a handler function differently and pass them as props to the form

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    // if there is a error, this will clear it out
    setError('')
  
  // log in with Supa and createCliente
  const supabase = createClientComponentClient()
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  // if error we setIt
  if(error){
    setError(error.message)
  }
  if(!error){
    router.push('/')
  }  
}


  return (
    // Pass the handleSubmit as prop in the <AuthForm/>
    <main>
      <h2>Login</h2>  
      {error && 
      <div className='errr'>{error}</div>}          
      <AuthForm handleSubmit={handleSubmit}/>
    </main>
  )
}