// This file is used to map API calls (Presentation Layer) with the
// Business-Logic layer
const router = require('express').Router()
const locationsService = require('./locations.service')
const locationsModel = locationsService.renvoiModel()

router.get('/find/:id',async(req,res,next)=>{
	locationsModel.findById(req.params.id)
		.exec()
		.then(doc=>{
		res.status(200).json(doc);
		}).catch(err=>console.log(err));
})

router.get('/locations',async (req, res) => {
	return res.status(200).send({locations:await locationsService.findAll()})
})

router.get('/HelloWorld',function (req, res){
	res. send("Hello world !!!");
})

router.route('/NewLocation')
	.get(async(req,res)=>{
		return res.status(200).send({locations: await locationsService.findAll()});
	})
	.post(async(req,res)=>{
	const bodyFound=req.body;

	const newLocation=await locationsService.addLocation(
		body.filmType,
		body.filmProducerName,
		body.endDate,
		body.filmName,
		body.district,
		body.geolocation,
		body.sourceLocationId,
		body.filmDirectorName,
		body.address,
		body.startDate,
		body.year
	);
})


module.exports = router
