// This file holds the Business-Logic layer, interacting with Data Layer
const Location = require('./locations.model')

async function findAll () {
	return Location.find();
}
async function findOne (id) {
	return Location.findById(id);
}

async function addLocation (filmType,filmProducerName,endDate,filmName,district,geolocation,sourceLocationId,filmDirectorName,address,startDate,year){
	const newLocation=new Location({
		"filmType": filmType,
		"filmProducerName": filmProducerName,
		"endDate": endDate,
		"filmName": filmName,
		"district": district,
		"geolocation": geolocation,
		"sourceLocationId": sourceLocationId,
		"filmDirectorName": filmDirectorName,
		"address": address,
		"startDate":startDate,
		"year": year,
	})
	newLocation.save().then((res)=>console.log('enregistré !')).catch((e)=>console.log(e));
}

async function renvoiModel(){
	return Location;
}

module.exports={findAll, findOne, addLocation,renvoiModel}

