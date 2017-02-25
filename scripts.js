$(document).ready(function(){
  //d = sqrt 3 /2 D
  // console.log($(window).width());
  // console.log($(window).height());

  respHexCard("hex-container-1", "33%", "gray", "gray");
  respHexCard("hex-container-2", "33%", "gray", "gray");
  respHexCard("hex-container-3", "33%", "gray", "gray");
  respHexCard("hex-container-4", "33%", "transparent", "transparent");
  respHexCard("hex-container-5", "33%", "gray", "gray");
  respHexCard("hex-container-6", "33%", "gray", "gray");
  respHexCard("hex-container-7", "33%", "gray", "gray");

  $('#hex-card-1, #hex-card-2, #hex-card-3, #hex-card-5, #hex-card-6, #hex-card-7').on('click',function(){
    $(this).toggleClass('flipped');
  });

  addHexPic('hex-container-3', './screenshot 2.jpg', './code.jpg');

  $('.front-4').append('<div class="intro-text">Hello World.<br> My name is Chris Caldwell. This is my portfolio site which show projects I currently working on. Check em out.</div>');

  //click rotation
  $('#down-link').on('click', downTransition);
  $('#up-link').on('click', upTransition);

  //scrolling rotation
  // var yRotate = 0;
  var currentRotationAngle;

  $(document).on('mousewheel', function(e){
      currentRotationAngle = Math.acos($('#cube').css('transform').split(',')[5]) * 180/Math.PI;

      if(!currentRotationAngle){
        currentRotationAngle = 0;
      }

      if(e.originalEvent.wheelDeltaY <= -1 && currentRotationAngle <= 90){
        scrollDownTransition(currentRotationAngle + 1.2);
      }
      else if (e.originalEvent.wheelDeltaY >= 1 && currentRotationAngle > 0){
        scrollUpTransition(currentRotationAngle - 1.2);
      }

  });

});







function scrollDownTransition(y){
  // console.log("scroll down transition " + y);
    $('#cube').css('transform', 'rotateX(' + y + 'deg)');
    $('#skills-box').css('left', 5 * y / 90 + 'vw');
    $('#pic').css('right', 500 * y / 90 - 500 + 'px');
    $('.upper-section').css('opacity', 1 - y / 90);
    $('.lower-section').css('opacity', y / 90);
  }

function scrollUpTransition(y){
  // console.log("scroll down transition " + y);
    $('#cube').css('transform', 'rotateX(' + y + 'deg)');
    $('#skills-box').css('left', 5 * y / 90 + 'vw');
    $('#pic').css('right', 500 * y / 90 - 500 + 'px');
    $('.upper-section').css('opacity', 1 - y / 90);
    $('.lower-section').css('opacity', y / 90);
  }






function upTransition(){
  $('#cube').css({
    'transition':'transform 2s',
    'transform': 'rotateX(0deg)'
  });

  $('#skills-box').css({
    'transition':'left 2s',
    'left': '-50vw'
  });
  $('#pic').css({
    'transition':'right 2s',
    'right': '-500px'
  });
  $('.lower-section').css({
    'transition':'opacity 2s',
    'opacity':'0'
  });
  $('.upper-section').css({
    'transition':'opacity 2s',
    'opacity':'100'
  });

  setTimeout(
    function(){
      $('#cube').css('transition', 'transform 0s');
      $('#skills-box').css('transition', 'left 0s');
      $('#pic').css('transition', 'right 0s');
      $('.lower-section').css('transition', 'opacity 0s');
      $('.upper-section').css('transition', 'opacity 0s');
    },2000);
}


function downTransition(){

  $('#cube').css({
    'transition':'transform 2s',
    'transform': 'rotateX(90deg)'
  });

  $('#cube').toggleClass('rotate');
  $('#skills-box').css({
    'transition':'left 2s',
    'left':'5vw'
  });
  $('#pic').css({
    'transition':'right 2s',
    'right':'0'
  });
  $('.upper-section').css({
    'transition':'opacity 2s',
    'opacity':'0'
  });
  $('.lower-section').css({
    'transition':'opacity 2s',
    'opacity':'100'
  });

  setTimeout(
    function(){
      $('#cube').css('transition', 'transform 0s');
      $('#skills-box').css('transition', 'left 0s');
      $('#pic').css('transition', 'right 0s');
      $('.lower-section').css('transition', 'opacity 0s');
      $('.upper-section').css('transition', 'opacity 0s');
    },2000);
}




function addHexPic(hexClass, frontSidePic, backSidePic){
  var shapeId = hexClass.slice(13, hexClass.length);
  console.log(shapeId);
  var shape = $('.' + hexClass);
  console.log(shape.width());
  if(frontSidePic){
    $('.front' + shapeId).prepend("<div class='hexpic-front" + shapeId + "'></div>").css({
      "background-color":"transparent"
    });

    $('.hexpic-front' + shapeId).css({
      "max-width" : shape.width(),
      "height" : Math.round(2 / Math.sqrt(3) * shape.width()),
      "position" : "relative",
      "-webkit-clip-path" : "polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0% 75%, 0% 20%)",
      "clip-path" : "polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0% 75%, 0% 20%)",
      "-moz-clip-path" : "polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0% 75%, 0% 20%)",
      "-o-clip-path" : "polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0% 75%, 0% 20%)",
      "-ms-clip-path" : "polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0% 75%, 0% 20%)", //reg hex
      "background-image" : "url('" + frontSidePic + "')",
      "background-size" : "cover",
      "background-position" : "55% 90%"
    });
  }
  if(backSidePic){
    $('.back' + shapeId).prepend("<div class='hexpic-back" + shapeId + "'></div>").css({
      "background-color" : "transparent"
    });
    $('.hexpic-back' + shapeId).css({
      "width" : shape.width(),
      "height" : Math.round(2 / Math.sqrt(3) * shape.width()),
      "position" : "relative",
      "-webkit-clip-path" : "polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0% 75%, 0% 20%)",
      "clip-path" : "polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0% 75%, 0% 20%)",
      "-moz-clip-path" : "polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0% 75%, 0% 20%)",
      "-o-clip-path" : "polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0% 75%, 0% 20%)",
      "-ms-clip-path" : "polygon(50% 0%, 100% 20%, 100% 75%, 50% 100%, 0% 75%, 0% 20%)",
      "background-image" : "url('" + backSidePic + "')",
      "background-size" : "cover"
    });
  }
}
