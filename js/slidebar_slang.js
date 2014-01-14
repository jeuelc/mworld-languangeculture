/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundSlang.pause(); bgsoundSlang.currentTime = 0; 
});

$('.menubtnSlang').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnSlang').css('background-position', '0px -90px');
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

$('.homebtnSlang').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnSlang').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnSlang').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnSlang').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnSlang').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnSlang').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnSlang').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnSlang').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnSlang').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnSlang').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnSlang').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnSlang').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bSlang').position();
  if (botsposition.left == 1024) {
    $('.bSlang').css({'opacity':1});
    $('.plSlang').css({'opacity':1});
    $('.fSlang').css({'opacity':1});
    $('.bSlang').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plSlang').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fSlang').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bSlang').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bSlang').css({'left':'1024px'}); });
    $('.plSlang').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plSlang').css({'left':'1024px'}); });
    $('.fSlang').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fSlang').css({'left':'1024px'}); });
  }
});

$('.rwSlang').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwSlang').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsSlang').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsSlang').css('background-position-y', '-73px');
    }, 300);
});

$('.fwSlang').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwSlang').css('background-position-y', '-73px');
    }, 300);
});