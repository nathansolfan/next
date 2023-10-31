// 1st step we delete the pre next js 
// 2nd chage page.js and layout.js to jsx

import Link from 'next/link'

// to preview the styles from tailwind

export default function Home() {
  return (
    <main>
      <h2>Welcome</h2>
      <p>I have a strong foundation in front-end and back-end development, with a keen eye for creating responsive and visually appealing web designs. My journey in the world of web development are hosted on GitHub.One of my primary areas of focus is building web applications using React progressing to NextJS and integrating them with robust databases, particularly MongoDB or Postman
        Also PHP using MySQL which acts similar to MongoDB.
        This allows me to create dynamic, data-driven solutions that meet the unique needs of businesses and users alike.</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div>
    </main>
  )
}