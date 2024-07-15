

const tabsWrap1 = document.querySelectorAll('#tabs-wrap>ul>li>a')[0];
const tabsWrap2 = document.querySelectorAll('#tabs-wrap>ul>li>a')[1];
const tabsWrap3 = document.querySelectorAll('#tabs-wrap>ul>li>a')[2];


tabsWrap1.addEventListener('click', function(){
    tabsWrap1.style.backgroundColor = "red";
    tabsWrap1.style.color = "#ffffff";
   
});

// content-wrap
const tab1 = document.querySelectorAll('#tabs-wrap>ul>li>a')[0];
const tab2 = document.querySelectorAll('#tabs-wrap>ul>li>a')[1];
const tab3 = document.querySelectorAll('#tabs-wrap>ul>li>a')[2];

const total = document.querySelector('#total-list');
const ongoing = document.querySelector('#ongoing-list');
const closing = document.querySelector('#closing-list');


tab1.addEventListener('click', function(){
    reset();
    total.classList.add('on');
});

tab2.addEventListener('click', function(){
    reset();
    ongoing.classList.add('on');
});

tab3.addEventListener('click', function(){
    reset();
    closing.classList.add('on');
});

function reset(){
    total.classList.remove('on');
    ongoing.classList.remove('on');
    closing.classList.remove('on');
}


