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

    // 모달 팝업

    // 공지사항의 첫 번째 li를 클릭하면
    $(".notice li")
        .eq(0)
        .click(() => {
            $("#modal").css({ display: "block" });
        });

    $("button").click(() => {
        $("#modal").css({ display: "none" });
    }); //모달 팝업 끝
});
