#MEAN Stack App

Simple mean stack application. Allows users to search data for tires. Can either search using vehicle information or tire specifications.

Data set is extremely small and was generated using http://www.json-generator.com/.

Web API
requests to the server should look like:
	-- Search tire by Vehicle
		{ip address}:{port}/searchbyvehicle/&{make}&{year}&model
	-- Search by tire size
		{ip address}:{port}/sea/&{make}&{year}&model

eg. 192.168.0.1:3000/searchbyvehicle/&Saleen&2012&TT
returns JSON object from database

Sample data can be found in the 'simData' folder
All data was randomly generated
