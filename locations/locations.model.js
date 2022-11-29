// This file holds the Database Layer

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:root@cluster0.3q3r3ak.mongodb.net/?retryWrites=true&w=majority').then((res)=>console.log('connecté')).catch((e)=>console.log(e));

const filmSchema = new mongoose.Schema({
	filmType: String,
	filmProducerName: String,
	endDate: Date,
	filmName: String,
	district: Number,
	geolocation: {
		coordinates: [Number],
		type: { type: String },
	},
	sourceLocationId: String,
	filmDirectorName: String,
	address: String,
	startDate: Date,
	year: Number,
})

const Location = mongoose.model('Location', filmSchema)

module.exports = Location
