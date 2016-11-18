Computer Must be able to run Nodejs
https://nodejs.org/en/

1. Set-up database
	-- For Windows
		navigate to 'DatabaseWindows/bin'
		run with command
			mongod --dbpath ../
	-- For OSX
		navigate to 'Database/mongodb/bin'
		run command 
			./mongod --dbpath ../../
		
2. Run server
	-- in root folder run command
		node server
		
		
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















