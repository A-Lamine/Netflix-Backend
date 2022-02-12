const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catalogueSchema = new Schema({
  name: String,
  movies: [
    { type: Schema.Types.ObjectId, ref: 'Movie' }
],
});

module.exports = mongoose.model('Catalogue', catalogueSchema);