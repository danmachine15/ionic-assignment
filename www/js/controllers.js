angular.module('calorific.controllers', [])



.controller('FoodsCtrl', function($scope, Foods) {

  $scope.foods = Foods.all();
  $scope.remove = function(chat) {
    Foods.remove(food);
  }
$scope.add = function(){

	$scope.total=$scope.total+$scope.food.calories;
	alert($scope.total);
	}

})

.controller('FoodDetailCtrl', function($scope, $stateParams, $state, Foods) {
  $scope.food = Foods.get($stateParams.foodId);
$scope.total = 0;

	
})

.controller('DashCtrl', function($scope, total) {
$scope.addToTotal = function(calories){
$scope.totalCal = $scope.totalCal+calories;
total.set($scope.totalCal);
}

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
