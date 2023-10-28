"use client"
import React from 'react'
import AuthForm from '../AuthForm'


export default function Login() {
  // Import the <AuthForm/>
  // The submission of the form - Create a handler function differently and pass them as props to the form

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    console.log(email, password)
  }


  return (
    // Pass the handleSubmit as prop in the <AuthForm/>
    <main>
      <h2>Login</h2>            
      <AuthForm handleSubmit={handleSubmit}/>
    </main>
  )
}