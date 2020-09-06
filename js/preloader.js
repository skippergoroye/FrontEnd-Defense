$(function(){
    setTimeout(
      function()
      {
        $("#preloader").fadeOut(200, function(){
          $("#inner-body-container").css("-ms-filter", "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)");
          $("#inner-body-container").css("filter", "alpha(opacity=100)");
          $("#inner-body-container").css("-moz-opacity", "1");
          $("#inner-body-container").css("-khtml-opacity", "1");
          $("#inner-body-container").css("opacity", "1");
        })
      }, 400);
  })