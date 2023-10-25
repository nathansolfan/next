import Link from "next/link"
import React from "react"

// by standard all components are servers
// server components we can declare as asysnc
// and use the fetch api directly

// to fetch the data we create a function outside
// its coming from json server
async function getTickets(){

    // imitate a delay
    // we wait a Promise to resolve, which will take 3sec
    // we can add a 2nd argument OBJECT, for revalidation after a certain time
    const response = await fetch('http://localhost:4000/tickets',{
        next:{
            revalidate: 0
        }
    })
    // grab the data from the response
    // returns a promise so we have to await it
    return response.json()}    

// add async
export default async function TicketsList() {
    // we call it down here, since its a promise we need await
    const tickets = await getTickets()
    console.log(tickets)

  return (
    <>
    {/* we do a map method, single ticket as argument and use the key=id to give */}
    {tickets.map((ticket) => (
                // Use parentheses to return JSX
                <div key={ticket.id} className="card my-5">
                    {/* we import link and give it a h ref - `` template string  */}
                    <Link href={`/tickets/${ticket.id}`}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0, 200)}...</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                    </Link>
                </div>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets!</p>
            )}
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