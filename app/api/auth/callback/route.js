// This function will handles the redirect to -         emailRedirectTo: `${location.origin}/api.auth/callback`

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  // create a object - have access to request object property
  const url = new URL(request.url);
  // access to a code from supa - searchParameters for the code
  const code = url.searchParams.get("code");
  console.log("Code received:", code);

  // check code to start new session and start app
  if (code) {
    // communicate with supa - need to use instance object
    // this method uses to connect but has no access to cookies
    // import cookies and pass it as the object
    const supabase = createRouteHandlerClient({ cookies });
    // .auth to access auth service. the method reaches to supa and returns a new user session using cookie
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("Error exchanging code for session:", error);
    }
  }

  // now the user is tech log in
  console.log("Redirecting to:", url.origin);
  return NextResponse.redirect(url.origin);
}
