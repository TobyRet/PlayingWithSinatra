
(function() {

	var testApp = angular.module('testApp', []);

	testApp.controller('TestController', ['$scope', function($scope) {
			var testController = this;

			// $scope.greeting = "";

			// $scope.greetingSubmitted = false;

			// testController.submitGreeting = function() {
			// 		$scope.greetingSubmitted = true;
			// };

			$scope.results = {};

			$scope.numberSubmitted = false;

			testController.submitNumber = function() {
				$scope.results = "function is working";
			}

	}]);

})();
