/*
$(() => {
    
    // 슬라이드 이미지
    let idx = 0;
    setInterval(autoSlide, 2000);

    function autoSlide() {

        idx === 2 ? (idx = 0) : idx++;

        $("#slide li").eq(idx).fadeIn(1000, function () {
            if (idx === 0) idx = 3;
            $("#slide li").eq(idx - 1).fadeOut(1000);
            if (idx === 3) idx = 0;
        });
    }

});
*/


$(document).ready(function(){

    $('.image-slide>li a:gt(0)').hide();
    setInterval(function(){
        $('.image-slide>li a:first-child').fadeOut().next('a').fadeIn().end().appendTo('.image-slide>li');
    }, 3000);
});





const popup = document.querySelectorAll('.notice>ul>li>a');
const modal = document.querySelector('#modal');

const closingBtn = document.querySelector('button');

// popup[0].onclick = function(){
//     modal.style.display = "block";
// };

// closingBtn.onclick = function(){
//     modal.style.display = "none";
// };

//event.preventDefault(); => a 태그로 인한 3위로 팅기는 것 방지
// event.preventDefault();

popup[0].addEventListener('click', function(){
    modal.style.display = "block";
});

closingBtn.addEventListener('click', function(){
    modal.style.display = "none";
});

const btns = document.querySelectorAll('#board>ul>li>a');
const conts = document.querySelectorAll('#board>div');

btns[0].addEventListener('click', function(){
    conts[0].classList.add('on');
    conts[1].classList.remove('on');
});
btns[1].addEventListener('click', function(){
    conts[0].classList.remove('on');
    conts[1].classList.add('on');
});



