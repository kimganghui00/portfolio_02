$(document).ready(function(){

  //네비게이션
  $("#header, #header .nav-bg").mouseenter(function(){
    $("#header .depth, #header .nav-bg ").stop().slideDown(300);
    $("#header,.nav-bg").addClass("active");
  });
  $("#header .gnb").mouseleave(function(){
    $("#header .depth, #header .nav-bg ").stop().slideUp(100);
    $("#header").removeClass("active");
  });

  //네비게이션 테블릿 사이즈 안보이게
  $(window).on("resize", medianav);
  function medianav() {
    const headerWidth = $("#header").width();
    if (headerWidth < 1024) {
      $(".nav-bg").addClass("close");
    }else{
      $(".nav-bg").removeClass("close");
    }
  }

  //언어 버튼
  $("#header .option .language .lang_select").click(function(){
    $(this).toggleClass("acitve");
    $("#header .option .language .lang-list li a").toggleClass("active");
  });

  //메인비쥬얼
  let listArray = ["01. Sungchang","02. Technology ","03. Product"];

  let mv = new Swiper(".mv", {
    loop: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    //페이지네이션
    pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    type: 'bullets',
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<em>'+ listArray[index]+'</em>' + '<i></i>' + '<b></b>'  + '</span>';
      },
    },
    //textbox
    on: {
      slideChange : function(){
        $('.swiper-pagination-bullet').eq(this.realIndex).addClass('active').siblings().removeClass('active on');
        $('.holding span').eq(this.realIndex).addClass('active').siblings().removeClass('active');
        $('.holding span').eq(this.realIndex).addClass('on').siblings().removeClass('on');
      },
      slideChangeTransitionEnd : function(){
        $('.swiper-pagination-bullet').eq(this.realIndex).addClass('on');
      },
    }
  });

  //count
  $('.counting').each(function() {
    var $this = $(this),
    countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },{ 
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
        },
        complete: function() {
        $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        }
      });
  });

  // 스크롤 이벤트
  // const startCountersOnScroll = () => {
  //   const numSec = document.querySelector('.num-sec');
  //   const numSecOffsetTop = numSec.offsetTop;
  //   let started = false;

  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (scrollY >= numSecOffsetTop && !started) {
  //       const counters = document.querySelectorAll('.count');
  //       const maxValues = [20, 2201, 65498];
  //       counters.forEach((counterElement, index) => {
  //         setTimeout(() => counter(counterElement, maxValues[index]), 0);
  //       });
  //       started = true;
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   };
  //   window.addEventListener('scroll', handleScroll);
  // };
  // window.addEventListener('load', startCountersOnScroll);

  //뉴스
  $("#news .tab-list li:not(:first-child)").hide();

  $(".tab-name li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".tab-list li").eq(idx).fadeIn(500).siblings().fadeOut(0);
  });

  //패밀리사이트
  $(".family-site button").click(function(){
    $(this).toggleClass("active");
    $("#footer .footer-top .family-site .family-list").toggleClass("active");
  });


  //탑버튼
  $(window).scroll(function(){
    
    if( $(this).scrollTop() > 100 ){
      $("#top-btn").addClass("on");
    }
    else{
      $("#top-btn").removeClass("on");
    }
    
  });
    
  $("#top-btn").click(function(){
    window.scrollTo({top : 0, behavior: 'smooth'}); 
  });

  //ham 버튼
  $("#header .ham-btn").click(function(){
    $("body").toggleClass("scrollhidden");
    $(this).toggleClass("active");
    $("#header .mgnb-wrap").toggleClass("active");
  });

  //mgnb
  $(".mdepth").hide();

  $(".mgnb > li").click(function () {
    $(this).find(".mdepth").slideToggle();
    $(this).siblings().find(".mdepth").slideUp();
    $(this).find("a").toggleClass("active");
    $(this).siblings().find("a").removeClass();
  });

  //스크롤바-연혁
  // $(document).ready(function(){
  // var currentPosition = parseInt($(".bar").css("top"));
  // $(window).scroll(function() {
  //   var position = $(window).scrollTop(); 
  //   console.log(position);
  //   $(".bar").stop().animate({"top":position+currentPosition+"px"},1000);
  // });

  // console.clear();
  // let scrollbar = $('.scrollbar')
  // let scrollbarrHeight = scrollbar.height();
  // let scrollbarOffsetTop = scrollbar.offset().top;
  // let bar = $('.bar');
  // let barHeight = bar.height();
  // const DURATION = 1000;

  // $(window).resize(function(){
  //     scrollbarHeight = scrollbar.height();
  //     scrollbarOffsetTop = scrollbar.offset().top;
  //     barHeight = bar.height();
  //     // console.log('resize!');
  // })

  // $(window).scroll(function() {
  //     let scrollTop = $(this).scrollTop();
  //     let point;
  //     let endPoint = scrollbarHeight - barHeight;
  //     if ( scrollTop < scrollbarOffsetTop ) {
  //         point = 0;
  //     } else if ( scrollTop > endPoint ) {
  //         point = endPoint;
  //     } else {
  //         point = scrollTop - scrollbarOffsetTop; // 따라다니는 영역에서 우측 최상단에 위치
  //     }
  //     bar.stop().animate({top: point}, DURATION);
  // });

  $(document).ready(function(){ 
  var current_position = parseInt($(".bar").css("top")); 
  $(window).scroll(function() {
  var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
    $(".bar").stop().animate({"top":position+current_position+"px"},10000);
  });

  // 모바일 path 슬라이드 토글

  $(window).on("resize", path);
  function path() {
    const headerWidth = $("#header").width();
    if (headerWidth < 768) {
      $(".path-wrap .path-list li").click(function(){
        $(this).siblings().stop().slideToggle();
      });
    }else{

    }
  }
    









  });
});