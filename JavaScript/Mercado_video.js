var video = document.getElementById("video1");
var boton = document.getElementById("boton");
document.getElementById('play').style.visibility = "hidden";
	
function aparecePlay() {

	if(video.paused)  {

		document.getElementById('play').style.visibility = "visible";			
		document.getElementById('play').src = "IMG_FE/boton_play.png";
	} else {

		document.getElementById('play').style.visibility = "visible";			
		document.getElementById('play').src = "IMG_FE/boton_pause.png";

	}


 }

function miFuncion(){

	if(video.paused){
		
			
		video.play();
		document.getElementById('play').style.visibility = "visible";

		document.getElementById('play').src = "IMG_FE/boton_play.png";

			
					
	} else {
		video.pause();
		document.getElementById('play').style.visibility = "visible";
		document.getElementById('play').src = 'IMG_FE/boton_play.png';
	}
}

var timeout;



if (!video.paused){
document.onmousemove = function(){
     clearTimeout(timeout);
     timeout = setTimeout(function(){

     	document.getElementById('play').style.visibility = "visible";			
		document.getElementById('play').src = "IMG_FE/boton_play.png";

     	
     	

     } , 2600);
}} else {

	document.onmousemove = function(){
     clearTimeout(timeout);
     timeout = setTimeout(function(){

     	document.getElementById('play').style.visibility = "hidden";			
		document.getElementById('play').src = "IMG_FE/boton_pause.png";


}, 2600);
}}