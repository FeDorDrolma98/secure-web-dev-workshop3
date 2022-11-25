// This file is used to map API calls (Presentation Layer) with the
// Business-Logic layer

const router = require('express').Router()
const testy=require('express')
/*
* possible aussi de faire en 2 fois :
* const expresso=require('express');
* const router=expresso.Router()
* */
const locationsService = require('./locations.service')
const locationsModel = require('./locations.model')
const findAll=locationsService.findAll();
const findOne=locationsService.findOne('63332292db08aee5dea35777');


router.get('/qqch',(req,res,next)=>{
locationsModel.findById('63332292db08aee5dea35777')
	.exec()
	.then(doc=>{console.log(doc);
	res.status(200).json(doc);
	}).catch(err=>console.log(err));
})




router.get('/locations', (req, res) => {
	return res.status(200).send(locationsService.findAll())
})
router.get('/findAll', (req, res) => {
	return res.status(200).send({findOne})
})
router.get('/HelloWorld',function (req, res){
	res. send("Hello world !!!");// apres avec http://localhost:3000/HelloWorld ca marche
})
router.get('/testy',(req,res)=>{
	return res.send(findOne)
})

//notes de l'écran de PB
router.get('/locations/:id', async(req, res) => {
	return res.status(200).send(await locationsService.findOne(req.params.id))
})//res pour envoie, et req pour recevoir
router.post('/locations', (req, res) => {
	console.log(req.body)
	return res.status(200).send(locationsService.add(req.body))
})
router.get('/locations/update', (req, res) => {
	return res.status(200).send(locationsService.update())
})
router.get('/locations/delete', (req, res) => {
	return res.status(200).send(locationsService.deleteLoc())
})



module.exports = router
