
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'directive.ngColorwheel', 'jrCrop', 'angular-img-cropper'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.hide();
      StatusBar.overlaysWebView(false);
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.views.swipeBackEnabled(false);

  $stateProvider

  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
  })

  .state('logo', {
      url: '/logo',
      templateUrl: 'templates/logo.html'
    })

   .state('wheel', {
    url: '/wheel',
    templateUrl: 'templates/wheel.html',
    controller: 'WheelCtrl',
    resolve:{
      colorSelected: function($rootScope){
        return $rootScope.colorSelected;
      }
    }
  })

  .state('capture', {
    url: '/capture',
    templateUrl: 'templates/capture.html',
    controller: 'CaptureCtrl',
    resolve:{
      colorSelected: function($rootScope){
        return $rootScope.colorSelected = null;
      },
      imgURI: function($rootScope){
        return $rootScope.imgURI = null;
      }
    }
  })

  .state('photo', {
    url: '/photo',
    templateUrl: 'templates/photo.html',
    controller: 'PhotoCtrl',
    resolve:{
      imgURI: function($rootScope){
        return $rootScope.imgURI;
      }, 
      sendCrop: function($rootScope){
        return $rootScope.sendCrop;
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
    controller: 'ConfirmCtrl',
    resolve:{
      colorSelected: function($rootScope){
        return $rootScope.colorSelected = null;
      },
      imgURI: function($rootScope){
        return $rootScope.imgURI = null;
      }
    }
  });
  
  $urlRouterProvider.otherwise('/');
});
