angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

})

.controller('IntroCtrl', function($scope, $ionicSlideBoxDelegate, $state) {

  $scope.startApp = function () {
    $state.go('app.search');
    // $localstorage.set('firstTime', 'true');
  };

  $scope.next = function () {
    $ionicSlideBoxDelegate.next();
  };

  $scope.previous = function () {
    $ionicSlideBoxDelegate.previous();
  };

  $scope.disableSwipe = function() {
    $ionicSlideBoxDelegate.enableSlide(false);
  };

  // Called each time the slide changes
  $scope.slideChanged = function (index) {
    $scope.slideIndex = index;
  };

  // $scope.currentSlide = IntroSlideService.index;


})

.controller('PhotosCtrl', function($scope) {
    $scope.message = "yo yo"

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae Yo', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap Yo', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('SearchCtrl', function($scope, $stateParams, $cordovaCamera) {

        console.log("running controller")
        var colorThief = new ColorThief();
    //     var test = document.getElementById("test");
    //     console.log(test)
    //     $scope.palette = colorThief.getPalette(test, 8);
    //     console.log($scope.palette)



     $scope.takePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL, // FILE_URI
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                        console.log("hey hey")
                        console.log(options)
                        console.log(imageData)
                        console.log($scope.imgURI)
                 
                        var img = document.getElementById("image");
                        console.log(img)
                        $scope.palette = colorThief.getPalette(img, 8);
                        console.log($scope.palette)
                     
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }
                
                $scope.choosePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };
   
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = imageData;
                         console.log("hey hey")
                         console.log(options)
                         console.log(imageData)
                         console.log($scope.imgURI)
                   
                        var img = document.getElementById("image");
                        console.log(img)
                        $scope.palette = colorThief.getPalette(img, 8);
                        console.log($scope.palette)
                    
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }

      function componentToHex(c) {
          var hex = c.toString(16);
          return hex.length == 1 ? "0" + hex : hex;
      }

      function rgbToHex(r, g, b) {
          return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

      // alert( rgbToHex(0, 51, 255) ); // #0033ff          

      $scope.testApi = function (){
          //$http.get("http://api.imagga.com/v1/colors")
          //image path
          //headers
          console.log(rgbToHex(0, 51, 255))
          var img = document.getElementById("image");
          console.log(img)
          $scope.dominant = colorThief.getColor(img)                  
          $scope.palette = colorThief.getPalette(img, 10);
          // console.log( $scope.dominant[0])
          // console.log($scope.palette[0][0])
          // create class
          var thing = "rgb(103, 79, 62)"
          var color = "rgb(" + $scope.dominant[0] + ", " + $scope.dominant[1] + ", " + $scope.dominant[2] + ")"
          var one = "rgb(" + $scope.palette[1][0] + ", " + $scope.palette[1][1] + ", " + $scope.palette[1][2] + ")"
          var two = "rgb(" + $scope.palette[2][0] + ", " + $scope.palette[2][1] + ", " + $scope.palette[2][2] + ")"
          var three = "rgb(" + $scope.palette[3][0] + ", " + $scope.palette[3][1] + ", " + $scope.palette[3][2] + ")"
          document.getElementById('dominant').style.backgroundColor = color
          document.getElementById('one').style.backgroundColor = one
          document.getElementById('two').style.backgroundColor = two
          document.getElementById('three').style.backgroundColor = three
          // use hex code
          // console.log( "rgb(" + $scope.palette[0][0] + ", " + $scope.palette[0][1] + ", " + $scope.palette[0][2] + ")" )
        }

 

});
