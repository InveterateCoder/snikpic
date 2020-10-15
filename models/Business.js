const { Schema, model } = require('mongoose')
const type = Schema.Types

const businessSchema = new Schema({
  name: type.String

})