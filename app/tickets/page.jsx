import React from 'react'
import TicketsList from './TicketsList'
// steps to Fetch and Re validate the Data
// 1 create _data folder and db.json file, insert "id", "title", "body"
// 2 open terminal - npm install json-server
// 3 - json-server  --watch --port 4000 ./_data/db.json
export default function Tickets() {
  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets.</small></p>
          </div>
        </nav>
        
        <TicketsList/>
    </main>
  )
}
