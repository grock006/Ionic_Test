angular.module('starter.controllers', [])

  .controller('FormCtrl', function($scope, $state, $rootScope, imgURI, colorSelected, $http) {
      // $rootScope.imgURI = "images/test.jpg"
      console.log("imgURI")
      console.log(imgURI)
      console.log(colorSelected)

      $scope.details = false;
      console.log($scope.details)

      $rootScope.imgURI = imgURI;
      var rgb = colorSelected.replace(/[()]/g, "").replace(/rgb/, "").split(",")
      console.log(rgb)
      $scope.red = rgb[0]
      $scope.green = rgb[1]
      $scope.blue = rgb[2]
      // $scope.alpha = "100"
      $scope.hex = chroma(rgb).hex();
      document.getElementById('form-color-selected').style.backgroundColor = colorSelected
      console.log('<div style="width:200px;height:200px;background-color:' + colorSelected + '"></div>')

      

      $scope.sendEmail = function(form){

      console.log("imgURI")
      console.log(imgURI.replace("data:image/jpeg;base64,", ""))
      // remove the "image tag" from the IMGURI that was added
      console.log( '<img src="' + imgURI + '">')
      var modImg = imgURI.replace("data:image/jpeg;base64,", "");

      //this works when directly injected into the image tag
      // var test = "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"
      // var test = "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"

          var data = {
          'key': 'ZrkOtJ2ahIz4gOgsp8FsvQ',
          'message': {
            'from_email': 'help@opticolorinc.com',
            'from_name': 'ios app',
            'to': [
              {
                'email': 'help@opticolorinc.com',
                'name': 'YOUR_RECEIVER_NAME',
                'type': 'to'
              }
            ],
            'subject': 'ios App Data',
            'html': '<h1>html can be used</h1>' + $scope.user.companyName + '<div style="width:200px;height:200px;background-color:' + colorSelected + '"></div><img src="cid:test"/>',
            'inline_css': 'true',
            'text': 'sample text',
            "images": [
                          {
                              "name": "test",
                              "type": "image/png",
                              "content": modImg
                          }
                      ]
          }
        }
        // console.log(form)
        console.log("scope user")
        console.log($scope.user)
        $scope.submitted = true;


        $http.post('https://mandrillapp.com/api/1.0/messages/send.json', data)
            .success(function(data){
              //on success send success message
              console.log(data)
              console.log("success")
            })
            .error(function(err){
                console.log(err)
                console.log("error")
            })
        
        // if(form.$valid){
        //    console.log("valid")
        // }
        // else{
        //    console.log(document.body.scrollTop)
        //    console.log(document.documentElement.scrollTop);
        // }
      
      }



      $scope.user = {companyName: null, 
                     contactName: null, 
                     email: null, 
                     phone: null,
                     projectApp: null,
                     opacity: "",
                     base: null,
                     resin: null,
                     process: "",
                     compounding: "",
                     letdown: "",
                     thickness: null,
                     transmission: null,
                     source: ""}

      $scope.$watchCollection('[user.companyName, user.contactName, user.email, user.phone]', function(newValues, oldValues){
          if(newValues[0] && newValues[1] && newValues[2] && newValues[3]){
             $scope.details = true
          }
          else{
             $scope.details = false;
          }
      });

        $scope.$watchCollection('[user.projectApp, user.opacity, user.base, user.resin, user.process, user.compounding, user.letdown, user.thickness, user.transmission, user.source]'
          , function(newValues, oldValues){
          if(newValues[0] && newValues[1] && newValues[2] && newValues[3] && newValues[4] && newValues[5] && newValues[6] && newValues[7] && newValues[8] && newValues[9]){
             $scope.requirements = true
             $scope.match = true
          }
          else{
             $scope.requirements = false;
          }
      });



             


  })

  .controller('RequestCtrl', function($scope, $state, $rootScope, imgURI, colorSelected, $ionicHistory) {
      // $rootScope.imgURI = "images/test.jpg"
      console.log("RequestCtrl")
      console.log(imgURI)
      console.log(colorSelected)

      $scope.goBack = function() {
       $ionicHistory.goBack();
      };
  })

  .controller('ZoomCtrl', function($scope, $state, $rootScope) {
      // $rootScope.imgURI = "images/test.jpg"
      console.log("ZoomCtrl")
      console.log($rootScope.imgURI)
  })

  .controller('WheelCtrl', function($scope, $state, $rootScope) {
      console.log("WheelCtrl")
      console.log($scope.color)
      // do a watch on color
      $scope.color = {hex: ""};

      $scope.sendWheelDetails = function(){
        var colorSelected = document.getElementById('wheel-main').style.backgroundColor 
        console.log(colorSelected)
        // console.log(colorSelected)
        if(colorSelected){
          $rootScope.colorSelected = colorSelected
          $state.go('detail')
        }
      }

      $scope.sendForm = function(){
        var colorSelected = document.getElementById('wheel-main').style.backgroundColor 
        // console.log(colorSelected)
         if(colorSelected){
          $rootScope.colorSelected = colorSelected
          // $rootScope.imgURI = imgURI;
          $state.go('request')
        }
      }
      
      $scope.$watch('color.hex', function(newValue, oldValue) {
         rgb = newValue
         document.getElementById('wheel-main').style.backgroundColor = rgb;

        document.getElementById('wheel-bright-one').style.backgroundColor = chroma(rgb).brighten();
        document.getElementById('wheel-bright-two').style.backgroundColor = chroma(rgb).brighten(2);
        document.getElementById('wheel-bright-three').style.backgroundColor = chroma(rgb).brighten(3);


        document.getElementById('wheel-dark-one').style.backgroundColor = chroma(rgb).darken();
        document.getElementById('wheel-dark-two').style.backgroundColor = chroma(rgb).darken(2);
        document.getElementById('wheel-dark-three').style.backgroundColor = chroma(rgb).darken(3);
     
      }, true);
  })

  .controller('DetailCtrl', function($scope, $state, $rootScope, colorSelected, $ionicHistory) {
        // console.log("DetailCtrl")
        // console.log($rootScope.colorSelected)
        var rgb = colorSelected.replace(/[()]/g, "").replace(/rgb/, "").split(",")
        // test = "rgb(111, 112, 88)"
        // var rgb = test.replace(/[()]/g, "").replace(/rgb/, "").split(",")
        console.log(rgb)
        $scope.red = rgb[0]
        $scope.green = rgb[1]
        $scope.blue = rgb[2]
        $scope.alpha = "100"
        $scope.hex = chroma(rgb).hex();
        // break down rgb and assign to scope
        // console.log(colorSelected.slice(4,7))

        $scope.goBack = function() {
         $ionicHistory.goBack();
        };

        document.getElementById('detail-box').style.backgroundColor = colorSelected

        document.getElementById('main').style.backgroundColor = $scope.hex

        document.getElementById('bright-one').style.backgroundColor = chroma(rgb).brighten();
        document.getElementById('bright-two').style.backgroundColor = chroma(rgb).brighten(2);
        document.getElementById('bright-three').style.backgroundColor = chroma(rgb).brighten(3);


        document.getElementById('dark-one').style.backgroundColor = chroma(rgb).darken();
        document.getElementById('dark-two').style.backgroundColor = chroma(rgb).darken(2);
        document.getElementById('dark-three').style.backgroundColor = chroma(rgb).darken(3);
  })
  
  .controller('PhotoCtrl', function($scope, $stateParams, $state, $rootScope, imgURI) {

      $rootScope.imgURI = imgURI;
      console.log("imguri")
      console.log( $rootScope.imgURI)
      var colorThief = new ColorThief();
      var photo = document.getElementById("photo");
      $scope.showCheck = false;
      // console.log(photo)
      $scope.thing = "images/test.jpg"

      $scope.selectColor = function(color){
         // console.log(color)
         //need to hide checkmark before loading
         $scope.showCheck = color
         var colorSelected = document.getElementById(color).style.backgroundColor 
       
         document.getElementById('main-color').style.backgroundColor = colorSelected
         // document.getElementById(color).style.border = "2px solid black"
      }

      $scope.sendDetails = function(){
        console.log("sendDetails")
        var colorSelected = document.getElementById('main-color').style.backgroundColor 
        console.log(colorSelected)
        // console.log(colorSelected)
        if(colorSelected){
          $rootScope.colorSelected = colorSelected
          $state.go('detail')
        }
      }

      $scope.getZoom = function(){
        // var colorSelected = document.getElementById('main-color').style.backgroundColor 
        // console.log(colorSelected)
        // $rootScope.imgURI = $rootScope.imgURI
        // console.log()
          $rootScope.imgURI = imgURI;
          $state.go('zoom')
      }

      $scope.sendForm = function(){
        var colorSelected = document.getElementById('main-color').style.backgroundColor 
        // console.log(colorSelected)
         if(colorSelected){
          $rootScope.colorSelected = colorSelected
          $rootScope.imgURI = imgURI;
          $state.go('request')
        }
      }



      // $scope.$on('$ionicView.beforeEnter', function(){
      //    $scope.showCheck = false;
      // })


      $scope.$on('$ionicView.afterEnter', function(){
          var palette = colorThief.getPalette(photo, 12);
          // console.log(palette)
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
     
 
      
  })

  .controller('CaptureCtrl', function($scope, $stateParams, $cordovaCamera, $state, $rootScope) {



   $scope.takePhoto = function () {
      var options = {
        quality: 100, //100
        destinationType: Camera.DestinationType.DATA_URL, // FILE_URI
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true
      };
  
        $cordovaCamera.getPicture(options).then(function (imageData) {
            $rootScope.imgURI = "data:image/jpeg;base64," + imageData;
            $state.go('photo');
         
        }, function (err) {
            // An error occured. Show a message to the user
        });


    }
              
    $scope.choosePhoto = function () {
      var options = {
        quality: 100, //100
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
            $rootScope.imgURI = "data:image/jpeg;base64," + imageData;
            $state.go('photo')        
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


})


.controller('IntroCtrl', function($scope, $ionicSlideBoxDelegate, $state) {

  // $scope.startApp = function () {
  //   $state.go('app.search');
  //   // $localstorage.set('firstTime', 'true');
  // };

  $scope.next = function () {
    $ionicSlideBoxDelegate.next();
  };

  // $scope.previous = function () {
  //   $ionicSlideBoxDelegate.previous();
  // };

  // $scope.disableSwipe = function() {
  //   $ionicSlideBoxDelegate.enableSlide(false);
  // };

  // // Called each time the slide changes
  // $scope.slideChanged = function (index) {
  //   $scope.slideIndex = index;
  // };

  // $scope.currentSlide = IntroSlideService.index;


})