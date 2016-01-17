angular.module('starter.controllers', [])
  
  .controller('PhotoCtrl', function($scope, $stateParams, $cordovaCamera, $state, $rootScope) {

      console.log($rootScope.imgURI)
      var colorThief = new ColorThief();
      // var photo = document.getElementById("photo");
      // $scope.photourl = "images/hot-blonde-04.jpg"
      var photo = document.getElementById("photo");
      console.log(photo)


      $scope.$on('$ionicView.afterEnter', function(){
          var palette = colorThief.getPalette(photo, 12);
          console.log(palette)
          var one = "rgb(" + palette[1][0] + ", " + palette[1][1] + ", " + palette[1][2] + ")"
          var two = "rgb(" + palette[2][0] + ", " + palette[2][1] + ", " + palette[2][2] + ")"
          var three = "rgb(" + palette[3][0] + ", " + palette[3][1] + ", " + palette[3][2] + ")"
          var four = "rgb(" + palette[4][0] + ", " + palette[4][1] + ", " + palette[4][2] + ")"
          var five = "rgb(" + palette[5][0] + ", " + palette[5][1] + ", " + palette[5][2] + ")"

          var six = "rgb(" + palette[6][0] + ", " + palette[6][1] + ", " + palette[6][2] + ")"
          var seven = "rgb(" + palette[7][0] + ", " + palette[7][1] + ", " + palette[7][2] + ")"
          var eight = "rgb(" + palette[8][0] + ", " + palette[8][1] + ", " + palette[8][2] + ")"
          var nine = "rgb(" + palette[9][0] + ", " + palette[9][1] + ", " + palette[9][2] + ")"
          var ten = "rgb(" + palette[10][0] + ", " + palette[10][1] + ", " + palette[10][2] + ")"

          document.getElementById('one').style.backgroundColor = one
          document.getElementById('two').style.backgroundColor = two
          document.getElementById('three').style.backgroundColor = three
          document.getElementById('four').style.backgroundColor = four
          document.getElementById('five').style.backgroundColor = five

          document.getElementById('six').style.backgroundColor = six
          document.getElementById('seven').style.backgroundColor = seven
          document.getElementById('eight').style.backgroundColor = eight
          document.getElementById('nine').style.backgroundColor = nine
          document.getElementById('ten').style.backgroundColor = ten
      });
     
 
      // $scope.test = function(){              
      //   var palette = colorThief.getPalette(photo, 10);
      //   console.log(palette)
      //   var one = "rgb(" + palette[1][0] + ", " + palette[1][1] + ", " + palette[1][2] + ")"
      //   var two = "rgb(" + palette[2][0] + ", " + palette[2][1] + ", " + palette[2][2] + ")"
      //   var three = "rgb(" + palette[3][0] + ", " + palette[3][1] + ", " + palette[3][2] + ")"

      //   document.getElementById('one').style.backgroundColor = one
      //   document.getElementById('two').style.backgroundColor = two
      //   document.getElementById('three').style.backgroundColor = three
      // }
      
  })

  .controller('CaptureCtrl', function($scope, $stateParams, $cordovaCamera, $state, $rootScope) {

  // $scope.message = "hello"
  // console.log("running controller")
  // var colorThief = new ColorThief();


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
            $rootScope.imgURI = "data:image/jpeg;base64," + imageData;
            $state.go('photo');
            // var img = document.getElementById("image");
            // $scope.palette = colorThief.getPalette(img, 10);
            // console.log($scope.palette)
         
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
            $rootScope.imgURI = imageData;
            $state.go('photo')
            // var img = document.getElementById("image");
            // $scope.palette = colorThief.getPalette(img, 10);
            // console.log($scope.palette)
        
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

    // $scope.testApi = function (){
    //     console.log(rgbToHex(0, 51, 255))
    //     var img = document.getElementById("image");
    //     $scope.dominant = colorThief.getColor(img)                  
    //     $scope.palette = colorThief.getPalette(img, 10);

    //     var thing = "rgb(103, 79, 62)"
    //     var color = "rgb(" + $scope.dominant[0] + ", " + $scope.dominant[1] + ", " + $scope.dominant[2] + ")"
    //     var one = "rgb(" + $scope.palette[1][0] + ", " + $scope.palette[1][1] + ", " + $scope.palette[1][2] + ")"
    //     var two = "rgb(" + $scope.palette[2][0] + ", " + $scope.palette[2][1] + ", " + $scope.palette[2][2] + ")"
    //     var three = "rgb(" + $scope.palette[3][0] + ", " + $scope.palette[3][1] + ", " + $scope.palette[3][2] + ")"
    //     document.getElementById('dominant').style.backgroundColor = color
    //     document.getElementById('one').style.backgroundColor = one
    //     document.getElementById('two').style.backgroundColor = two
    //     document.getElementById('three').style.backgroundColor = three
    //   }


})