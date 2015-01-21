
(function() {

	var testApp = angular.module('testApp', []);

	testApp.controller('TestController', ['$scope', '$http', function($scope, $http) {
			var testController = this;

			$scope.number;

			$scope.numberSubmitted = false;

			$scope.numberData = "";

			testController.submitNumber = function(number) {
					$scope.numberSubmitted = true;
					$scope.numberData = $http.get('/' + number).success(function(response) {
							$scope.numberData = response;
					}); 
					$scope.number = "";
			};
	}]);

})();
