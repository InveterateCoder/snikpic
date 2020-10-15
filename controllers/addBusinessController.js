const Business = require('../models/Business')
const errors = require('../infrastructure/errors')
const request = require('../infrastructure/request')

async function addBusinessController(req, res) {
  try {
    const { channelName } = req.params
    const channel = await request.findChannelByName(channelName)
    if (!channel) {
      return res.status(404).send(errors.channelNotFound)
    }
    const business = new Business({
      name: channel.name,
      channels: [channel]
    })
    await business.save()
    res.send(business._id)
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send(errors.businessExist)
    }
    res.status(500).send(err.message)
  }
}

module.exports = addBusinessController