const slack = require('slack')
const fetch = require('node-fetch')

const token = process.env.SLACK_AUTH

async function findChannelByName(name) {
  const list = await slack.conversations.list({ token })
  if (list.ok) {
    const channel = list.channels.find(channel => channel.name === name)
    if (channel) {
      return { id: channel.id, name: channel.name }
    }
  }
  return null
}

async function sendMessage(channel, text, attachments) {
  const url = 'https://slack.com/api/chat.postMessage'
  const request = {
    channel,
    text,
    attachments
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(request)
  })
  if (res.status !== 200) {
    throw new Error('Something went wrong')
  }
  return await res.json()
}

module.exports = { findChannelByName, sendMessage }