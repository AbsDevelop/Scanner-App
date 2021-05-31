// This is a JavaScript file

$(document).on('click', '#code', function(){
   cordova.plugins.barcodeScanner.scan(
      function (result) {
        if(result.cancelled == false)
        {
          $('#area').html("<h4>Result: " + result.text + "</h4><p><h4>Code format: " + result.format +"</h4>");
        }
        else  
        {
          $('#area').html("<h4 style='color:red';><i class='fas fa-exclamation-circle'></i>Hey, do you left the camera<i class='fas fa-exclamation-circle'></i></h4>");
        } 
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android 
      }
   );
});


