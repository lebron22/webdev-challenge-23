$(() => {
  const $hamburger = $(".page-nav__hamburger");
  const $top = $(".top");
  const $bottom = $(".bottom");
  const $nav = $(".page-nav__menu");

  // hamburger menu

  $hamburger.on("click", function() {
    $nav.toggleClass("mobile");

    if ($nav.hasClass("mobile")) {
      $(this).css({
        transform: "rotate(45deg)",
        transition: "0.3s linear"
      });

      $top.css({
        opacity: "0",
        transition: "0.3s"
      });

      $bottom.css({
        transform: "rotate(-90deg) translateX(17.5px)",
        transition: "0.3s linear"
      });
    } else {
      $(this).css({
        transform: "rotate(0deg)",
        transition: "0.3s linear"
      });

      $top.css({ opacity: "1" });

      $bottom.css({
        transform: "rotate(0deg) translate(0, -50%)",
        transition: "0.3s linear"
      });
    }
  });
});
