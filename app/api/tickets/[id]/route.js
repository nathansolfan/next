import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// we dont need the previous code - its on OLDCODE
// 2nd argu is an object and has params on it, which contain the ID
export async function DELETE(_, { params }) {
  // get ID from params and store in a const
  const id = params.id;
  // supa instance, server compo = cookies
  const supabase = createRouteHandlerClient({ cookies });

  // Can use the supabase instance to delete
  const { error } = await supabase
    .from("ticketstest")
    .delete()
    // delete where a particular condition matches using .eq('id')
    .eq("id", id);
  // after that return a response in json and error if there is one
  return NextResponse.json({ error });
}
