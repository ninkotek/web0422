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

const downArrow = document.querySelectorAll('.family-site>a')[0];
const upArrow = document.querySelectorAll('.family-site>a')[1];

const option1 = document.querySelector('#options');


upArrow.onclick = function () {
    option1.style.display = "block";
    // downArrow.style.transform = "rotate(180deg)";
};
downArrow.onclick = function(){
    option1.style.display = "none";
};


