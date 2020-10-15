const { Schema, model } = require('mongoose')

const businessSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  channels: [{
    id: String,
    name: String,
  }],
})

module.exports = model('Business', businessSchema)