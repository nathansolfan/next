"use client"
import { useRouter } from "next/navigation"
// Import few things

// Usestate for a IsLoading 
import { useState } from "react"
import { TiDelete } from "react-icons/ti"


// pass the ID as prop - I have access from the page || const ticket = await getTicket(params.id)

export default function DeleteButton({id}) {
    const router = useRouter()
    // isLoading is false to start with
    const [isLoading, setIsLoading] = useState(false)

// from app\api\tickets\[id]\route.js
    const handleClick = async () => {
        setIsLoading(true)
        // get ID from the params
        const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
            method: 'DELETE'
        })
        // get the response data
        const json = await response.json()

        if(json.error){
            console.log(json.error)  // change `error` to `json.error`
            setIsLoading(false)            
        }
        if(!json.error){
            // import router from next/navigation to refresh page and redirect to another page if no error
            router.refresh()
            router.push('/tickets')
        }
    }
    

  return (
   <button
//its class is a standard I created at start
   className="btn-primary"
//create function for the on click and define it upstairs
   onClick={handleClick}
//if its loading, its true so the user cant spam click
   disabled={isLoading}   
   >
    {isLoading && (
        // conditional rendering - if true
        <>
        <TiDelete/>
        Deleting
        </>
    )}
    {/* Here for the part if its not loading - this 2nd part is the start */}
    {!isLoading && (
        <>
        <TiDelete/>
        Delete Ticket
        </>
    )}
   </button>
  )
}
// 6.30m explain