$(document).ready(function () {
  console.log("Start serviceshover >>>");
  
  // $("#cli").click(function () {
  //   console.log("mousein");
  // });

  $(".services-list__item").each(function(){
    // console.log("list__caption");
    
    $(this).click(function(){
      console.log("click");
    });

    $(this).mouseover(function(){
      // $(this).css("border", "3px solid red");
      console.log("mouseover");
    });
    
    $(this).mouseout(function(){
      console.log("mouseout");
      //(this).css("border", "1px solid red");
    });
  });
});