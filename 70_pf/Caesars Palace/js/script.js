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



// footer 
const downArrow = document.querySelector('.family-site>a>img');
// const upArrow = document.querySelectorAll('.family-site>a')[1];

const option1 = document.querySelector('#options');


downArrow.onclick = function () {
    option1.style.display = "block";
    downArrow.style.transform = "rotate(180deg)";
   
    // downArrow.style.transform = "rotate(180deg)";
};



/*
downArrow.onclick = function(){
    option1.style.display = "none";
};

*/
