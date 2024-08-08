import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, Providers } from '../../auth/firebase'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
    const response = await axios.post('http://localhost:3001/api/user/login', { email, password })
    if (response.status === 200) {
      navigate('/')
    } else {
        console.error('Login failed')
      }
    } catch (error) {
      console.error("Error logging in: ", error)
    }
  }
  const handleGoogleLogin = async () => {
    try {
      await auth.signInWithPopup(Providers)
      navigate('/')
    } catch (error) {
      console.error('Error logging in with Google:', error)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  )
}

export default Login