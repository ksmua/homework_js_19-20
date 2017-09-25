"use strict";

$(document).ready(function () {
  $(".accordion_content").hide();
  $(".accordion_cuption--active").next(".accordion_content").show();
  
  $(".accordion_cuption").click( function () {

    $(this).next(".accordion_content").show();
    $(this).addClass(".accordion_cuption--active");
    $(this).children(".accordion_cuption__selector").addClass(".accordion_cuption__selector--active");
    $(this).children(".accordion_cuption__content").addClass(".accordion_cuption__content--active");
  });
});
