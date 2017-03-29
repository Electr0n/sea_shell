$(document).ready(function(){
  var p = window.location.pathname;
  // add active class to current link && open accordion
  var x = $('a[href="' + p + '"]');
  if (x.parent().prop('tagName') == "H4")
    {
      x.parent().parent().addClass("active")
    }
  else
    {
      x.parent().addClass("active");
      x.parent().parent().parent().addClass("in");
    }
  // $('a[href="' + p + '"]').click(function(){
  //   alert('hey');
  //   if (x.parent().prop('tagName') == "H4")
  //     {
  //       x.parent().parent().addClass("active")
  //     }
  //   else
  //     {
  //       x.parent().addClass("active");
  //       x.parent().parent().parent().addClass("in");
  //     }
  // });
});