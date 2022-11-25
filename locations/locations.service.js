// This file holds the Business-Logic layer, interacting with Data Layer

const Location = require('./locations.model')

function findAll () {
	//return [1,2,3,4]
	//return JSON.stringify(Location.find());
}
function findOne (id) {
	return Location.findById(id);
	//return Location.findOne({_id:id});
}//63332292db08aee5dea35777

async function add (newloc){
	const locloc=new Location({
		"filmType": newloc.type_tournage,
	})
}



module.exports.findAll = findAll
module.exports.findOne = findOne
