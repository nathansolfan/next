import Link from "next/link"
import {createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'



// by standard all components are servers
// server components we can declare as asysnc
// and use the fetch api directly

// to fetch the data we create a function outside
// its coming from json server
async function getTickets(){
  const supabase = createServerComponentClient({cookies})
  const {data, error} = await supabase.from('ticketstest')
  // select from tickets
  .select()

  if(error){
    console.log(error.message)
  }
  return data
}    


// add async
export default async function TicketsList() {
    // we call it down here, since its a promise we need await
    const tickets = await getTickets()

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