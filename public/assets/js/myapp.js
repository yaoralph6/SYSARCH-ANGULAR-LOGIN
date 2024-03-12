var app = angular.module("myapp",["ngRoute"]);
				app.config(function($routeProvider) {
					$routeProvider.when("/",{ 
                        templateUrl:"login.html",
                        controller:"loginctrl"
                    });
					$routeProvider.when("/main",{ 
                        templateUrl:"main.html",
                        controller:"mainctrl"
                    });
				});
				// Using AngularJS
                app.controller("loginctrl",function($scope, $location) {
                    $scope.login = function() {
                        var username = $scope.username;
                        var password = $scope.password;
                        if(username === "admin" && password === "user") { // Changed condition here
                            $location.path("/main");
                        }
                        else {
                            $scope.message = "INVALID USER";
                        }
                    };
                });

				app.controller("mainctrl", function($scope, $http) {
					$scope.pagesizes = [5, 10, 15, 20];
					$scope.pageSize = 5;
					$scope.currentPage = 0;

					$http({
						'url': '/studentlist',
						'method': 'GET'
					}).then(function(response) {
						$scope.students = response.data;
						$scope.headers = Object.keys($scope.students[0]);
					});

					$scope.numberOfPages = function() {
						return Math.ceil($scope.students.length / $scope.pageSize);
					};
				});
