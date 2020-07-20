window.onload= function(){


	if(!document.getElementById('navbar').checked){

		
		document.getElementById('test1').style.display = 'none';
		
	
	} else  {
		


		document.getElementById('test1').style.display = 'block';
		
	}
}

var theLink = document.querySelectorAll(".photos");

// "Wire" the element's events
theLink.addEventListener("mouseover", mouseOver);
theLink.addEventListener("mouseout", mouseOut);





function mouseOut() {
 
	var afi = document.getElementById("afi");
	afi.style.color= "#000000";

	var barra1 = document.getElementById("barra1");
	barra1.style.visibility= "visible";
}


function mouseOut1() {
 
	var info = document.getElementById("info");
	info.style.color= "#000000";

	var barra2 = document.getElementById("barra2");
	barra2.style.visibility= "visible";

}

function mouseOut2() {
 
	var merca = document.getElementById("merca");
	merca.style.color= "#000000";

	var barra3 = document.getElementById("barra3");
	barra3.style.visibility= "visible";

	$('#play_btn').addClass('play_back');

}


function mouseOver() {

	$('#play_btn').removeClass('play_back');

	var play = document.getElementById("play_btn");
	play.style.visibility = "visible";
	$('#play_btn').addClass('play_move');
	var barra1 = document.getElementById("barra1");
	barra1.style.visibility= "visible";

	var barra2 = document.getElementById("barra2");
	barra2.style.visibility= "hidden";

	var barra3 = document.getElementById("barra3");
	barra3.style.visibility= "hidden";



	var afi = document.getElementById("afi");
	afi.style.color= "#000000";

	var info = document.getElementById("info");
	info.style.color= "#a8a9ad";

	var merca = document.getElementById("merca");
	merca.style.color= "#a8a9ad";


	var imgs = document.getElementsByTagName("img")[1];
	
		imgs.style.visibility = "hidden";
		var imgs = document.getElementsByTagName("img")[2];
	
		imgs.style.visibility = "hidden";
 	
	var imgs = document.getElementsByTagName("img")[0];
	imgs.style.visibility = "visible";



}
function mouseOver1() {

		$('#play_btn').removeClass('play_back');

	var play = document.getElementById("play_btn");
	play.style.visibility = "visible";

	$('#play_btn').addClass('play_move');


	var barra1 = document.getElementById("barra1");
	barra1.style.visibility= "hidden";

	var barra2 = document.getElementById("barra2");
	barra2.style.visibility= "visible";

	var barra3 = document.getElementById("barra3");
	barra3.style.visibility= "hidden";



	var info = document.getElementById("info");
	info.style.color= "#000000";

	var afi = document.getElementById("afi");
	afi.style.color= "#a8a9ad";

	var merca = document.getElementById("merca");
	merca.style.color= "#a8a9ad";
 	
	var imgs = document.getElementsByTagName("img")[2];
	
		imgs.style.visibility = "hidden";
		var imgs = document.getElementsByTagName("img")[0];
	
		imgs.style.visibility = "hidden";
 	
	var imgs = document.getElementsByTagName("img")[1];
	imgs.style.visibility = "visible";



}

function mouseOver2() {


	$('#play_btn').removeClass('play_back');

	var play = document.getElementById("play_btn");

	
	



	play.style.visibility = "visible";

	$('#play_btn').addClass('play_move');


	var barra1 = document.getElementById("barra1");
	barra1.style.visibility= "hidden";

	var barra2 = document.getElementById("barra2");
	barra2.style.visibility= "hidden";

	var barra3 = document.getElementById("barra3");
	barra3.style.visibility= "visible";


	var merca = document.getElementById("merca");
	merca.style.color= "#000000";

	var afi = document.getElementById("afi");
	afi.style.color= "#a8a9ad";

	var info = document.getElementById("info");
	info.style.color= "#a8a9ad";
 	
	var imgs = document.getElementsByTagName("img")[1];
	
		imgs.style.visibility = "hidden";
		var imgs = document.getElementsByTagName("img")[0];
	
		imgs.style.visibility = "hidden";
 	
	var imgs = document.getElementsByTagName("img")[2];
	imgs.style.visibility = "visible";
	imgs.classList.add('photo_move');



}


function showImage(){
	alert(theLink.id);

	if (theLink.id = 'afi') {

		var imgs = document.getElementsByTagName("img")[0];
		alert('1'); } 
	else if (theLink.id = 'info'){
		var imgs = document.getElementsByTagName("img")[1];
		alert('2');
	}


	
		imgs.style.visibility = "visible";
		
	
}

function hideImage(){
	var imgs = document.getElementsByTagName("img")[0];
	
		imgs.style.visibility = "hidden";
	
}

function funcionMenu(){
	


	if(document.getElementById('navbar').checked){

		
		document.getElementById('test1').style.display = 'none';

		document.body.classList.remove('no_scroll');

		document.getElementById("play_btn").style.visibility="hidden";
		
	
	} else  {
		

		document.getElementById("play_btn").style.visibility="hidden";
		alert(document.getElementById("play_btn").style.visibility);
		document.getElementById('test1').style.display = 'block';
		
		
	}
}



