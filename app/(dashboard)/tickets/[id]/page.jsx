import { notFound } from 'next/navigation'
import React from 'react'

// for any request for new tickets that dont have pages made for them, nextjs will try to fetch it
// for ths to work we add the notFound() 
// 
export const dynamicParams = true

// static rendering the pages
export async function generateStaticParams() {
    const response = await fetch('http://localhost:4000/tickets')

const tickets = await response.json()
// we map though the response (tickets) and prerender the ids
return tickets.map((ticket)=> ({
    id: ticket.id
}))
}

// we fetch the single ID
async function getTicket(id){  
      // imitate a delay
    // we wait a Promise to resolve, which will take 3sec
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // this is similar to TicketsList.jsx, but we include the ${id}
    const response = await fetch(`http://localhost:4000/tickets/${id}`, {
        next:{
            revalidate: 60
        }
    })
// inside the getTicket() we add the notFound
    if(!response.ok){
        notFound()
    }

    // grab the data from the response
    // returns a promise so we have to await it
    return response.json()
}

// here we create a function TicketDetails and use the
// use name the page [ID] so nextjs knows its dynamic
// it`ll be rendered when we go to tickets/id and will always show this page
// inside we get access to ID, doing so using params, we get it automatically from PROPS
// the name of the folder [FOLDER / ID] get access to its params
export default async function TicketDetails({params}) {
    // const id = params.id
    const ticket = await getTicket(params.id)

  return (  
    // http://localhost:3000/tickets/1 or any number, even a word
     <main>
        {/* down below we display the info to the page */}
        <nav>
          <h2>Ticket Details</h2>
        </nav>
        <div className="card">
          <h3>{ticket.title}</h3>
          <small>Created by {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      </main>
  )
}
