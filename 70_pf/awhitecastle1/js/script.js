window.addEventListener("DOMContentLoaded", () => {

    // 모바일 햄버거 버튼 모양 모션 처리와 헤더 등장 모션

    // 요소 찾기
    const nav = document.querySelector("nav");
    const collapsedMenuIcon = document.querySelector(".collapsedMenuIcon");

    // 이벤트 처리
    collapsedMenuIcon.onclick = () => {
        // 함수 호출
        btnMotion(event.currentTarget);
    };

    // 함수 선언
    function btnMotion(x) {
        // 햄버거 버튼: 트리플바 -> x로 바뀜
        // 또 누르면 x -> 트리플바
        x.classList.toggle("change");

        // nav 태그에 change가 추가
        nav.classList.toggle("change");
    }
    

});

$(document).ready(function(){

    $('.sec-wrap').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: true,
        pager: true,
        // slideWidth: 600
      });

});

//section 2

const secTwoLists = document.querySelectorAll('#sec2>ul>li');

const frames = [
    {transform: 'rotate(180deg)'},
    {transform: 'rotate(0deg)'},
   
];

const options = {
    duration: 2000,
    delay: 700,
    easing: 'ease',
    fill: 'forwards'
}


secTwoLists.forEach(item=>{
    item.addEventListener('mouseover', function(){
        item.animate(frames, options);
    });
});




//sec 3
$(() => {
    $('.slider').slick({
        // 데스크탑
        // 자동 슬라이드
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        // 현재 보이는 슬라이드 수
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '145px',
        responsive: [
            {
                // 992 이하 테블릿
                breakpoint: 992,
                settings: {
                    // arrows: false -> 좌우버튼 숨기기
                    centerMode: true,
                    centerPadding: '180px',
                    slidesToShow: 1
                }
            },
            {
                // 768 이하 폰
                breakpoint: 768,
                settings: {
                    // arrows: false -> 좌우버튼 숨기기
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            }
        ]
    });
}); // ready 이벤트