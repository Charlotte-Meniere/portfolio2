(function ($) {
  $(".underline").on("mouseenter", function () {
    $(this).css({
      borderBottom: "2px solid rgb( 255, 255, 255)",
      width: "30%",
      transition: "all 1s ease-in-out",
    });
  });

  $(".underline").on("mouseleave", function () {
    $(this).css({
      borderBottom: "2px solid rgb( 255, 255, 255)",
      width: "10%",
      transition: "all 1s ease-in-out",
    });
  });

  $(".dropdown-btn").on("click", function () {
    $(".basique").slideToggle();
  });
})(jQuery);
