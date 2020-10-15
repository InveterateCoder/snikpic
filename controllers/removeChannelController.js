const Business = require('../models/Business')
const errors = require('../infrastructure/errors')

async function removeChannelController(req, res) {
  try {
    const { businessId, channelName } = req.params
    const business = await Business.findById(businessId).exec()
    if (!business) return res.status(400).send(errors.businessNotFound)
    const channels = business.channels.filter(channel => channel.name !== channelName)
    if (channels.length === business.channels.length) {
      return res.status(400).send(errors.notSigned)
    }
    if (channels.length === 0) {
      await Business.deleteOne({ _id: businessId })
    } else {
      await business.update({ $set: { channels } })
    }
    res.send({ success: 'ok' })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = removeChannelController