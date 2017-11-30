$(document).ready(function () {
  
  $(".services_list__item").each(function(){
    
    // $(this).click(function(){
    //   console.log("click");
    // });

    $(this).mouseenter(function(){
      $(this).prepend('<div class="fade_block">+</div>');
    });
    
    $(this).mouseleave(function(){
      $(".fade_block").remove();
    });
 
  });
});