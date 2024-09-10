$(() => {
    // video player
    /* 
        비디오 가져오기: 객체.get(0)
        비디오 플레이: 객체.play()
        비디오 일시정지: 객체.pause()
        비디오 정지: 객체.load()
    */

    const vid = $("#s2 .vid video").get(0);
    const vidBtn = $("#s2 .vid i");

    // toggle 동작 만들기
    // 하나의 버튼으로 두 개의 상태를 만든다.
    let flag = 0;

    vidBtn.click((e) => {
        if (flag === 0) {
            vid.play();
            $(e.currentTarget).attr({ class: "fa-regular fa-circle-pause" });
            flag = 1;
        } else {
            vid.pause();
            $(e.currentTarget).attr({ class: "fa-regular fa-circle-play" });
            flag = 0;
        }
    });

    //audio button effect
    const btn = $(".btn");
    const snd = $(".snd").get(0);

    btn.mouseenter(() => {
        snd.play();
    });


    // progress bar & counter
    // 요소 찾기
    const cntNumEle = $(".counter b");
    const barNumEle = $(".progress-bar b");
    const barEle = $(".progress-bar");
    const profile1 = $(".profile1");
    const profile2 = $(".profile2");
    const photo = $(".photo");




    // 카운터의 시작 값과 목표 값
    const counterStartNums = [0, 0, 0, 0];
    const counterNums = [2, 5, 7, 5];

    // 진행율바의 시작 값과 목표 값
    const progressBarStartNums = [0, 0, 0, 0];
    const progressBarNums = [70, 80, 90, 80];

    $(window).scroll(() => {
        let st = $(this).scrollTop();
        console.log(st);

        if (st >= 350) {
            profile1.css({ transform: "translateY(0)" });
        } else {
            profile1.css({ transform: "translateY(300px)" });
        }

        if (st >= 500) {
            profile2.css({ transform: "translateY(0)" });
            photo.css({ transform: "translateY(0)" });
        } else {
            profile2.css({ transform: "translateY(300px)" });
            photo.css({ transform: "translateY(300px)" });
        }

        // 한계점: 1200, 1400
        // progress bar: 1200
        if (st >= 1200) {
            barNumEle.each((idx) => progress(idx));

        } else {
            // 처음 값으로 되돌리기
            for (let i = 0; i < progressBarStartNums.length; i++) {
                progressBarStartNums[i] = 0;
                cntNumEle.eq(i).text(progressBarStartNums[i]);
                barNumEle.eq(i).text(progressBarStartNums[i]);
                barEle.eq(i).css({ width: progressBarStartNums[i] + "%" });
            }
        }

        // counter: 1400
        if (st >= 1400) {
            // 객체.each((색인번호, 요소)=>{실행코드});
            cntNumEle.each((idx) => counter(idx));
        } else {
            // 처음 값으로 되돌리기
            for (let i = 0; i < counterStartNums.length; i++) {
                counterStartNums[i] = 0;
                cntNumEle.eq(i).text(counterStartNums[i]);
            }
        }
    });

    // progress bar function
    function progress(i) {
        progressBarStartNums[i]++;
        if (progressBarStartNums[i] <= progressBarNums[i]) {
            // setTimeout(함수, 시간) -> 시간은 밀리초
            // 숫자가 작을 수록 바와 숫자가 빠르게 움직임
            setTimeout(() => progress(i), 100);
        } else {
            return;
        }
        barNumEle.eq(i).text(progressBarStartNums[i]);
        barEle.eq(i).css({ width: progressBarStartNums[i] + "%" });
    }

    // counter function
    function counter(i) {
        counterStartNums[i]++;
        if (counterStartNums[i] <= counterNums[i]) {
            setTimeout(() => counter(i), 300);
        } else {
            return;
        }
        cntNumEle.eq(i).text(counterStartNums[i]);
    }

    // lightbox2 link
    const lb_caption = document.querySelector(".lb-caption");
    lb_caption.style.cursor = "pointer";
    lb_caption.onclick = () => {
        const lb_link = event.currentTarget.innerText;
        const openNewWindow = window.open("about:blank");
        openNewWindow.location.href = lb_link;
    };

    // lightbox2 link
    // const lb_caption = $(".lb-caption");
    // lb_caption.css({cursor: "pointer"});
    // lb_caption.click(() => {
    //     const lb_link = event.currentTarget.text();
    //     const openNewWindow = window.open("about:blank");
    //     openNewWindow.location.href = lb_link;
    // });

    //마우스 포인터 모션 만들기
    /* 
    event.pageX ~ 마우스 이벤트가 발생할 때 마우스 포인터의 문서 상대 X 좌표(읽기 전용)
    event.pageY ~ 마우스 이벤트가 발생할 때 마우스 포인터의 문서 상대 Y 좌표(읽기 전용)
*/
    let mp = document.querySelectorAll('.mp');

    document.body.onmousemove = () => {
        mm(0);
        mm(1);
    };

    function mm(i) {
        let x = event.pageX - mp[i].offsetWidth / 2;
        let y = event.pageY - mp[i].offsetWidth / 2;

        mp[i].style.left = x + 'px';
        mp[i].style.top = y + 'px';
    }

    /* 마우스 포인터 jQuery

    vanilla js속성:
    offsetWidth, offsetHeight -> 패딩과 테두리 포함
    clientWidth, clientHeight -> 패딩만 포함

    jQuery 메서드
    outerWidth(), outerHeight() -> 패딩과 테두리 포함
    innerWidth(), innerHeight()-> 패딩만 포함

           //Math.floor()
        //Math.round()
        //Math.ceil()
        
        // x: 0 ~ 1870 -> 랜덤(불규칙) -> Math.floor(Math.random())
        //y: 0 ~ 800 
        //0 <= Math.random() <1
        //0 * 10

    const mp = $('.mp);

    $("body").mousemove(()=>{
        mm(0);
        mm(1);
        
        });

        function mm(i){
  
        let x = event.pageX - mp.eq(i).outerWidth / 2;
        let y = event.pageY - mp.eq(i).outerWidth / 2;

        mp.eq(i).css({left: x + "px", top: y + "px"});
        }


     */
        // setInterval(fireFly, 1000);
        // function fireFly(){
        //     mm(0);
        //     mm(1);
        // }

        //푸터 배경색 랜덤하게 바꾸기
        /*
    const footerEle = $("footer");
    const colors = ["black", "tomato", "skyblue"]

    
    setInterval(bgcolor, 1000);
    function bgcolor() {
        
        let color = colors[Math.floor(Math.random()*3)];
        footerEle.css({backgroundColor: color});
    }
*/

 //요소찾기
//  const nav1 = $(".gnb1");
//  const nav2 = $(".gnb2");

//  $(window).scroll(()=>{
//      let st = $(this).scrollTop();
//      if (st > 100) {
//          nav1.css({opacity:0});
//          nav2.addClass("down");
//      } else {
//          nav1.css({opacity:1});
//          nav2.removeClass("down");
//      }
//  });

}); // ready end
