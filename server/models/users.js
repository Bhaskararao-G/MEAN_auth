const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
	name: String,
	password: String,
	age: Number,
	phone: Number,
	profession: { type: mongoose.Schema.Types.ObjectId, ref: 'profession' },
	},{
		timestamps: true
	});

module.exports = mongoose.model('user', userSchema);