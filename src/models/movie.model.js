const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  img: String,
  classification: [{type: Schema.Types.ObjectId, ref: 'Catalogue'}]
});

module.exports = mongoose.model('Movie', movieSchema);