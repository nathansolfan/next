"use client"
// On nextJS if there is interactivty we use Client component and not server by default
// we override it by doing "use client" on the top
// Keep the page.jsx as server components

// import Router, later we use the Router to redirect user to main page
// State because there will be input the user will add
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
    // this hook, we use to redirect the user
    const router = useRouter();    
    // the usestate has an array as value, for now empty string
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // Set up the default priority to low
    const [priority, setPriority] = useState('low');
    // its false, the idea when form is submited it changes to true and shows a loading state 
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async(e) => {
        // we place the POST request to json server to add more data
        e.preventDefault()
        setIsLoading(true)

        // object for the new ticket
        const ticket = {
            // no need the hardcore email
            title, body, priority }

        // we are sending the - 1st argment the url. 2nd is the object

        // instead of :4000/tickets which is the local server
        // Send it to the api present here
        const response = await fetch('http://localhost:3000/api/tickets', {
            method: "POST",
            // here the data we sending is json
            headers: {"Content-Type": "application/json"},
            // here is the actually data and we stringify it to JSON
            body: JSON.stringify(ticket)
        })
        
        // handle the resp, await the json I get from it
        // const json = await response.json()

        const jsondata = await res.json()
        if(jsondata.error){
            console.log(error.message)
        }
        if(jsondata.data){
            router.refresh()
            router.push('/')
        }       
        }
        // now if res ok we redirect
        // the if() will handle the resp diff 
        // if(response.status === 201){
        //     router.refresh()
        //     router.push('/tickets')
        // }

  return (
    // Create form, w-1/2 apply half the width of the page to this form from Tailwind
    // We add an onSubmit and inside we put our function that handles it
    <form onSubmit={handleSubmit} className='w-1/2'>
        {/* Add some input fields */}
        <label>
            <span>Title:</span>
            <input
            required
            type="text"          
            // onChange fires a function setTitle, which happens when event(clicked), the target which is the input and the value which is what they type. Watch it real time
            onChange={ (e) => setTitle(e.target.value)}
            // two-way data binding the value is equal to the title
            value={title}            
            />
        </label>

        {/* This for the body */}
        <label>
            <span>Body:</span>
            <textarea
            required
            // again, on change fires a arrow function
            onChange={ (e) => setBody(e.target.value)}
            value={body}
            />
        </label>

        {/* Now priority */}
        <label>
            <span>Priority</span>
            <select
            // as before, onChange fires a arrow func and 3 options that the user can choose
            onChange={ (e) => setPriority(e.target.value) }
            value={priority}
            >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priorty</option>
                <option value="high">High Priority</option>
            </select>
        </label>
        {/* lastly the button to submite */}
        <button
        className="btn-primary"
        // when isLoading is true, the user cant spam the btn
        disabled={isLoading}
        >
            {/* Output conditionally 2 things, using the && so while its loading, it display adding, and if it s not true! then shows add */}
            {isLoading && <span>Adding...</span> }
            {!isLoading && <span>Add Ticket</span> } 
        </button>
    </form>
  )
}
