$(function(){
	
    var $window = $(window);   
               
    $('#mobile-nav-btn').on('click', function(){

        $(this).toggleClass('active'); 
        $('nav, .logo.hide').fadeToggle('fast').toggleClass('active');

    }); 

    // Scrolling animation stuff
    var scrollTime = 1.2;
    var scrollDistance = 170;

    $window.on("mousewheel", function(event){

        event.preventDefault();

        var delta       = event.originalEvent.wheelDelta/120;
        var scrollTop   = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance) * 3;
        
        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power1.easeOut,
            overwrite: 5                         
        });

    });
	
});


