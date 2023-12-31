// import { Inter } from 'next/font/google'
import { Rubik } from 'next/font/google'
import './globals.css'
// header and footer will be here
// like global css and adding fonts

// COMPONENTS
import Navbar from './components/Navbar'

// Add dynamic so nextjs will render it dynamic not static
// such as cookies and with this line there is no error
export const dynamic = 'force-dynamic'


// here`s an example of the fonts
// changed from Inter to Rubik, also the const name
const rubik = Rubik({ subsets: ['latin'] })


// metadata
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// takes a prop children refers to the content it wraps - layout components wraps pages components
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* we output the content  */}
      <body className={rubik.className}>
       {children}
      </body>
    </html>
  )
}
