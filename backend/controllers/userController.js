const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Create a new user
router.post('/signup', async (req, res) => {
  const { email, password, displayName } = req.body
  try {
    const newUser = new User({ email, password, displayName })
    await newUser.save()
    res.status(201).send('User created')
  } catch (error) {
    res.status(400).send('Error creating user')
  }
})

// User login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email, password })
    if (user) {
      res.status(200).send('Login successful')
    } else {
      res.status(401).send('Invalid credentials')
    }
  } catch (error) {
    res.status(400).send('Error logging in')
  }
})

module.exports = router