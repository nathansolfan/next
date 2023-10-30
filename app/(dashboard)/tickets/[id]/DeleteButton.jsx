"use client"
// Import few things

// Usestate for a IsLoading 
import { useState } from "react"
import { TiDelete } from "react-icons/ti"


// pass the ID as prop - I have access from the page || const ticket = await getTicket(params.id)

export default function DeleteButton({id}) {
    // isLoading is false to start with
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () => {
        setIsLoading(true)
        console.log('deleting id -', id)
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
