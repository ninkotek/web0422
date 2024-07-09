jQuery(document).ready(function(){
    $('.rest-wrap>li>a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');

        return false;
    });

    $('.fade-slide li:gt(0)').hide();
    setInterval(function(){
        $('.fade-slide li:first-child').fadeOut().next('li').fadeIn().end().appendTo('.fade-slide');
    }, 3000);

});




