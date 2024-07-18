
//section1 - carousel
// bxSlider.js Plug-in/Library

//제이쿼리 라이브러리
//bx슬라이더 라이브러리
//리액트 라이브러리
//부트스크랩 프레임워크
/*
프레임워크는 애플리케이션의 구조 또는 틀을 제공하며, 개발을 위한 기본적인 형태와 필수 요소를 포함하고 있습니다. 프레임워크가 정한 규칙과 구조 내에서 개발을 진행해야 합니다.

라이브러리는 특정 기능을 수행하는 코드의 집합으로, 개발자가 필요에 따라 선택적으로 사용할 수 있습니다.

플러그인 어떤 특정한 문제를 해결하기 위해 컴포넌트이다.
*/
/*
//바닐라 스크립트 - 
window.addEventListener('DOMContentLoaded', function(){
    dom문서가 준비되면 실행
});
*/
//제이쿼리
// $(document).click(function(){});
// $(document).mouseenter(function(){});
// $(document).mouseleave(function(){});
$(document).ready(function(){
    //문서가 준비되면 실행할 코드;


$('.slide').bxSlider({
    //general 
    //mode: 'horizontal' 기본'vertical','fade'
    //자동슬라이드 모션 + start/stop 버튼 표시
    //mode: 'fade',
    //기본 값 speed: 500,
    //slideMargin: 0 => 이미지 사이의 여백
   // easing : https://gsgd.co.uk/sandbox/jquery/easing/   
    // 기본값pager: true,

    /////////////////////////////////////////////////////////////
    pager: true,
    //pagerType: 'full'(기본값),
    //pagerType: 'short',
   // pagerShortSeparator: '/',
    //pagerShortSeparator: ' | ',
    //controls:true, next/prev 버튼

    ///////////////////////////////////////////////////////////
    controls:true,
    speed: 500,

    /////////////////////////////////////////////////////////////////

    //auto: true(기본값) -> 자동전환
    auto: true,
    autoControls: false,
    //클릭시 자동 슬라이드 정지
    stopAutoOnClick: true,
    //페이저는 아래 동그라미 indicattor or pagination
    //일시정지시간
    pause: 4000,
    autoStart: true,
    //autoDirection: 'next'(기본값), 'prev',
    //autoHover: false(기본값), true이면 슬라이드 호버시 일시정지
    //autoDelay

    ////////////////////////////////////////////////////////
    //슬라이드 1장 크기 단위 px
    slideWidth: 1530

  });

}); // document.ready() end
  
