
var video = document.getElementById("video1");
var boton = document.getElementById("boton");

	


function miFuncion(){

	if(video.paused){
		video.play();
					
		document.getElementById('play').src = "IMG_FE/boton_pause.png";
					
	} else {
		video.pause();
		document.getElementById('play').src = 'IMG_FE/boton_play.png';
	}
}


