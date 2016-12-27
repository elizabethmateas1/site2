$(document).ready(function() {


  // var text_to_get = 'home';
  var test_str = window.location.pathname;
  var start_pos = test_str.indexOf('/') + 1;
  var end_pos = test_str.indexOf('.',start_pos);
  var text_to_get = '.' + test_str.substring(start_pos,end_pos)

  if (text_to_get == './') {
    $('.home').addClass('active')
  } else {
    $(text_to_get).addClass('active');
  }

}); // end of document ready
