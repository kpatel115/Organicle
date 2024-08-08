import React, { useEffect, useState } from 'react'
import { auth } from '../../auth/firebase'

function UserProfile() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!user) {
    return <p>No user is logged in</p>
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome, {user.displayName || user.email}!</p>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default UserProfile