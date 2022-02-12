const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  img: String,
  catalogueId: {type: Schema.Types.ObjectId, ref: 'Catalogue'}
});

module.exports = mongoose.model('Movie', movieSchema);