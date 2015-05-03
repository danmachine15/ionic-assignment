angular.module('calorific.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.personalData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/details.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeDetails = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.enterDetails = function() {
    console.log('Entering Details', $scope.personalData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeDetails();
    }, 1000);
  };
})

.controller('FoodlistsCtrl', function($scope) {
  $scope.foodlist = [
    { title: 'Meats', id: 1 },
    { title: 'Vegetables', id: 2 },
    { title: 'Fruit', id: 3 },
    { title: 'Eggs & Dairy', id: 4 },
    { title: 'Cereals', id: 5 },
    { title: 'Drinks', id: 6 },
    { title: 'Other', id: 7 }
  ];
})

.controller('FoodlistCtrl', function($scope, $stateParams) {
});
