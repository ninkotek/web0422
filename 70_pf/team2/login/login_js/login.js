
const loginTab1 = document.querySelector('.mb');
const loginTab2 = document.querySelector('.non-mb');

const loginCont1 = document.querySelectorAll('.login-left>div')[0];
const loginCont2 = document.querySelectorAll('.login-left>div')[1];

loginTab1.addEventListener('click', function(){
    loginCont1.classList.add('tab-on');   
    loginCont2.classList.remove('tab-on');
    loginTab1.style.fontWeight = "600";
    loginTab2.style.fontWeight = "400";
    loginTab1.style.borderBottom = "none";
});
loginTab2.addEventListener('click', function(){
    loginCont1.classList.remove('tab-on');
    loginCont2.classList.add('tab-on');
    loginTab2.style.fontWeight = "600";
    loginTab1.style.fontWeight = "400";
    loginTab2.style.borderBottom = "none";         
});