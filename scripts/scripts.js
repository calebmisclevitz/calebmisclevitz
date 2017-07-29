$(document).ready(function() {
    
    console.log("ready");

    offset = 0;
    
    $(window).on('scroll', function(event) {

        scrolltop = $(window).scrollLeft();
        
        scrolltop = Math.round(scrolltop / 20);

        image_num = scrolltop%12;
        console.log(image_num);
        

        $('.piece').css('background-image', 'url("work/' + image_num + '.jpg")');

    });
    
    $(window).scroll(function() {
        var scrolledY = $(window).scrollLeft();
        $('.PIECE').css('background-position', 'top ' + ((scrolledY)) + 'px');
    });
    
});