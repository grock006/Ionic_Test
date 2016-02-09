// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'directive.ngColorwheel','ionic-zoom-view'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
  })

  .state('logo', {
      url: '/logo',
      templateUrl: 'templates/logo.html',
      controller: 'IntroCtrl'
    })

   .state('wheel', {
    url: '/wheel',
    templateUrl: 'templates/wheel.html',
    controller: 'WheelCtrl'
  })

  .state('capture', {
    url: '/capture',
    templateUrl: 'templates/capture.html',
    controller: 'CaptureCtrl'
  })

  .state('photo', {
    url: '/photo',
    templateUrl: 'templates/photo.html',
    controller: 'PhotoCtrl',
    resolve:{
      imgURI: function($rootScope){
        return $rootScope.imgURI;
      }
    }
  })

  .state('zoom', {
    url: '/zoom',
    templateUrl: 'templates/zoom.html',
    controller: 'ZoomCtrl',
    resolve:{
      imgURI: function($rootScope){
        return $rootScope.imgURI;
      }
    }
  })

  .state('detail', {
    url: '/detail',
    templateUrl: 'templates/detail.html',
    controller: 'DetailCtrl',
    resolve:{
      colorSelected: function($rootScope){
        return $rootScope.colorSelected;
      }
    }
  })

  .state('request', {
    url: '/request',
    templateUrl: 'templates/request.html',
    controller: 'RequestCtrl',
    resolve:{
      colorSelected: function($rootScope){
        return $rootScope.colorSelected;
      },
      imgURI: function($rootScope){
        return $rootScope.imgURI;
      }
    }
  })

  .state('form', {
    url: '/form',
    templateUrl: 'templates/form.html',
    controller: 'FormCtrl',
    resolve:{
      colorSelected: function($rootScope){
        return $rootScope.colorSelected;
      },
      imgURI: function($rootScope){
        return $rootScope.imgURI;
      }
    }
  })

  .state('confirmation', {
    url: '/confirmation',
    templateUrl: 'templates/confirmation.html',
    controller: 'IntroCtrl'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
