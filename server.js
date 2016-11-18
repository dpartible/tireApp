var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;

var mongojs = require('mongojs');

// Database Collections to use
var dbTires = mongojs('mongodb://tire:1234@ds157487.mlab.com:57487/meantires', ['tires']);
var dbVehicles = mongojs('mongodb://tire:1234@ds157487.mlab.com:57487/meantires', ['vehicles']);

// Create express app
var app = express();

// app.use(express.static(__dirname + '/public'));	// find and use the static html file in the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Server uses GET request from client
// Query the Tire database using user inputs
// Send back docs object containing the vehicle
// docs is an array of all the documents in mycollection
app.get('/searchbytiresize/&:width&:ratio&:diameter', function(req, res){
	 console.log("get req of searchbytiresize\nwidth: " + req.params.width + "\nratio: " + req.params.ratio + "\ndiameter: " + req.params.diameter);

	 // Database Query
	 dbTires.tires.find({width: req.params.width, ratio: req.params.ratio, diameter: req.params.diameter}, function (err, docs) {
			//  if(err){
			// 	 res.send(err);
			//  }
	    // console.log(docs)
	    res.json(docs);
	});

});

// Server uses GET request from client
// Query the vehicels database using user inputs
// Send back docs object containing the vehicle
app.get('/searchByVehicle/&:make&:year&:model', function(req, res){
	 console.log("get req of searchByVehicle\nmake: " + req.params.make + "\nyear: " + req.params.year + "\nmodel: " + req.params.model);

	 // Database Query
	 dbVehicles.vehicles.find({VehicleMake: req.params.make, Year: req.params.year, Model: req.params.model}, function (err, docs) {

		//  console.log(docs)
	    res.json(docs);

	});

});

// Start Server on port 3000
app.listen(port);
console.log("Server running on port 3000");
