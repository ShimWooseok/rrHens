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

    var controller = new ScrollMagic.Controller();

    let sec01_tl = gsap.timeline()
  
    let sec01_ani01 = gsap.from(".section01 > .con > .title-bg > .one" , {
      "opacity": 0 ,
      y : "30px" ,
    })
    let sec01_ani02 = gsap.from(".section01 > .con > .title-bg > .two" , {
      "opacity": 0 ,
      y : "30px" ,
    })
    let sec01_ani03 = gsap.from(".section01 > .con > .title-bg > .three" , {
      "opacity": 0 ,
      y : "30px" ,
    })
    let sec01_ani04 = gsap.from(".section01 > .con > .title-box > .title" , {
      "opacity": 0 ,
      y : "50px" ,
    })
    let sec01_ani05 = gsap.from(".section01 > .con > .title-box > .txt" , {
      "opacity": 0 ,
      y : "50px" ,
    })

    sec01_tl.add(sec01_ani01)
    sec01_tl.add(sec01_ani02,0.2)
    sec01_tl.add(sec01_ani03,0.4)
    sec01_tl.add(sec01_ani04,0.6)
    sec01_tl.add(sec01_ani05,0.8)

    let scene01 = new ScrollMagic.Scene({
      triggerElement: ".slide-wrap", // 스타트 지점을 생성
      offset: 500 , // 스타트 지점을 이동
      triggerHook: 0.3 , // 트리거 위치 지정
    });

  scene01.setTween(sec01_tl); // 애니메이션 등록
  scene01.addTo(controller); // 컨트롤러 등록
 // scene01.addIndicators(); // 인디케이터 등록

    let sec02_tl = gsap.timeline()
  
    let sec02_ani01 = gsap.from(".section01 > .con > .content-wrap > .move01" , {
      "opacity": 0 ,
      y : "50px" ,
    })
    let sec02_ani02 = gsap.from(".section01 > .con > .content-wrap > .move02" , {
      "opacity": 0 ,
      y : "50px" ,
    })
    let sec02_ani03 = gsap.from(".section01 > .con > .content-wrap > .move03" , {
      "opacity": 0 ,
      y : "50px" ,
    })
    let sec02_ani04 = gsap.from(".section01 > .con > .content-wrap > .move04" , {
      "opacity": 0 ,
      y : "50px" ,
    })

    sec02_tl.add(sec02_ani01,1)
    sec02_tl.add(sec02_ani02,1.2)
    sec02_tl.add(sec02_ani03,1.4)
    sec02_tl.add(sec02_ani04,1.6)

    let scene02 = new ScrollMagic.Scene({
      triggerElement: ".slide-wrap", // 스타트 지점을 생성
      offset: 500, // 스타트 지점을 이동
      triggerHook: 0.3 , // 트리거 위치 지정
    });

    
  scene02.setTween(sec02_tl); // 애니메이션 등록
  scene02.addTo(controller); // 컨트롤러 등록
  //scene02.addIndicators(); // 인디케이터 등록




 let sec03_tl = gsap.timeline()
  
    let sec03_ani01 = gsap.from(".section03 > .con > .title-bg > .one" , {
      "opacity": 0 ,
      y : "30px" ,
    })
    let sec03_ani02 = gsap.from(".section03 > .con > .title-bg > .two" , {
      "opacity": 0 ,
      y : "30px" ,
    })
    let sec03_ani03 = gsap.from(".section03 > .con > .title-bg > .three" , {
      "opacity": 0 ,
      y : "30px" ,
    })
    let sec03_ani04 = gsap.from(".section03 > .con > .title" , {
      "opacity": 0 ,
      y : "50px" ,
    })
    let sec03_ani05 = gsap.from(".section03 > .con  > .sub-title" , {
      "opacity": 0 ,
      y : "50px" ,
    })
    let sec03_ani06 = gsap.from(".section03 > .con > .content-wrap > .content01" , {
      "opacity": 0 ,
      y : "50px" ,
    })
    let sec03_ani07 = gsap.from(".section03 > .con  > .content-wrap > .content02" , {
      "opacity": 0 ,
      y : "50px" ,
    })
    let sec03_ani08 = gsap.from(".section03 > .con  > .content-wrap > .content03" , {
      "opacity": 0 ,
      y : "50px" ,
    })
    let sec03_ani09 = gsap.from(".section03 > .con > .content-wrap > .content04" , {
      "opacity": 0 ,
      y : "50px" ,
    })


    sec03_tl.add(sec03_ani01)
    sec03_tl.add(sec03_ani02,0.2)
    sec03_tl.add(sec03_ani03,0.4)
    sec03_tl.add(sec03_ani04,0.6)
    sec03_tl.add(sec03_ani05,0.8)
    sec03_tl.add(sec03_ani06,1)
    sec03_tl.add(sec03_ani07,1.1)
    sec03_tl.add(sec03_ani08,1.2)
    sec03_tl.add(sec03_ani09,1.3)

    let scene03 = new ScrollMagic.Scene({
      triggerElement: ".section02", // 스타트 지점을 생성
      offset: 750 , // 스타트 지점을 이동
      triggerHook: 0.3 , // 트리거 위치 지정
    });

    
  scene03.setTween(sec03_tl); // 애니메이션 등록
  scene03.addTo(controller); // 컨트롤러 등록
  //scene03.addIndicators(); // 인디케이터 등록




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
