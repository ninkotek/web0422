window.addEventListener("DOMContentLoaded", () => {

    const collapsedMenuIcon = document.querySelector(".collapsedMenuIcon");
    const nav = document.querySelector('nav');

    //이벤트 처리
    collapsedMenuIcon.onclick = () => {
        //함수 호출
        btnMotion(event.currentTarget);

    };
    /*  collapsedMenuIcon.onclick = function(){
          //익명함수 이벤트 내에서는 this는 이벤트 객체이다. 
          //함수 호출
          btnMotion(this);
      }; */

    function btnMotion(x) {
        //햄버거 버튼이 x로 변경 
        x.classList.toggle("change");

        //nav태그에 class가 추가
        nav.classList.toggle("change");

    }


});