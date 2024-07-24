
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
    indicators();

}
//Code for the prev button

prevBtn.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

// Add and remove eventon class from the indicators
function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' eventon', '');
    }
    dots[counter].className +=' eventon';
}

// Add click event to the indicators
function imageSwitch(currentImage){
    currentImage.classList.add('eventon');
    let imageId = currentImage.getAttribute('data-attr');
    if(imageId > counter){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';}
        else if (imageId == counter){
            return;
        }
        else {
            slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
            counter = imageId;
            slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
        }
        indicators();
}




// Access tabs
const tabsWrap1 = document.querySelectorAll('#tabs-wrap>ul>li>a')[0];
const tabsWrap2 = document.querySelectorAll('#tabs-wrap>ul>li>a')[1];
const tabsWrap3 = document.querySelectorAll('#tabs-wrap>ul>li>a')[2];


tabsWrap1.addEventListener('click', function(){
    tabsWrap1.style.backgroundColor = "#555";
    tabsWrap1.style.color = "#ffffff";
    tabsWrap1.style.borderRadius = "15px 0 0 15px"
    eventmoreItems.style.display = 'none';
    reset1()
   
});
tabsWrap2.addEventListener('click', function(){
    tabsWrap2.style.backgroundColor = "#555";
    tabsWrap2.style.color = "#ffffff";
    eventmoreItems.style.display = 'none';
    reset2()

    // tabsWrap1.style.borderRadius = "15px 0 0 15px"
   
});
tabsWrap3.addEventListener('click', radius);
function radius(){
    tabsWrap3.style.backgroundColor = "#555";
    tabsWrap3.style.color = "#ffffff";
    tabsWrap3.style.borderRadius = "0 15px 15px 0";
    eventmoreItems.style.display = 'none';
    reset3()
}

function reset1(){   
    tabsWrap2.style.backgroundColor = "";
    tabsWrap3.style.backgroundColor = "";   
    tabsWrap2.style.color = "";
    tabsWrap3.style.color = "";
}
function reset2(){
    tabsWrap1.style.backgroundColor = "";   
    tabsWrap3.style.backgroundColor = "";
    tabsWrap1.style.color = "";    
    tabsWrap3.style.color = "";
}

function reset3(){
    tabsWrap1.style.backgroundColor = "";
    tabsWrap2.style.backgroundColor = "";  
    tabsWrap1.style.color = "";
    tabsWrap2.style.color = "";  
}



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

// 더보기 버튼
const eventMore = document.querySelector('.eventMoreBtn');
const eventmoreItems = document.querySelector('.eventmore-items');

eventMore.addEventListener('click', function(){
    eventmoreItems.style.display = 'block';
});
