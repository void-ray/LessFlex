var mixer = mixitup (".container_filter");
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
  }, 500);
    return false;
    });
  });