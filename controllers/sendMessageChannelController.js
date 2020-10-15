const { findChannelByName, sendMessage } = require('../infrastructure/request')
const errors = require('../infrastructure/errors')

async function sendMessageChannelController(req, res) {
  try {
    const { channelName } = req.params
    const { text } = req.body
    if (!text) return res.status(400).send(errors.emptyMessage)
    const channel = await findChannelByName(channelName)
    if (!channel) return res.status(400).send(errors.channelNotFound)
    const ret = await sendMessage(channel.id, text)
    res.send({ success: ret.ok })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = sendMessageChannelController