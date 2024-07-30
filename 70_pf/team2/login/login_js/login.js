//tabs
 
const loginTab1 = document.querySelector('.mb');
const loginTab2 = document.querySelector('.non-mb');

const loginCont = document.querySelectorAll('.login-left>div');
loginTab1.addEventListener('click', function(){
    loginCont[0].classList.add('tab-on');   
    loginCont[1].classList.remove('tab-on');
    loginTab1.style.fontWeight = "600";
    loginTab2.style.fontWeight = "400";
    loginTab1.style.borderBottom = "none";
    loginTab2.style.borderBottom = "1px solid #cccccc";
});
loginTab2.addEventListener('click', function(){
    loginCont[0].classList.remove('tab-on');   
    loginCont[1].classList.add('tab-on');
    loginTab2.style.fontWeight = "600";
    loginTab1.style.fontWeight = "400";
    loginTab2.style.borderBottom = "none";
    loginTab1.style.borderBottom = "1px solid #cccccc";
});

//tablet login icons
const loginIcons = document.querySelectorAll('.login-icons>a');

loginIcons[0].innerHTML = "네이버로 로그인";
loginIcons[1].innerHTML = "카카오로 로그인";
loginIcons[2].innerHTML = "구글로 로그인";
loginIcons[3].innerHTML = "애플로 로그인";



