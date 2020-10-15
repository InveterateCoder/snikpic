const slack = require('slack')

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

async function sendMessage(channel, text) {
  return await slack.chat.postMessage({ token, channel, text })
}

module.exports = { findChannelByName, sendMessage }