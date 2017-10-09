$(document).ready(function () {
  console.log("serviceshover");
  $("services-list__img").click(function(){
    console.log("click");
    // $("this").text("Мышка УШЛА :( ").css("display", "none");
  });
  
  var sevicesList = document.getElementsByClassName("services-list__img");
  for (var i=0; i < sevicesList.length; i++){
    console.log(sevicesList[i]);
    // sevicesList[i].
    // $(this).mouseout(function(){
    //     $(this).css("border", "none");
    // });
  }
});