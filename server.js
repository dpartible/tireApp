var express = require("express");
var bodyParser = require('body-parser');

var mongojs = require('mongojs');

// Database Collections to use
var dbTires = mongojs('tires', ['tires']);	
var dbVehicles = mongojs('vehicles', ['vehicles']);

// Create express app
var app = express();

app.use(express.static(__dirname + '/public'));	// find and use the static html file in the 'public' folder

// Server uses GET request from client
// Query the Tire database using user inputs
// Send back docs object containing the vehicle
// docs is an array of all the documents in mycollection
app.get('/searchbytiresize/&:width&:ratio&:diameter', function(req, res){
	 console.log("get req of searchbytiresize\nwidth: " + req.params.width + "\nratio: " + req.params.ratio + "\ndiameter: " + req.params.diameter);
	 
	 // Database Query
	 dbTires.tires.find({width: req.params.width, ratio: req.params.ratio, diameter: req.params.diameter}, function (err, docs) {
	    
	    console.log(docs)
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

	    res.json(docs);

	});

});

// Start Server on port 3000
app.listen(3000);
console.log("Server running on port 3000");