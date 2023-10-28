// since its not a server component, we have to add this line of code to make it client
"use client"
import React, { useState } from 'react'

// Import useState 
// Get the handleSubmit() prop and use it on the AuthForm()
export default function AuthForm( {handleSubmit} ) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    // The form itself - label and span - add btn at end
    // Again (e) is the event from the form submission
    <form onSubmit={(e) => handleSubmit(e, email, password )}>
        <label>
            <span>Email:</span>
            <input
            type="text"
            // the onChange={ has a arrow function}
            // = () => setEmail()
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            />
        </label>
        {/* Password Form */}
        <label>
            <span>Password:</span>
            <input 
            type="password"
            onChange={(e)=> setPassword(e.target.value)} 
            value={password}
            required
            />
        </label>
        {/* When pressed we have access to the Event (e) on the onSubmit() */}
        <button className='btn-primary'>Submit</button>
    </form>
  )
}
