// api/tickets
// to fetch data from client component we need this different.

// export a function, async cause we making a fetch request inside this
// must e called GET
import { NextResponse } from "next/server";

// nextjs is static by default - 1st option to make dynamic
// add ,{next: {revalidate:0}}
// to make all route handles dynamic add
export const dynamic = "force-dynamic";

export async function GET() {
  // to fetch the data from the local server
  // fetch('') - add await cause its async
  // wrap it to a a variable
  const response = await fetch("http://localhost:4000/tickets");

  const tickets = await response.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}

// POST request that will be made on POSTMAN
// We send the data and receive it on the parameters
// from request can request the json of it

export async function POST(request) {
  const ticket = await request.json();

  const response = await fetch("http://localhost:4000/tickets", {
    method: "POST",
    // here the data we sending is json
    headers: { "Content-Type": "application/json" },
    // here is the actually data and we stringify it to JSON
    body: JSON.stringify(ticket),
  });
  // to get the response of the new ticket sent from POSTMAN with its new ID aswell
  const newTicket = await response.json();

  return NextResponse.json(newTicket, {
    status: 201,
  });
}
