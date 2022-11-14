// This file is used to map API calls (Presentation Layer) with the
// Business-Logic layer

const router = require('express').Router()
/*
* possible aussi de faire en 2 fois :
* const expresso=require('express');
* const router=expresso.Router()
* */
const locationsService = require('./locations.service')

router.get('/locations', (req, res) => {
	return res.status(200).send({locations: []})
})
router.get('/HelloWorld',function (req, res){
	res. send("Hello world");// apres avec http://localhost:3000/HelloWorld ca marche
})


module.exports = router
