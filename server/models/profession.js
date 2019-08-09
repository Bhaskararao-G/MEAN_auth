const mongoose = require('mongoose');

const Schema = mongoose.Schema

const professionSchema = new Schema({
	name: String
}, {
  timestamps: true
});

module.exports = mongoose.model('profession', professionSchema);