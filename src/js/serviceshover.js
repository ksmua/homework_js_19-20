$(document).ready(function () {
  console.log("serviceshover");
  
  $("services-list__img").each(function(){
    // console.log("click");
    
    $(this).mousein(function(){
      // $(this).css("border", "3px solid red");
      console.log("mousein");
    });
    
    $(this).mouseout(function(){
      console.log("mouseout");
      /*  */$(this).css("border", "none");
    });
  });
});