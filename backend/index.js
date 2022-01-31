const express = require("express")
const app = express()
const cors = require("cors")
const session = require("express-session")
const passport = require("./config/passport")
const { dbConnect } = require("./config/db.js")

const users = require('./routes/users')
const auth = require('./routes/auth')
const annonce = require('./routes/annonce')
const message = require('./routes/message')
const conversation = require('./routes/conversation')
const location = require('./routes/location')

dbConnect()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(express.json())

app.use(session({
  secret: 'MyAwesomeSecret',
  resave: true,
  saveUninitialized: false 
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', auth)
app.use('/users', users)
app.use('/annonce', annonce)
app.use('/message', message)
app.use('/conversation', conversation)
app.use('/location', location)

const port = 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})