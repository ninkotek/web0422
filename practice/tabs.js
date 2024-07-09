
const btn1 = document.querySelectorAll('.tabs>ul>li>a')[0];
const btn2 = document.querySelectorAll('.tabs>ul>li>a')[1];
const cont1 = document.querySelectorAll('#content-wrap div')[0];
const cont2 = document.querySelectorAll('#content-wrap div')[1];

btn1.addEventListener("click", reset);

function reset(){
    cont1.classList.add('on');
    cont2.classList.remove('on');
}
btn2.addEventListener("click", reset1);

function reset1(){
    cont1.classList.remove('on');
    cont2.classList.add('on');
}



/*
btn1.onclick = function () {
    cont1.classList.add('on');
    cont2.classList.remove('on');
};
btn2.onclick = function () {
    cont1.classList.remove('on');
    cont2.classList.add('on');
};
*/
/*
btn1.onclick = reset;

function reset(){
    cont1.classList.add('on');
    cont2.classList.remove('on');
}

btn2.onclick = reset2;

function reset2(){
    cont1.classList.remove('on');
    cont2.classList.add('on');
}
*/



/*
btn1.onclick = function () {
    reset();
    cont1.classList.add("on");  
};
btn2.onclick = function () {
    reset();
    cont2.classList.add("on");  
};


function reset(){
    cont1.classList.remove("on");
    cont2.classList.remove("on");

}
*/
