// api/tickets
// to fetch data from client component we need this different.

// export a function, async cause we making a fetch request inside this
// must e called GET
import { NextResponse } from "next/server";

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
