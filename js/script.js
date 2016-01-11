/* 
* @Author: sics
* @Date:   2016-01-08 10:52:56
* @Last Modified by:   sics
* @Last Modified time: 2016-01-08 12:10:42
*/

'use strict';

// angular app definition
var MetachiApp = angular.module('metachi',['ngRoute', 'ngAnimate']);

//angular app routing configuration
MetachiApp.config(function($routeProvider) {

    $routeProvider

        // home page
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'IndexCtrl'
        })
    
		.otherwise({

                redirectTo: '/home'
        });
       
});

MetachiApp.run(function($rootScope, $location, $timeout, $route){

})

//app controllers
MetachiApp.controller('IndexCtrl',function($scope,$http,$filter){
	$scope.pageClass = 'page-home';


	$http.get('people.json').then(
			function(response){
				$scope.people = response.data.people;
				console.log($scope.people);
			}
			, 
			function(error){
				alert('Error occured , try later');
			}

	);

    
      $scope.predicate = 'person.firstName';
	  $scope.reverse = true;
	  $scope.sortStatusFname = 'glyphicon glyphicon-sort-by-alphabet';
	  $scope.sortStatusLname = 'glyphicon glyphicon-sort-by-alphabet';
	  $scope.sortStatusAge = 'glyphicon glyphicon-sort-by-alphabet';
	  $scope.order = function(predicate) {
	    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
	    $scope.predicate = predicate;
	    $scope.sortStatusFname = ($scope.predicate == "person.firstName" && $scope.reverse==true) ? "glyphicon glyphicon-sort-by-alphabet":"glyphicon glyphicon-sort-by-alphabet-alt";
	  	$scope.sortStatusLname = ($scope.predicate == "person.lastName" && $scope.reverse==true) ? "glyphicon glyphicon-sort-by-alphabet":"glyphicon glyphicon-sort-by-alphabet-alt";
	  	$scope.sortStatusAge = ($scope.predicate == "person.age" && $scope.reverse==true) ? "glyphicon glyphicon-sort-by-alphabet":"glyphicon glyphicon-sort-by-alphabet-alt";
	 	
	  };
	$scope.filterData = function(){
		$filter('filter')($scope.people, person.age, reverse)
	}

} )