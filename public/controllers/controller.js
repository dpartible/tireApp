var myAppCtrl = angular.module('myAppCtrl', []);

myAppCtrl.controller('MyAppController', ['$scope', '$http', '$location',
    function($scope, $http, $location){
        //console.log("From the Controller: ");

        // Send GET request to server to query for vehicles
        // Set data recieved to results for angular
        $scope.searchByVehicle = function(){
        	console.log("Search By Vehicle");

            // Sends GET request to server
            $http.get('/searchByVehicle/&'+$scope.car.make+'&'+$scope.car.year+'&'+$scope.car.model)
                .success(function(response){
                //console.log(response);

                // DEBUG: Print out recieved data
                // for(var i = 0; i < response.length; i++){
                //     console.log("Make: "+response[i].VehicleMake);
                //     console.log("Year: "+response[i].Year);
                //     console.log("Model: "+response[i].Model);
                // }

                if(response.length == 0){   // response is empty
                    $scope.nf = "Sorry No Match";
                    $scope.results = "";
                }else{                      // response has data, so put response in scope
                    $scope.results = response[0].tire;
                    $scope.nf = "";
                }

            });
        };

        // Send GET request to server to query for tires
        // Set data recieved to results for angular
        $scope.searchByTireSize = function(){
        	console.log("Search By Tire Size");

            // Sends GET request to server
        	$http.get('/searchbytiresize/&'+$scope.tire.width+'&'+$scope.tire.ratio+'&'+$scope.tire.diameter)
                .success(function(response){
				//console.log(response);

                // DEBUG: Print out recieved data
                // for(var i = 0; i < response.length; i++){
                //     console.log("Make: "+response[i].brand);
                //     console.log("Model: "+response[i].model);
                //     console.log("Desc: "+response[i].disc);
                //     console.log("Price: "+response[i].price);
                // }

                if(response.length == 0){   // response is empty
                    $scope.nf = "Sorry No Match";
                    $scope.results = "";
                }else{                      // response has data, so put response in scope
                    $scope.results = response;
                    $scope.nf = "";
                }

			});

        };

    }]);




















