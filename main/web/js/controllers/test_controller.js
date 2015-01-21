
(function() {

	var testApp = angular.module('testApp', []);

	testApp.controller('TestController', ['$scope', '$http', function($scope, $http) {
			var testController = this;

			$scope.number;

			$scope.results;

			$scope.numberSubmitted = false;

			testController.submitNumber = function(number) {
				$scope.numberSubmitted = true;

				$http.get('/' + number).success(function(response) {
					$scope.results = response;
				});
			};

	}]);

})();
