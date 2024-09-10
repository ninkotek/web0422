window.addEventListener("DOMContentLoaded", function(){
    // 페이지
    const faqPageB01 = document.querySelector("#faq_pageButton1");
    const faqPageB02 = document.querySelector("#faq_pageButton2");

    const FAQpage1 = document.querySelector("#faq_page1");
    const FAQpage2 = document.querySelector("#faq_page2");

    const pageNum = document.querySelector(".faqWpage");

    FAQpage1.style.display = "block";
    FAQpage2.style.display = "none";
    pageNum.innerHTML = "1";

    faqPageB01.onclick = function(){
        FAQpage1.style.display = "block";
        FAQpage2.style.display = "none";
        pageNum.innerHTML = "1";
    };

    faqPageB02.onclick = function(){
        FAQpage1.style.display = "none";
        FAQpage2.style.display = "block";
        pageNum.innerHTML = "2";
    };
});