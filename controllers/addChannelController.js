const Business = require('../models/Business')
const errors = require('../infrastructure/errors')
const { findChannelByName } = require('../infrastructure/request')

async function addChannelController(req, res) {
  try {
    const { businessId, channelName } = req.params
    const channel = await findChannelByName(channelName)
    if (!channel) {
      return res.status(404).send(errors.channelNotFound)
    }
    const business = await Business.findById(businessId).exec()
    if (!business) return res.status(400).send(errors.businessNotFound)
    if (business.channels.some(item => item.name === channel.name)) {
      return res.status(400).send(errors.alreadySigned)
    }
    await business.update({ $push: { channels: channel } })
    await business.save()
    res.send({ success: true })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = addChannelController