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

  // $http.get("http://www.omdbapi.com/?t=star+wars&y=&plot=short&r=json")
  //     .success(function(data){
  //         console.log(data)
  //         $scope.test = data;
  //     })



  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
        // console.log($scope.loginData.username)
        // console.log($scope.loginData.password)
    // $http.post("http://castifi-app-staging.herokuapp.com/auth/local",
    //       {email: "ionic@test.com", password: "password"})
    //      .success(function(data){
    //         console.log(data)
    //      })
    //      .error(function(err){
    //         console.log(err)
    //      })
    // console.log('Doing login', $scope.loginData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
    //   $scope.closeLogin();
    // }, 1000);
  };

  // login: function(user, callback) {
  //       var cb = callback || angular.noop;
  //       var deferred = $q.defer();

  //       $http.post('/auth/local', {
  //         email: user.email,
  //         password: user.password,
  //       }).
  //       success(function(data) {
  //         $cookieStore.put('token', data.token);
  //         currentUser = User.get();
  //         deferred.resolve(data);
  //         return cb();
  //       }).
  //       error(function(err) {
  //         this.logout();
  //         deferred.reject(err);
  //         return cb(err);
  //       }.bind(this));

  //       return deferred.promise;
  //     },




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

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('PhotoCtrl', function($scope, $stateParams, $cordovaCamera) {

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

      $scope.testApi = function (){
          //$http.get("http://api.imagga.com/v1/colors")
          //image path
          //headers
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
