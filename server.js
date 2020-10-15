require('dotenv').config()
const mongoose = require('mongoose')
const slack = require('slack')

const channel = 'C01CG8V1894'

const token = process.env.SLACK_AUTH

async function server() {
  await mongoose.connect('mongodb://localhost/snikpic',
    { useNewUrlParser: true, useUnifiedTopology: true })
  let res = await slack.chat.postMessage({token, channel, text: 'Testing'})
  console.log(res)
}
server()