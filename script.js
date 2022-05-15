$(function () {
  $('#button').click(function () {
    $('.modal').addClass('open');

    if ($('.modal').hasClass('open')) {
      $('.cont').addClass('blur');
      $('.body').addClass('blur');
    }
  });

  $('.close').click(function () {
    $('.modal').removeClass('open');
    $('.cont').removeClass('blur');
    $('.body').removeClass('blur');
  });
});

$(function () {
  $('#button1').click(function () {
    $('.modal').addClass('open');

    if ($('.modal').hasClass('open')) {
      $('.cont').addClass('blur');
      $('.body').addClass('blur');
    }
  });

  $('.close').click(function () {
    $('.modal').removeClass('open');
    $('.cont').removeClass('blur');
    $('.body').removeClass('blur');
  });
});