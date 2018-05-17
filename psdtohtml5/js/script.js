$(document).ready (function () {
    
    new WOW().init();
    
    /* NAV */
    
    $(".burger-nav").on("click", function(){
        $(".container nav ul").toggleClass("open");
    });
    
    
    
    
    /* ANIMATION */
    
    $('.js-wp-2').waypoint(function(direction) {
        
        $('.js-wp-2').addClass('animated slideInUp');
        
    }, {
        offset: '70%'
    });
    
    $('.js-wp-3').waypoint(function(direction) {
        
        $('.js-wp-3').addClass('animated fadeIn');
        
    }, {
        offset: '70%'
    });
    
    $('.iphone-btn').delay(1300).animate({bottom: '+=-3'}, 300);
    $('.iphone-btn').delay(300).animate({top: '+=-3'}, 200)
    
});