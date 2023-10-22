// This is to make a new page, with a form on it to add new tickets

import React from 'react'
import CreateForm from './CreateForm'

export default function CreateTicket() {
  return (
   <main>
    <h2 className='text-primary text-center'>Add new Ticket</h2>
    {/* Impot CreateForm down here */}
    <CreateForm />
   </main>
  )
}
