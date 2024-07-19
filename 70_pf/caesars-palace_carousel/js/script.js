






// Access the Images
const slideImages = document.querySelectorAll('.slides>ul>li>img');

//Access the next prev buttons
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

//Access the indicators
const dots = document.querySelectorAll('.dot');

let counter = 0;

//Code for next button
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

//Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

// Auto sliding
function autoSliding(){
    deletInterval = setInterval(timer, 4000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();
 
// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

//Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}


// Add click event to the indicator
function switchImage(currentImage){
    currentImage.classList.add('active');
    let imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';}
        else if(imageId == counter){
            return;
        }
        else{
            slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
            counter = imageId;
            slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
        }
        indicators();
}





jQuery(document).ready(function () {
    $('.rest-wrap>li>a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');

        return false;
    });

    $('.fade-slide li:gt(0)').hide();
    setInterval(function () {
        $('.fade-slide li:first-child').fadeOut().next('li').fadeIn().end().appendTo('.fade-slide');
    }, 3000);

});

//casino
const game1 = document.querySelectorAll('.game-common>li>div>a>img')[0];
const game2 = document.querySelectorAll('.game-common>li>div>a>img')[1];
const game3 = document.querySelectorAll('.game-common>li>div>a>img')[2];
const game4 = document.querySelectorAll('.game-common>li>div>a>img')[3];

console.log(game1);

game1.onclick = function(){
    game1.style.transform ="scale(1.1)";
};

//shows
const illust1 = document.querySelectorAll('.slider>a')[0];
const illust2 = document.querySelectorAll('.slider>a')[1];
const illust3 = document.querySelectorAll('.slider>a')[2];
const illust4 = document.querySelectorAll('.slider>a')[3];
const illust5 = document.querySelectorAll('.slider>a')[4];
const showMouse = document.querySelector('.fades');

const showFrames = {
    translate: ['300px 0', 0],   
    rotate: ['x 360deg', 0],
};

const option = {
    duration: 4000,   
    fill: 'forwards',
    iterations: Infinity,    
    };

showMouse.onmouseenter = function(){
    illust1.animate(showFrames, option);
    illust2.animate(showFrames, option);
    illust3.animate(showFrames, option);
    illust4.animate(showFrames, option);
    illust5.animate(showFrames, option);
};


//shop
const shop1 = document.querySelector('.shop1-content');
const shop2 = document.querySelector('.shop2-content');
const shopMouse = document.querySelector('.shop');

const keyframes = {
    opacity: [0, 1],
    translate: ['-200px 0', 0]
}
const keyframes2 = {
    opacity: [0, 1],
    translate: ['200px 0', 0]
}

const options = {
    duration: 2000,
    easing: 'ease'
};

shopMouse.onmouseenter = function(){
    shop1.animate(keyframes, options);
    shop2.animate(keyframes2, options);
};


/* games */




// footer - family site
const downArrow = document.querySelector('.family-site>a>img');
const option1 = document.querySelector('#options');


downArrow.addEventListener('click', down);
downArrow.addEventListener('click', up);

function down(){
    option1.style.display = "block";   
    downArrow.style.transform = "rotate(180deg)";  
}
function up(){
    option1.style.display = "block";   
    downArrow.style.transform = "rotate(-180deg)";  
}

/*

const option1 = document.querySelector('#options');

let count = 0;


downArrow.onclick = function () {
    option1.style.display = "block";
    downArrow[count].style.transform = "rotate(180deg)";  

    if(count>1){     
        option1.style.display = "none";
        downArrow[count].style.transform = "rotate(0)";
        
        // downArrow.style.transform = "rotate(180deg)";         
    } 
    else {
      
    }
} 
*/




/*
downArrow.onclick = function(){
    option1.style.display = "none";
};

*/


