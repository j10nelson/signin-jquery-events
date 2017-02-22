
$(function(){
  $('.signin').on('click', function() {
    $('.modal').fadeIn(1000);
  });

  $('.close').on('click', function() {
    $('.modal').fadeOut(1000);
  });

  $('.submit').on('click', function() {
    $('input').addClass('error');
  });

  $('input').click(function() {
    $('input').removeAttr('class');
  });
});
