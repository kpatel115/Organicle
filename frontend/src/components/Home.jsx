Upimport React from 'react'
import UserProfile from './UserProfile'
import EventList from './EventList'

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to Organicle</h1>
        <p>Meet people through activity-based gatherings</p>
      </section>
      <section className="userprofile">
        <UserProfile />
      </section>
      <section className="events">
        <h2>Upcoming Events</h2>
        <EventList />
      </section>
      <section className="places">
        <h2>Explore Places</h2>
        <p>Check out cool places in your AO</p>
      </section>
    </main>
  )
}

export default Home