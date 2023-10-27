// Steps - when user signs up sends request to supabase - send an email that has to click on to verify - redirect to this page to let user know that - then when user click on the link - it goes to supabase and relocates to the /api/auth/callback - and send a code with a redirect and grab it

export default function Verify() {
  return (
    <main className='text-center'>
        <h2>Thanks for registering</h2>
        <p>Before you can LOG IN - verify your email.</p>
    </main>
   
  )
}
