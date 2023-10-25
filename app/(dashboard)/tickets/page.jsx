import React, { Suspense } from 'react'
import TicketsList from './TicketsList'
import Loading from './loading'
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

        {/* add the Suspense here */}
        {/* the rest of the data can be shown on the page straight away */}
        {/* manually add the fallback prop and specif the component */}
        <Suspense fallback={ <Loading/>}>
          <TicketsList/>
        </Suspense>
    </main>
  )
}
