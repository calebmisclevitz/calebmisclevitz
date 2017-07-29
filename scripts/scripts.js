$(document).ready(function() {
    
    console.log("ready");

    $(window).on('scroll', function(event) {

        scrolltop = $(window).scrollLeft();
        
        console.log(scrolltop);

        scrolltop = Math.round(scrolltop / 20);

        image_num = scrolltop%12;

        $('.piece').css('background-image', 'url("work/' + image_num + '.jpg")');   

    });
    
});