import React from 'react'

const Login = () => {
  return (
    <div>
      <h2>Register for Organicle</h2>
      <form>
        <label>Full Name</label>
        <label>Username</label>
        <label>Email</label>

        <label>Password</label>

        <label>Phone number</label>

        <p>By continuing, you agree to our Terms and Privacy Policy.</p>
        <button type='submit'>Next</button>
      </form>
      <h3>Already have an Account</h3>
      <div>
        <i>Google</i>
        <i>Apple</i>
      </div>
    </div>
  )
}

export default Login
