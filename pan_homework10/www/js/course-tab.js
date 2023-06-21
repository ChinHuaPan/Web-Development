"use strict";

/****** tab ******/
$(document).ready(function () {
  //find out the active tab
  $("ul.tabs").each(function () {
    let $active,
      $content,
      $links = $(this).find("a");

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $(
      $links.filter('[href="' + location.hash + '"]')[0] || $links[0]
    );
    // change to active
    $active.addClass("active");
    // change content
    $content = $($active[0].hash);

    // hide the previous content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // click event
    $(this).on("click", "a", function (e) {
      $active.removeClass("active");
      $content.hide();

      // pass the current tab
      $active = $(this);
      $content = $(this.hash);

      // change to active
      $active.addClass("active");
      $content.show();

      e.preventDefault(); // stop
    });
  });
});
