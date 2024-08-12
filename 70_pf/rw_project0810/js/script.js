// fullPage
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	
});

// Section1 -side-menu

const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const sidePanel = document.querySelector('.side-panel');
const sideItems = document.querySelectorAll('.side-menu li');

const menuOptions = {
	duration: 700,
	easing: 'ease',
	fill: 'forwards',
};

menuOpen.addEventListener('click', function(){
	menuOpen.style.opacity = "0";
	sidePanel.animate({translate: ['100vw', 0]}, menuOptions);

	sideItems.forEach((sideItem, index)=>{
		sideItem.animate(
			{
				opacity: [0, 1],
				translate: ['2rem', 0],
			},
			{
				duration: 2400,
				delay: 300 * index,
				easing: 'ease',
				fill: 'forwards',
			}
		);
	});
})
menuClose.addEventListener('click', function(){
	menuOpen.style.opacity = "1";
	sidePanel.animate({
		translate: [0, '100vw']
	}, menuOptions);
	sideItems.forEach((sideItem)=>{
		sideItem.animate({opacity:[1, 0]}, menuOptions);
	});
})

// Section1 - fade-in/fade-out
$(document).ready(function(){
	$('.image-fade a:gt(0)').hide();
	setInterval(function(){
		$('.image-fade a:first-child').fadeOut().next('a').fadeIn().end().appendTo('.image-fade');
	}, 3000);
});


//Text scrolling motion
const texts = document.querySelectorAll('.image-fade>a>p');
const showMouse = document.querySelector('.image-fade');

const frames = {   
    translate: ['-300px 0', 0],
};

const option = {
    duration: 3000,   
    fill: 'forwards',
    iterations: Infinity,    
    };

    showMouse.onmouseenter = function(){
        texts[0].animate(frames, option);
        texts[1].animate(frames, option);
        texts[2].animate(frames, option);
       
    };

// section2 carousel

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
    deletInterval = setInterval(timer, 5000);
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

// section3 tabs
const tabs = document.querySelectorAll('.rest-wrap>li');
const conts = document.querySelectorAll('.sub-wrap');

tabs[0].addEventListener('click', function(){
    tabs[0].classList.add('active');
    rest1()
});
tabs[1].addEventListener('click', function(){
    tabs[0].classList.add('active');
    rest2()
});
tabs[2].addEventListener('click', function(){
    tabs[0].classList.add('active');
    rest3()
});
tabs[3].addEventListener('click', function(){
    tabs[0].classList.add('active');
    rest4()
});

function rest1(){
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
    tabs[2].classList.remove('active');
    tabs[3].classList.remove('active');
}

function rest2(){
    tabs[0].classList.remove('active');
    tabs[1].classList.add('active');
    tabs[2].classList.remove('active');
    tabs[3].classList.remove('active');
}
function rest3(){
    tabs[0].classList.remove('active');
    tabs[1].classList.remove('active');
    tabs[2].classList.add('active');
    tabs[3].classList.remove('active');
}
function rest4(){
    tabs[0].classList.remove('active');
    tabs[1].classList.remove('active');
    tabs[2].classList.remove('active');
    tabs[3].classList.add('active');
} 

// Side-menu phone
const submenuBtn = document.querySelectorAll('.side-main>li img');
const sidePanelBtn = document.querySelector('.side-panel');
const sideMenu = document.querySelectorAll('.side-sub');

//sidePanel.animate({translate: ['100vw', 0]}, menuOptions);

submenuBtn[0].onclick = function (){
    hide()
    sideMenu[0].style.display = "block";
   
    
};
submenuBtn[1].onclick = function (){
    hide()
    sideMenu[1].style.display = "block";
    
};
submenuBtn[2].onclick = function (){
    hide()
    sideMenu[2].style.display = "block";
   
};
submenuBtn[3].onclick = function (){
    hide()
    sideMenu[3].style.display = "block";
   

};

function hide(){
    sideMenu[0].style.display = "none";
    sideMenu[1].style.display = "none";
    sideMenu[2].style.display = "none";
    sideMenu[3].style.display = "none";
}

//video

const myBtn1 = document.querySelectorAll(".video-btn>a")[0];
const myBtn2 = document.querySelectorAll(".video-btn>a")[1];
const video = document.querySelector(".myvideo");

myBtn1.onclick = function(){
   video.pause();
};
 myBtn2.onclick = function(){
  video.play();
};

const videotext = document.querySelector('.video-text');
const videowrap = document.querySelector('.video-wrap');

const videoframes = {
    opacity: [0, 1],
    translate: ['0 300px', 0]
};

const videooptions = {
    duration: 2000,
    easing:'ease'
};

videowrap.onmouseenter = function(){
    videotext.animate(videoframes, videooptions)
};



