const { Schema, model } = require('mongoose')

const businessSchema = new Schema({
  channels: {
    type: [String],
    required: true
  }
})

module.exports = model('Business', businessSchema)