$(window).on('scroll', function(event) {
          
    scrolltop = $(window).scrollLeft();
     
    scrolltop = Math.round(scrolltop / 100);
     
    image_num = scrolltop%10;
         
    $('.work').css('background-image', 'url("work/' + image_num + '.jpg")');     
});