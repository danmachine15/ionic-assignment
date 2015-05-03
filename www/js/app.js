// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('calorific', ['ionic', 'calorific.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.status', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/status.html"
      }
    }
  })

  .state('app.calculator', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/calculator.html"
      }
    }
  })
    .state('app.foodlist', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/foodlist.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/foodlist/:foodlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/food.html",
        controller: 'foodlistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/foodlist');
});
