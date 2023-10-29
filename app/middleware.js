import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

// takes a request obj - like handler - contains info bout request
export default async function middleware() {
  // add .next on the response, store it in a const
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  //   refreshes the session if expired
  await supabase.auth.getSession();
  return res;
}
