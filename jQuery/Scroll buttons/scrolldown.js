$(function() {
  $('a[href^="#"]').click(function() {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500); //500 - scroll length (ms)
    return false;
  });
});
