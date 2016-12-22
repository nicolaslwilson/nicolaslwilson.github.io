function toggleSiblings() {
  $(this).nextAll().slideToggle();
  var icon = $(this).find(".fa")
  if (icon.hasClass("fa-minus")) {
    icon.removeClass("fa-minus");
    icon.addClass("fa-plus");
  }
  else if (icon.hasClass("fa-plus")) {
    icon.removeClass("fa-plus");
    icon.addClass("fa-minus");
  }
}

$( document ).ready(function() {
  $( ".section-header" ).on("click", toggleSiblings);
  $(".job").find("h4").trigger("click");
});
