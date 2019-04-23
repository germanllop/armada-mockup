$(document).ready(function () {
    console.log("ready");
    
  });

  $('.footer-armada').click(function(e){
    $('.footer-message').removeClass("footer-message-off");
  });

  $('.footer-message').click(function(e){
    $('.footer-message').addClass("footer-message-off");
  });