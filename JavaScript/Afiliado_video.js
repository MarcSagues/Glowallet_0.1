

function change() {
var video = document.getElementById("video1");
var boton = document.getElementById("boton");

	if(video.paused){
		
			
		
		document.getElementById('play').style.visibility = "visible";

		document.getElementById('play').src = "IMG_FE/pause-2.png";
		document.getElementById('play').style.width = "4vw";


			
					
	} else {
		
		document.getElementById('play').style.visibility = "visible";
		document.getElementById('play').src = 'IMG_FE/boton_play_3.jpg';
		document.getElementById('play').style.width = "7vw";
	}


 }



	
function aparecePlay() {
	var video = document.getElementById("video1");
var boton = document.getElementById("boton");

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
 function aparecePlay2() {
 	var video = document.getElementById("video2");
var boton = document.getElementById("boton2");

	if(video.paused)  {

		document.getElementById('play2').style.visibility = "visible";			
		document.getElementById('play2').src = "IMG_FE/boton_play_3.jpg";
				document.getElementById('play2').style.width = "7vw";

	} else {

		document.getElementById('play2').style.visibility = "visible";			
		document.getElementById('play2').src = "IMG_FE/pause-2.png";
				document.getElementById('play2').style.width = "4vw";


	}


 }
 function aparecePlay3() {
 	var video = document.getElementById("video3");
var boton = document.getElementById("boton3");

	if(video.paused)  {

		document.getElementById('play3').style.visibility = "visible";			
		document.getElementById('play3').src = "IMG_FE/boton_play_3.jpg";
				document.getElementById('play3').style.width = "7vw";

	} else {

		document.getElementById('play3').style.visibility = "visible";			
		document.getElementById('play3').src = "IMG_FE/pause-2.png";
				document.getElementById('play3').style.width = "4vw";


	}


 }

function miFuncion(){
	var video = document.getElementById("video1");
var boton = document.getElementById("boton");

	if(video.paused){
		
			
		video.play();
		document.getElementById('play').style.visibility = "visible";

		document.getElementById('play').src = "IMG_FE/pause-2.png";
		document.getElementById('play').style.width = "4vw";


			
					
	} else {
		video.pause();
		document.getElementById('play').style.visibility = "visible";
		document.getElementById('play').src = 'IMG_FE/boton_play_3.jpg';
		document.getElementById('play').style.width = "7vw";
	}
}
function miFuncion2(){
	var video = document.getElementById("video2");
var boton = document.getElementById("boton2");

	if(video.paused){
		
			
		video.play();
		document.getElementById('play2').style.visibility = "visible";

		document.getElementById('play2').src = "IMG_FE/pause-2.png";
		document.getElementById('play2').style.width = "4vw";


			
					
	} else {
		video.pause();
		document.getElementById('play2').style.visibility = "visible";
		document.getElementById('play2').src = 'IMG_FE/boton_play_3.jpg';
		document.getElementById('play2').style.width = "7vw";
	}
}
function miFuncion3(){
	var video = document.getElementById("video3");
var boton = document.getElementById("boton3");

	if(video.paused){
		
			
		video.play();
		document.getElementById('play3').style.visibility = "visible";

		document.getElementById('play3').src = "IMG_FE/pause-2.png";
		document.getElementById('play3').style.width = "4vw";


			
					
	} else {
		video.pause();
		document.getElementById('play3').style.visibility = "visible";
		document.getElementById('play3').src = 'IMG_FE/boton_play_3.jpg';
		document.getElementById('play3').style.width = "7vw";
	}
}

var timeout;



if (document.getElementById('video1').paused || document.getElementById('video2').paused || document.getElementById('video3').paused){


	document.onmousemove = function(){
     clearTimeout(timeout);
     timeout = setTimeout(function(){
     	
     	document.getElementById('play').style.visibility = "hidden";			
		document.getElementById('play').src = "IMG_FE/pause-2.png";
				document.getElementById('play').style.width = "4vw";

		document.getElementById('play2').style.visibility = "hidden";			
		document.getElementById('play2').src = "IMG_FE/pause-2.png";
				document.getElementById('play2').style.width = "4vw";

		document.getElementById('play3').style.visibility = "hidden";			
		document.getElementById('play3').src = "IMG_FE/pause-2.png";
				document.getElementById('play3').style.width = "4vw";



}, 2000);
}} 
