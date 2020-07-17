



function leerCookies(){
	
	var element = document.getElementById('cookies_div');
	element.style.visibility = 'visible';
	var element2 = document.getElementById('cookies_id');
	element2.style.visibility = 'hidden';

}

function aceptarCookies(){

	var element = document.getElementById('cookies_id');
	element.style.visibility = 'hidden';

}








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

