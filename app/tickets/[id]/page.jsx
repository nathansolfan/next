import React from 'react'

// we fetch the single ID
async function getTicket(id){
   
    const response = await fetch('http://localhost:4000/tickets' + id, {
        next:{
            revalidate: 60
        }
    })

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
    const ticket = await getTicket(params.id)
  return (
    // http://localhost:3000/tickets/1 or any number, even a word
    <main>
        <nav>
            <h2>Ticket Details:</h2>
            </nav>
            <div className='card'>
            {/* we display here the title, inside the {}  */}
            <h3>{ticket.title}</h3>
            <small>Created by: {ticket.user_email}</small>
            <p>{ticket.body}</p>
            {/* display priority, ike TicketList.jsx */}
            <div className="{`pill ${ticket.priority}`}">
                {ticket.priority} priority
            </div>
            </div>        
    </main>
  )
}
