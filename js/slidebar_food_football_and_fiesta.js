/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundFoodFootballFiesta.pause(); bgsoundFoodFootballFiesta.currentTime = 0; 
});

$('.menubtnFoodFootballFiesta').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnFoodFootballFiesta').css('background-position', '0px -90px');
    }, 300);
  var housingpos = $('.menuhousing').position();
  if(housingpos.left == -234) {
    $('.menuhousing').animate({'left':'-334px','opacity':0}, 500, "easeInBack", function() { $('.menuhousing').css({'left':'-660px'}); });
    $('.homebtnholder').animate({'left':'3px','opacity':0}, 500, "easeInBack", function() { $('.homebtnholder').css({'left':'-93px'}); });
    $('.mpbtnholder').animate({'left':'80px','opacity':0}, 500, "easeInBack", function() { $('.mpbtnholder').css({'left':'-93px'}); });
    $('.cpbtnholder').animate({'left':'153px','opacity':0}, 500, "easeInBack", function() { $('.cpbtnholder').css({'left':'-93px'}); });
    $('.infobtnholder').animate({'left':'222px','opacity':0}, 500, "easeInBack", function() { $('.infobtnholder').css({'left':'-93px'}); });
    $('.credsbtnholder').animate({'left':'288px','opacity':0}, 500, "easeInBack", function() { $('.credsbtnholder').css({'left':'-93px'}); });
  } else {
    $('.menuhousing').css({'opacity':1});
    $('.credsbtnholder').css({'opacity':1});
    $('.infobtnholder').css({'opacity':1});
    $('.cpbtnholder').css({'opacity':1});
    $('.mpbtnholder').css({'opacity':1});
    $('.homebtnholder').css({'opacity':1});
    $('.menuhousing').animate({'left':'-234px'}, 1000, "easeInOutBack");
    $('.credsbtnholder').animate({'left':'368px'}, 1000, "easeInOutBack");
    $('.infobtnholder').animate({'left':'302px'}, 1100, "easeInOutBack");
    $('.cpbtnholder').animate({'left':'233px'}, 1200, "easeInOutBack");
    $('.mpbtnholder').animate({'left':'160px'}, 1300, "easeInOutBack");
    $('.homebtnholder').animate({'left':'83px'}, 1400, "easeInOutBack");
  }
});

$('.homebtnFoodFootballFiesta').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnFoodFootballFiesta').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnFoodFootballFiesta').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnFoodFootballFiesta').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnFoodFootballFiesta').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnFoodFootballFiesta').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnFoodFootballFiesta').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnFoodFootballFiesta').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnFoodFootballFiesta').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnFoodFootballFiesta').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnFoodFootballFiesta').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnFoodFootballFiesta').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bFoodFootballFiesta').position();
  if (botsposition.left == 1024) {
    $('.bFoodFootballFiesta').css({'opacity':1});
    $('.plFoodFootballFiesta').css({'opacity':1});
    $('.fFoodFootballFiesta').css({'opacity':1});
    $('.bFoodFootballFiesta').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plFoodFootballFiesta').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fFoodFootballFiesta').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bFoodFootballFiesta').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bFoodFootballFiesta').css({'left':'1024px'}); });
    $('.plFoodFootballFiesta').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plFoodFootballFiesta').css({'left':'1024px'}); });
    $('.fFoodFootballFiesta').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fFoodFootballFiesta').css({'left':'1024px'}); });
  }
});

$('.rwFoodFootballFiesta').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwFoodFootballFiesta').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsFoodFootballFiesta').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsFoodFootballFiesta').css('background-position-y', '-73px');
    }, 300);
});

$('.fwFoodFootballFiesta').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwFoodFootballFiesta').css('background-position-y', '-73px');
    }, 300);
});