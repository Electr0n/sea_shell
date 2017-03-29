// $(document).ready(function() {
//   var docH = $(window).height();
//   var contentH = $('#footer').position().top + $('#footer').height();
//   if (contentH < docH) {
//     $('#footer').css("margin-top", (docH - contentH) + 'px');
//   }
// });

$(document).ready(function(){
  $(".panel.panel-default").find("a").click(function(){
    if ($(this).attr('href').indexOf("collapse") < 0) {
      window.location.hash = ($(this).attr('href'));
      $(this).parent().parent().addClass('active');
      $(".in").removeClass('in');
    }
  });
});