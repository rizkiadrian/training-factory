var app = angular.module('myApp',[]);
app.factory('myFactory',myFactory);
app.controller('myController',myController);

function myFactory(){

var calculate = {};
calculate.sum = function(valueA,valueB){
return parseInt(valueA)+parseInt(valueB);
};
calculate.min = function (valueA,valueB){
return valueA-valueB;
};
calculate.multiple = function (valueA,valueB){
return valueA*valueB;
};
calculate.divide = function (valueA,valueB){
return valueA/valueB;
};
return calculate;
}

function myController($scope,myFactory){

	$scope.penambahan = function(){
		$scope.hasil = myFactory.sum($scope.valueA,$scope.valueB);
	};

	$scope.pengurangan = function(){
		$scope.hasil = myFactory.min($scope.valueA,$scope.valueB);
	};

	$scope.perkalian = function(){
		$scope.hasil = myFactory.multiple($scope.valueA,$scope.valueB);
	};

	$scope.pembagian = function(){
		$scope.hasil = myFactory.divide($scope.valueA,$scope.valueB);
	};

}