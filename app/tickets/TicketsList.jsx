import React from "react"
// by standard all components are servers
// server components we can declare as asysnc
// and use the fetch api directly

// to fetch the data we create a function outside
// its coming from json server
async function getTickets(){
    // we can add a 2nd argument OBJECT, for revalidation after a certain time
    const response = await fetch('http://localhost:4000/tickets', {
        next:{
            // after 30sec, itll fetch again
            // setting to 0 the data will never be cached
            revalidate: 0
        }
    })

    // grab the data from the response
    // returns a promise so we have to await it
    return response.json()
}

export default async function TicketsList() {
    // we call it down here, since its a promise we need await
    const tickets = await getTickets()

  return (
    <>
    {/* we do a map method, single ticket as argument and use the key=id to give */}
    {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            {/* we use the slice method, basically 200chars */}
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className="{`pill ${tickets.priority}`}">
                {ticket.priority} priority
            </div>
        </div>
    ))}
    {tickets.length} === 0 && (
        <p className="text-center">There are no open tickets</p>
    )
    </>
  )
}

// steps:
// Fetch data
//Return the data 
// use the function to get the ticket data
// use map method to view it on the browser
// we import the TicketList to the page.jsx
// revalidate after a certain time