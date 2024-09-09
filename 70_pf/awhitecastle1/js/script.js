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

//section 2 이미지 90도 회전후 제자리

const secTwoLists = document.querySelectorAll('#sec2>ul>li');

secTwoLists.forEach(item=>{
    const frames = [
        {transform: 'rotate(90deg)'},
        {transform: 'rotate(0deg)'},
        {backgroundColor: '#888'},       
    ];
    
    const options = {
        duration: 2000,
        delay: 700,
        easing: 'ease',
        fill: 'forwards'
    }

    item.addEventListener('mouseover', function(){
        item.animate(frames, options);
    });
 
});


// section 3 scrolling
const scrolledItems = document.querySelectorAll('.scrolling>li');
const mousein = document.querySelector('#sec3');


mousein.addEventListener('mouseenter', scrolling);
function scrolling(){
    
    for(let i=0; i<scrolledItems.length; i++){
        const secframres = {
            // opacity: [0, 1],
            translate: ['2000px 0', 0],
            filter: ['blur(20px)', 'blur(0)']
        }
        const secoptions = {
            duration: 2000,  
            delay: 300*i,
            easing: "ease",      
            fill: "forwards"
        }
        scrolledItems[i].animate(secframres, secoptions);
    }

}


