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
  











  $(" .side-fixed-bar > .side-left").click(function(){
    $(".side-fixed-bar").toggleClass("active")
  })













    $('.slide').slick({
      infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    pauseOnHover: false ,

  



    });

    $(".left-btn").click(function(){
    
      $('.slide').slick('slickPrev')
      
    })
    $(".right-btn").click(function(){
      
      $('.slide').slick('slickNext')
      
    })




    $(".section02 > .con > ul > li").click(function(){
      let num = $(this).index()

      $(".section02 > .con > ul > li").eq(num).addClass("active")
      $(".section02 > .con > ul > li").eq(num).siblings().removeClass("active")
      $(".section02 > .con > .content-wrap").eq(num).addClass("active")
      $(".section02 > .con > .content-wrap").eq(num).siblings().removeClass("active")

    })


    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 7,
      spaceBetween: 30,
      centeredSlides: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



$("a").click(function(){
  return false; // return false : 모든 기능 차단
});



});
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();

  console.log(scrollTop);
  if (scrollTop == 0) {
    $(".header").removeClass("active");
  } else if (scrollTop > 0) {
    $(".header").addClass("active");
  }

  if(scrollTop>=600){
    $(".top-btn").addClass("active")
  } else if(scrollTop < 300){
    $(".top-btn").removeClass("active")
  }








});
