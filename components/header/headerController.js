/**
 * Define HeaderController for the entire site of CS142 project #4
 * problem #3.
 */

cs142App.controller('HeaderController', ['$scope', function($scope) {

	// $scope.stateInput = '';
	$scope.stateArray = window.cs142models.statesModel();

}]);
