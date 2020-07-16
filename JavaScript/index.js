alert("hola");
leerCookies(){
	
	var element = document.getElementById('cookies_div');
	element.style.visibility = 'visible';
}

aceptarCookies(){

	var element = document.getElementById('aceptar_cookies');
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

