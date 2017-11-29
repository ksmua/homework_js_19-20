$(document).ready(function () {
  // $(".accordion_content").hide();
  // $(".accordion_cuption--active").next(".accordion_content").show();
  
  $(".accordion_cuption").click( function () {

  var cuptions = document.getElementsByClassName("accordion_cuption");
  for (var i=0; i < cuptions.length; i++){
    // console.log(cuptions[i]);
    cuptions[i].className = "accordion_cuption";
  }

  var cuptionSelector = document.getElementsByClassName("accordion_cuption__selector");
  for (var i=0; i < cuptionSelector.length; i++){
    // console.log(cuptionSelector[i]);
    cuptionSelector[i].className = "accordion_cuption__selector";
    cuptionSelector[i].innerHTML = "+";
  }

  var cuptionSelector = document.getElementsByClassName("accordion_cuption__content");
  for (var i=0; i < cuptionSelector.length; i++){
    // console.log(cuptionSelector[i]);
    cuptionSelector[i].className = "accordion_cuption__content";
  }

  var cuptionSelector = document.getElementsByClassName("accordion_content");
  for (var i=0; i < cuptionSelector.length; i++){
    // console.log(cuptionSelector[i]);
    cuptionSelector[i].className = "accordion_content";
  }

    $(this).next(".accordion_content").addClass("accordion_content--active");
    $(this).addClass(".accordion_cuption--active");
    $(this).children(".accordion_cuption__selector").addClass("accordion_cuption__selector--active");
    $(this).children(".accordion_cuption__selector").text("-");
    $(this).children(".accordion_cuption__content").addClass("accordion_cuption__content--active");
  });
});
