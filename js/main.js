
$(document).ready(function () {
  $('.quiz').slick({
     infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
    draggable: false,
    dots: false,
    variableWidth: true,
    swipe: false,
    adaptiveHeight: true,
    arrows: false
  });
  var count = 0;
  $('.btn').on('click',function(){
    if ($(this).hasClass('btn-a')){
      count +=1;
    } else if ($(this).hasClass('btn-b')){
      count +=2;
    } else if ($(this).hasClass('btn-c')){
      count +=3;
    };
    $('.quiz').slick("slickNext");
  });
  $('.get_result').on('click',function(){
    $(this).unbind("click");
    if ((count > 4)&&(count < 8)){
      $('.result-1').show();
    } else if ((count > 7)&&(count < 13)){
      $('.result-2').show();
    } else if ((count > 12)&&(count < 20)){
      $('.result-3').show();
    }

    $('.quiz').slick("slickNext");
  });


  $('a[data-slide]').click(function(e) {
      e.preventDefault();
      var slideno = $(this).data('slide');
      $('.slider-nav').slick('slickGoTo', slideno - 1);
  });
})