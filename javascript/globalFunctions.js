function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  //copied https://codepen.io/shaikmaqsood/pen/XmydxJ
}

function parallax_height() {
  var scroll_top = $(this).scrollTop();
  var body_contetnt_top = $(".body-content").offset().top;
  var navbar_height = $(".navbar").outerHeight();
  $(".body-content").css({ "margin-top": navbar_height });
  $(".navbar").css({ height: navbar_height - scroll_top });
  //copied https://codepen.io/webmadewell/pen/zppMBX
}
$parallax_height();
$(window).scroll(function() {
  parallax_height();
});
$(window).resize(function() {
  parallax_height();
});
