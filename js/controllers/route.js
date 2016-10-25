
var route = angular.module('myRoute',['ngRoute','moduleStorage','otherModule','ngStorage']);
route.config(moduleRoutes);
	function moduleRoutes ($routeProvider,$locationProvider){
	    $routeProvider
	    .when('/next',{
	        templateUrl : '../view/page-two.html',
	        controller : 'otherController'
	        
	    })
	    .when('/',{
	        templateUrl : '../view/page-one.html',
	        controller : 'moduleStorageController'
	        
	    })
	    .otherwise({redirectTo:'/'});

	   
	}
