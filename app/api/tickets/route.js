import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// the previous code is located at oldroute.js - that is related to json-server --watch --port 4000 ./_data/db.json

export const dynamic = "force-dynamic";

export async function POST(request) {
  const ticket = await request.json();

  //Get supabase instance - to interact with db
  const supabase = createRouteHandlerClient({ cookies });

  //Get the user session - we need that to add the email
  // use supa get current session - Used that before
  // from data: { get the session}
  const {
    data: { session },
  } = await supabase.auth.getSession();

  //Insert data from respose - select the table name w/ .from()
  const { data, error } = await supabase
    .from("tickets")
    // .insert add the objects
    .insert({
      // ...tickets to select all and email: the current user
      ...ticket,
      user_email: session.user.email,
    })
    // select it back and returns it
    .select()
    // usually it comes back as array and we get it as json object
    .single();
  // it all comes back as data, which is added on the const {} = ...from('tickets)

  // This step get the response object as json
  if (error) {
    return NextResponse.json({ data, error });
  }
}
