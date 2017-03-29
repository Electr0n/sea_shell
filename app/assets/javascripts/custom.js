$(document).ready(function(){
  // for location hash
  var l;
  var check_url = function (){
    l = $("a[href='" + window.location.hash + "']")
    l.trigger('click');
    if (l.parent().prop('tagName')=='LI'){
      $('.panel-collapse').removeClass('in');
      l.parent().parent().parent().addClass('in');
    }
    else{
      l.parent().parent().addClass('active');
    }
  }
  // when open page first time with hash
  if (window.location.hash.length == 0) {
    $("a[href='#main']").parent().parent().addClass('active');
  } 
  else {
    check_url();
  }
  // when change url
  $(window).on('hashchange', function() {
    check_url();
  });
  $(".panel.panel-default").find("a").click(function(){
    // add hash to url
    if ($(this).attr('href').indexOf("collapse") < 0) {
      window.location.hash = ($(this).attr('href'));
      // clean active classes
      $('.panel-heading').removeClass('active');
      $('.list-group-item').removeClass('active');
      // if this header-link add active class
      if ($(this).parent().prop('tagName') != 'LI'){
        $(this).parent().parent().addClass('active');
      }
    }
  });
});