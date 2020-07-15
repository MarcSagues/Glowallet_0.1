
var position = $(window).scrollTop(); 
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
            alert('scroll abajo');
    } else {
        alert('scroll arriba');
    }
    position = scroll;
});