Barba.Pjax.start();



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

function efectoFoto(elemento){
	 elemento.style.box_shadow = "0 0 0 130vw #333132, 0 0 0 130vh #333132";
}






