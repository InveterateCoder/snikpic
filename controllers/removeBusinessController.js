const Business = require('../models/Business')

async function removeBusinessController(req, res) {
  try {
    const { businessId } = req.params
    const result = await Business.deleteOne({ _id: businessId })
    res.send({ success: Boolean(result.deletedCount) })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = removeBusinessController