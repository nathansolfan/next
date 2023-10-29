import { NextResponse } from "next/server";

// export const dynamic = "force-dynamic";

export async function GET(_, { params }) {
  // 1 - add {params} for parameter, gets its id, use it with ${} to grab it
  const id = params.id;
  const response = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await response.json();

  if (!response.ok) {
    // if res not ok, use NextResponse method
    // 1st argument error, 2nd is status
    return NextResponse.json({ error: "Cannt find ticket" }, { status: 404 });
  }
  return NextResponse.json(ticket, {
    status: 200,
  });
}
