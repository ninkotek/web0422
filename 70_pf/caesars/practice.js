
//access the images

const slideImages = document.querySelectorAll('.slides>ul>li>img');

//access the next prev buttons
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

//access the indicators
const dots = document.querySelectorAll('.dot');

let counter = 0;

//code for next button
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.lenght-1){
        counter = 0;
    }
    else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

//code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
}
/*   css animation
@keyframes next1 {
    from { left: 0%}
    to { left: -100%}
}
@keyframes next2 {
    from {left: 100%}
    to {left: 0%}
}
@keyframes prev1 {
    from { left: 0%}
    to { left: 100%}
}
@keyframes prev2 {
    from {left: -100%}
    to {left: 0%}
}

*/
//auto sliding
function autoSliding(){
    deletInterval = setInterval(timer, 5000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();

//Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

//resume sliding when mouose is out
container.addEventListener('mouseout', autoSliding);

//add and remove active class from the indicators
function indicators(){
    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}
//add click event to the indicator
function switchImage(currentImage) {
    currentImage.classList.add('active');
    let imageId = currentImage.getAttribute('data-attr');
    if(imageId > counter) {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';}
        else if(imageId == counter){
            return;
        }
        else {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
        }
        indicators();
    }
   
   /*  indicator html

   <div class = "dotsContainer">
    <div class = "dot active" data-attr="0" onclick="switchImage(this)"></div>
    <div class = "dot" data-attr="0" onclick="switchImage(this)"></div>
    <div class = "dot" data-attr="0" onclick="switchImage(this)"></div>
    <div class = "dot" data-attr="0" onclick="switchImage(this)"></div>
    <div class = "dot" data-attr="0" onclick="switchImage(this)"></div>   
   
   </div>
      
   */
