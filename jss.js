$(document).ready(function () {
  $(".header").click(function () {
    // $("html , body").scrollTop(800)
    $(".header").animate(
      {
        scrollTop: 0
      },
      3000
    );
  });
  $(".top-btn").click(function(){
    // $("html , body").scrollTop(800)
    $("html , body").animate({
      "scrollTop": 0 ,
    },200)
  })





  $(" .con > .menu-box").click(function(){
    $(".hidden-menu").addClass("active")
    $(".hidden-2-menu").addClass("active")
  })
  $(" .hidden-menu > .top-logo-bar > .img2-box").click(function(){
    $(".hidden-menu").removeClass("active")

    $(".hidden-2-menu").removeClass("active")
  })
  $(".hidden-2-menu").click(function(){
    $(".hidden-menu").removeClass("active")

    $(".hidden-2-menu").removeClass("active")
  })


    $('.slide').slick({
      infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 300,
    dots: true,


  



    });

    $(".left-btn").click(function(){
    
      $('.slide').slick('slickPrev')
      
    })
    $(".right-btn").click(function(){
      
      $('.slide').slick('slickNext')
      
    })



});
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();

  console.log(scrollTop);
  if (scrollTop == 0) {
    $(".header").removeClass("active");
  } else if (scrollTop > 0) {
    $(".header").addClass("active");
  }









});
