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
      reverse:false
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
      reverse:false
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
      reverse:false
    });

    
  scene03.setTween(sec03_tl); // 애니메이션 등록
  scene03.addTo(controller); // 컨트롤러 등록
  //scene03.addIndicators(); // 인디케이터 등록





  let sec04_tl = gsap.timeline()
  
  let sec04_ani01 = gsap.from(".section04 >  .title-bg > .one" , {
    "opacity": 0 ,
    y : "30px" ,
  })
  let sec04_ani02 = gsap.from(".section04 >  .title-bg > .two" , {
    "opacity": 0 ,
    y : "30px" ,
  })
  let sec04_ani03 = gsap.from(".section04 >  .title-bg > .three" , {
    "opacity": 0 ,
    y : "30px" ,
  })
  let sec04_ani04 = gsap.from(".section04 >   .title" , {
    "opacity": 0 ,
    y : "50px" ,
  })
  let sec04_ani05 = gsap.from(".section04 >   .sub-title" , {
    "opacity": 0 ,
    y : "50px" ,
  })
  let sec04_ani06 = gsap.from(".section04 >   .txt" , {
    "opacity": 0 ,
    y : "50px" ,
  })
  let sec04_ani07 = gsap.from(".section04 >   .swiper" , {
    "opacity": 0 ,
    y : "50px" ,
  })
  let sec04_ani08 = gsap.from(".section04" , {
    "opacity": 0 ,
    y : "100px" ,
  })

  sec04_tl.add(sec04_ani08)
  sec04_tl.add(sec04_ani01,0.2)
  sec04_tl.add(sec04_ani02,0.4)
  sec04_tl.add(sec04_ani03,0.6)
  sec04_tl.add(sec04_ani04,0.8)
  sec04_tl.add(sec04_ani05,1)
  sec04_tl.add(sec04_ani06,1.2)
  sec04_tl.add(sec04_ani07,1.4)
  


  let scene04 = new ScrollMagic.Scene({
    triggerElement: ".special-section", // 스타트 지점을 생성
    offset: 800 , // 스타트 지점을 이동
    triggerHook: 0.3 , // 트리거 위치 지정
    reverse:false
  });

scene04.setTween(sec04_tl); // 애니메이션 등록
scene04.addTo(controller); // 컨트롤러 등록
// scene01.addIndicators(); // 인디케이터 등록









//ss









let sec05_tl = gsap.timeline()
  
let sec05_ani01 = gsap.from(".section05 > .con > .title-bg > .one" , {
  "opacity": 0 ,
  y : "30px" ,
})
let sec05_ani02 = gsap.from(".section05 > .con > .title-bg > .two" , {
  "opacity": 0 ,
  y : "30px" ,
})
let sec05_ani03 = gsap.from(".section05 > .con > .title-bg > .three" , {
  "opacity": 0 ,
  y : "30px" ,
})
let sec05_ani04 = gsap.from(".section05 >  .con > .title" , {
  "opacity": 0 ,
  y : "50px" ,
})
let sec05_ani05 = gsap.from(".section05 >  .con > .sub-title" , {
  "opacity": 0 ,
  y : "50px" ,
})
let sec05_ani06 = gsap.from(".section05 > .con >  .content-wrap > .content-box01" , {
  "opacity": 0 ,
  y : "50px" ,
})
let sec05_ani07 = gsap.from(".section05 >  .con > .content-wrap > .content-box02" , {
  "opacity": 0 ,
  y : "50px" ,
})
let sec05_ani08 = gsap.from(".section05 .con > .content-wrap > .content-box03" , {
  "opacity": 0 ,
  y : "50px" ,
})
let sec05_ani09 = gsap.from(".section05 >  .con > .content-wrap > .content-box04" , {
  "opacity": 0 ,
  y : "50px" ,
})
let sec05_ani10 = gsap.from(".section05 .con > .content-wrap > .content-box05" , {
  "opacity": 0 ,
  y : "50px" ,
})

sec05_tl.add(sec05_ani01)
sec05_tl.add(sec05_ani02,0.2)
sec05_tl.add(sec05_ani03,0.4)
sec05_tl.add(sec05_ani04,0.6)
sec05_tl.add(sec05_ani05,0.8)
sec05_tl.add(sec05_ani06,1)
sec05_tl.add(sec05_ani07,1.2)
sec05_tl.add(sec05_ani08,1.4)
sec05_tl.add(sec05_ani09,1.6)
sec05_tl.add(sec05_ani10,1.8)


let scene05 = new ScrollMagic.Scene({
  triggerElement: ".section04", // 스타트 지점을 생성
  offset: 300 , // 스타트 지점을 이동
  triggerHook: 0.3 , // 트리거 위치 지정
  reverse:false
});

scene05.setTween(sec05_tl); // 애니메이션 등록
scene05.addTo(controller); // 컨트롤러 등록
//scene05.addIndicators(); // 인디케이터 등록
















let sec06_tl = gsap.timeline()
  
let sec06_ani01 = gsap.from(".special-section > .con >  .title-bg > .one" , {
  "opacity": 0 ,
  y : "50px" ,
})
let sec06_ani02 = gsap.from(".special-section > .con > .title-bg > .two" , {
  "opacity": 0 ,
  y : "50px" ,
})
let sec06_ani03 = gsap.from(".special-section > .con > .title-bg > .three" , {
  "opacity": 0 ,
  y : "50px" ,
})
let sec06_ani04 = gsap.from(".special-section > .con >  .title > .title-one" , {
  "opacity": 0 ,
  y : "50px" ,
})
let sec06_ani05 = gsap.from(".special-section > .con >  .title > .title-two" , {
  "opacity": 0 ,
  y : "50px" ,
})
let sec06_ani06 = gsap.from(".special-section >  .main-wrap > .ad-box" , {
  "opacity": 0 ,
  x : "-200px" ,
})
let sec06_ani07 = gsap.from(".special-section >   .main-wrap > .main-box > .blue-box" , {
  "opacity": 0 ,
  x : "-200px" ,
})

sec06_tl.add(sec06_ani01,0.2)
sec06_tl.add(sec06_ani02,0.4)
sec06_tl.add(sec06_ani03,0.6)
sec06_tl.add(sec06_ani04,0.8)
sec06_tl.add(sec06_ani05,1)
sec06_tl.add(sec06_ani06,1.4)
sec06_tl.add(sec06_ani07,1.8)



let scene06 = new ScrollMagic.Scene({
  triggerElement: ".section03", // 스타트 지점을 생성
  offset: 850 , // 스타트 지점을 이동
  triggerHook: 0.3 , // 트리거 위치 지정
  reverse:false
});

scene06.setTween(sec06_tl); // 애니메이션 등록
scene06.addTo(controller); // 컨트롤러 등록
// scene01.addIndicators(); // 인디케이터 등록




























  

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
