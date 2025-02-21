import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <h1>2BeSeen Werkuren Tracking Systeem</h1>
      <p>Welkom bij het werkuren tracking systeem.</p>
      <nav>
        <ul>
          <li><Link href="/employee/dashboard">Werknemer Dashboard</Link></li>
          <li><Link href="/employer/dashboard">Werkgever Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
