window.addEventListener("DOMContentLoaded", () => {
    // section1 요소찾기
    const x_button = document.querySelector(".x_button");
    const sec1_sub1 = document.querySelector("#sec1_wrap");
    const sec1_sub2 = document.querySelector("#s1_sub_cont");

    // x버튼을 click시 s1_banner 3개가 등장한다.

    x_button.onclick = () => {
        sec1_sub1.classList.toggle("action");
        sec1_sub2.classList.toggle("action");
    };

    // section2
    // 모바일,태블릿
    $('.bxslider1').bxSlider({
        // mode: 'fade'추가하면 슬라이드가 아닌 투명해져서 변환하는 효과로 바뀜
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 768,
    });

    // PC버전
    $('.bxslider2').bxSlider({

        // mode: 'fade'추가하면 슬라이드가 아닌 투명해져서 변환하는 효과로 바뀜
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 820,
    });

    // section3
    $(() => {
        $('.sec3_slider').slick({
            // 자동슬라이드
            autoplay: true,
            // 슬라이드 속도 2000 = 2초
            autoplaySpeed: 2000,
            // 슬라이드 시 이미지 몇개를 넘길것인지 = 1일시 1개씩 이동
            slidesToScroll: 1,
            // 현재 보여지는 슬라이드 수
            slidesToShow: 3,
            // 현재 이미지 중앙에 배치
            centerMode: true,
            centerPadding: '40px',
            // responsive = 반응형
            responsive: [
                {
                    // breakpoint = width가 1025보다 작을 때 작동 / 1025이하 테블릿, 모바일
                    breakpoint: 1025,
                    settings: {
                        // arrows: false,
                        centerMode: true,
                        centerPadding: '56px',
                        slidesToShow: 1,
                    }
                },
                {
                    // breakpoint = width가 376보다 작을 때 작동 / 376이하 모바일
                    breakpoint: 376,
                    settings: {
                        // arrows: false,
                        centerMode: true,
                        centerPadding: '24px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }); // Loaded Event


});