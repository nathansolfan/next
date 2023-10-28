"use client"

// Import this function that log in/out - sign - interact with db
// It works by using cookie transfer auth info between our app and supa
// This function creates Client Component - access directly on the browser
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"

import AuthForm from '../AuthForm'
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Signup() {
  // use router to redirect user  
const router = useRouter()
// create error state to display
// no need to worry about conflict
  const [error, setError] = useState('')

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()

    // invoke and store in a var
    const supabase = createClientComponentClient()
    // try to sign up - .auth to access it - .signUp() takes an object as argument
    // pass email/password of user
    // pass options object - emailRedirectTo, when new user signs up supa sends an email to verify

    // to grab errors OBJECT from .auth
    const {error}= await supabase.auth.signUp({
      email,
      password,
      // options is an object
      options:{
        // url to API endpoint - /api.auth/callback will be called when the user click on the verif email
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })
    // Check for the error 
    if(error){
      // if error - then change the state to error
      // and .message bc error is a OBJECT
      setError(error.message)
    }
    if(!error){
      // if no error - redirect user to page with message that says they have to verify email
      router.push('/verify')
    }
  }

  return (
    <main>
      <h2>Sign up</h2>
      {/* get the handleSubmit as use it as prop */}
      <AuthForm handleSubmit={handleSubmit}/>
      {/* output error */}
      {error && (
        <div className="error">{error}</div>
      ) }
    </main>
  )
}
