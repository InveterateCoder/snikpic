require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const connectAPI = require('./infrastructure/connectAPI')

const app = express()

app.use(express.json())
connectAPI(app)
app.use((req, res) => {
  res.status(400).end()
})


async function server() {
  await mongoose.connect('mongodb://localhost/snikpic',
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
  console.log('connected to the database')
  const port = process.env.PORT || 5000
  app.listen(port, () => console.log(`server started on port ${port}`))
}
server()