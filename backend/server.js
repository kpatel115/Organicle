const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(cors())

// MongoDB connection
mongoose.connect('mongodb+srv://kpatel114:c7myDZGk2ExHye2L@organicle-cluster.wsarhqp.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err)
})

// Routes
// Routes
const userRoutes = require('./routes/user')
app.use('/api/users', userRoutes)


app.get('/', (req, res) => {
  res.send('Server is running')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})