
var video = document.getElementById("video1");
var boton = document.getElementById("boton");
document.getElementById('play').style.visibility = "hidden";
	
function aparecePlay() {

	if(video.paused)  {

		document.getElementById('play').style.visibility = "visible";			
		document.getElementById('play').src = "IMG_FE/boton_play_3.jpg";
				document.getElementById('play').style.width = "7vw";

	} else {

		document.getElementById('play').style.visibility = "visible";			
		document.getElementById('play').src = "IMG_FE/pause-2.png";
				document.getElementById('play').style.width = "4vw";


	}


 }

function miFuncion(){

	if(video.paused){
		
			
		video.play();
		document.getElementById('play').style.visibility = "visible";

		document.getElementById('play').src = "IMG_FE/boton_play_3.jpg";
				document.getElementById('play').style.width = "7vw";


			
					
	} else {
		video.pause();
		document.getElementById('play').style.visibility = "visible";
		document.getElementById('play').src = 'IMG_FE/boton_play_3.jpg';
		document.getElementById('play').style.width = "7vw";
	}
}

var timeout;



if (video.paused){


	document.onmousemove = function(){
     clearTimeout(timeout);
     timeout = setTimeout(function(){
     	
     	document.getElementById('play').style.visibility = "hidden";			
		document.getElementById('play').src = "IMG_FE/pause-2.png";
				document.getElementById('play').style.width = "4vw";



}, 2000);
}} 