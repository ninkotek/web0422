

const mdata = {
    // 영어
    en: {
  
        gnb: ["WHITE CASTLE", "MENU", "EVENT", "NOTICE"],
        mtit: ["WC", "Castle"],
        stit: ["", "Menu", "Event", "Location"],
        s2: {
            img: ["assets/sec2-pic01.png", "assets/sec2-pic02.png", "assets/sec2-pic03.png", "assets/sec8-pic04.png", "assets/sec2-pic05.png", "assets/sec2-pic06.png", "assets/sec2-pic07.png", "assets/sec2-pic08.png"],
            tit: ["Lunch Special", "Chicken Set", "Family Pack", "Breakfast", "Bacon Egg", "Cocacola Set", "Shrimp", "Classic"]
        }

        // flogo: "../assets/daewoo/en/footer_logo.png",
        // fmenu: ["About DAEWOO E&C", "Sitemap", "Contact", "Email Security"],
       // addr: "04548 DAEWOO E&C 170 Eulji-ro, Jung-gu, Seoul, Republic of Korea"

    },
    // 한국어
    ko: {
  
        gnb: ["화이트 캐슬", "메뉴", "이벤트", "공지사항"],
        mtit: ["WC", "Castle"],
        stit: ["메뉴", "이벤트", "고객문의"],
        s2: {
            img: ["assets/sec2-pic03.png", "assets/sec2-pic01.png", "assets/sec2-pic02.png", "assets/sec8-pic03.png", "assets/sec2-pic07.png", "assets/sec2-pic06.png", "assets/sec2-pic05.png", "assets/sec2-pic01.png"],
            tit: ["점심 특선", "치킨세트", "패밀리팩", "블랙퍼스트", "베이컨에그", "코카콜라세트", "새우버거", "클래식세트"]
        }
    }
};
// 기본 데이터 내보내기 - 1개만 가능
export default mdata;

//명령된 데이터 내보내기 - 여러개 내보낼 수 있다
//export {main_data, 객체명,};
