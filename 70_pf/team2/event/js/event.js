
//event-promotion
//Access the next / prev button
const nextBtn = document.querySelector('.next-btn'); 
const prevBtn = document.querySelector('.prev-btn'); 

const slideImages = document.querySelectorAll('.slideImages img');

//Access the indicators
const dots = document.querySelectorAll('.dot');

let counter = 0;

//Code for the next button
nextBtn.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;
    }
    else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    // indicators();}

}
//Code for the prev button

prevBtn.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.lengh-1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    // indicators();
}






// Access tabs
const tabsWrap1 = document.querySelectorAll('#tabs-wrap>ul>li>a')[0];
const tabsWrap2 = document.querySelectorAll('#tabs-wrap>ul>li>a')[1];
const tabsWrap3 = document.querySelectorAll('#tabs-wrap>ul>li>a')[2];


tabsWrap1.addEventListener('click', function(){
    tabsWrap1.style.backgroundColor = "red";
    tabsWrap1.style.color = "#ffffff";
    tabsWrap1.style.borderRadius = "15px 0 0 15px";
 
});
tabsWrap2.addEventListener('click', function(){
    tabsWrap2.style.backgroundColor = "red";
    tabsWrap2.style.color = "#ffffff";
   });
tabsWrap3.addEventListener('click', function(){
    tabsWrap3.style.backgroundColor = "red";
    tabsWrap3.style.color = "#ffffff";
    tabsWrap3.style.borderRadius = "0 15px 15px 0";
   
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

