
//Access slideImages 
const slideImages = document.querySelectorAll('.slides>ul>li');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const dots = document.querySelectorAll('.dot');

let counter=0;

next.addEventListener('click', nextSlide);
function nextSlide(){
    slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
    if(counter >= slideImages.length-1 ){
        counter = 0;
    }
    else {
        counter++;
    }
    slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
    indicators ();
}

prev.addEventListener('click', prevSlide);
function prevSlide(){
    slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
    indicators ();
}

// autosliding
function autoSlide(){
    deletInterval = setInterval(timer, 2000);
    function timer(){
        nextSlide();
        indicators ();
    }
}
autoSlide();

const autoStop = document.querySelector('.slides');

autoStop.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

autoStop.addEventListener('mouseout', autoSlide);

//add and remove active class from the indicators
function indicators (){
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

//add click event to the indicator
function dotEvent(currentImage){
    currentImage.classList.add('active');
    let imageId = currentImage.getAttribute('data-attr');
    if(imageId > counter){
        slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
        counter = imageId;
        slideImages[counter].style.animation = "next2 0.5s ease-in forwards";}
        else if(imageId == counter){
            return;
        }
        else {
            slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";
            counter = imageId;
            slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
        }
        indicators ();

}

/* 
function indicators(){
for(let i = 0; i < dots.lengh; i++){
dots[i].className = dots[i].className.replace(' active', '');
}
dots[counter].className += ' active';

}

function dotEvent(currentImage){
currentImage.classList.add('active');
let imageId = currentImage.getAttribute('data-attr');
if(imageId > counter){
slideImages[counter].style.animation = "next1 0.5s ease-in forwards";
counter = imageId;
slideImages[counter].style.animation = "next2 0.5s ease-in forwards";

}

}



*/