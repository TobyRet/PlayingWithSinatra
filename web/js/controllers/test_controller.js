
(function() {

	var testApp = angular.module('testApp', []);

	testApp.controller('TestController', ['$scope', function($scope) {
			var controller = this;
			$scope.greeting = "This is working";
	}]);

})();
