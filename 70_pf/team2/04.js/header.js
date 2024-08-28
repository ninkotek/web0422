window.addEventListener("DOMContentLoaded", () => {
    // 헤더 PC
    const pMath = document.querySelector("#mathfoor");
    const headerPc = document.querySelector("header.pc");

    window.addEventListener("scroll", () => {
        pMath.innerHTML = Math.floor(pageYOffset);

        if (pMath.innerHTML >= 50) {
            headerPc.classList.add("down");
        } else {
            headerPc.classList.remove("down");
        };
    });

    // 헤더 모바일, 태블릿
    // header serch
    // 요소찾기
    const mb_header = document.querySelector("header.mb.tb");
    const serch = document.querySelector("header.mb.tb .serch>div");
    const serch_input = document.querySelector("header.mb.tb .serch>input");
    console.log(mb_header);
    console.log(serch);
    console.log(serch_input);

    // 마우스 클릭 시 검색창 생성/사라짐
    serch.onclick = () => {
        serch_input.classList.toggle("active")
    };

    // x_logo
    const x = document.querySelector("#x_logo");
    const nav = document.querySelector("header.mb.tb>nav");
    console.log(x);
    console.log(nav);

    function xEvent() {
        x.classList.toggle("active");
        nav.classList.toggle("active");
    };

    x.onclick = () => {
        xEvent();
    };
});