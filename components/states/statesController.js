/**
 * Define StatesController for the states component of CS142 project #4
 * problem #2.  The model data for this view (the states) is available
 * at window.cs142models.statesModel().
 */

cs142App.controller('StatesController', ['$scope', function($scope) {

	// Replace this with the code for CS142 Project #4, Problem #2
	console.log('window.cs142models.statesModel()', window.cs142models.statesModel()[0,0]);

	$scope.states={};
	$scope.states.stateInput = '';
	$scope.stateArray = window.cs142models.statesModel();

	$scope.filterStateArray = function() {
		console.log("filterStateArray is called")
		console.log($scope.states.stateInput);
		for (let i = 0; i <= 50; i++){
			if ($scope.stateArray[0,i] === $scope.states.stateInput){
				console.log("here");
			}
		}

	};

}]);
