'use strict'
const express = require('express')
const bodyParser=require('body-parser')
const locationController = require('./locations/locations.controller')
const usersController=require('./users/users.controller')
const app = express()
const port = 3000
const mongoose = require('mongoose')
require("dotenv").config();
app.use(bodyParser.json())
app.use(locationController)
app.use('/users',usersController)
app.use(userController)
app.get('/',(req,res)=>res.status(200).send('Hello World'))

async function main(){
	try {
		await mongoose.connect(process.env.MONGO_URI).then((res) => console.log('connecté')).catch((e) => console.log(e));

		app.listen(port, () => {
			console.log(`API listening on port ${port}, visit http://localhost:${port}/`)
		})
	} catch(errorConnection){
		console.log("Il s'agit probablement d'un problème d'adresse IP\n"+errorConnection)


	}
}
main()