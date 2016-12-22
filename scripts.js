function toggleSiblings() {
  $(this).nextAll().slideToggle();
  var icon = $(this).find(".fa")
  if (icon.hasClass("fa-minus-square-o")) {
    icon.removeClass("fa-minus-square-o");
    icon.addClass("fa-plus-square-o");
  }
  else if (icon.hasClass("fa-plus-square-o")) {
    icon.removeClass("fa-plus-square-o");
    icon.addClass("fa-minus-square-o");
  }
}

$( document ).ready(function() {
  $( ".section-header" ).on("click", toggleSiblings);
  $(".job").find("h4").trigger("click");
});
