$(document).ready(function(){
  //sidebar slide
    $(".menuToggle").click(function() {
      $(this).toggleClass("inside");
      $(".sidebar").toggleClass("sideShow");
      $(".avatar img").toggleClass("show");
      $(".logo img").toggleClass("alpha");
      $(".icon-menu").toggleClass("icon-arrow-left");
    });
});
