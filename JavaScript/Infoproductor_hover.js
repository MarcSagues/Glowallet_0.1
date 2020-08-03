
/*---------------------- ON PAGE LOAD ------------------------*/


window.onload= obrirTancarMenu();

function obrirTancarMenu(){


  if(!document.getElementById('navbar').checked){

    document.getElementById('test1').style.display = 'none';
    setBlock();
    
  
  } else  {
    
    

    document.getElementById('test1').style.display = 'block';
    setNone();
  }
}




var theLink = document.querySelectorAll(".photos");

// "Wire" the element's events
theLink.addEventListener("mouseover", mouseOver);
theLink.addEventListener("mouseout", mouseOut);


/*---------------------- MOUSE OUT MENÚ ------------------------*/


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

/*---------------------- MOUSE OVER MENÚ ------------------------*/


function mouseOver() {

	var play = document.getElementById("play_btn");
	var play2 = document.getElementById("play_btn2");
	var play3 = document.getElementById("play_btn3");

	play.style.visibility = "visible";
	play2.style.visibility = "hidden";
	play3.style.visibility = "hidden";
	play.style.display = "block";
	play2.style.display = "none";
	play3.style.display = "none";
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

  $( "#foto1" ).animate({
    top: "-10vh",

  }, 700 );
  $( "#foto2" ).animate({
    top: "10vh",
    visibility: "hidden",
  }, 1 );
  $( "#foto3" ).animate({
    top: "10vh",
    visibility: "hidden",
  }, 1 );
  $( "#play_btn" ).animate({
    left: "52%",
   visibility: "hidden",
  }, 700 );
  $( "#play_btn2" ).animate({
    left: "40vw",
    visibility: "hidden",
  }, 1);
  $( "#play_btn3" ).animate({
    left: "40vw",
    visibility: "hidden",
  }, 1);
  



}
function mouseOver1() {

		
	

	var play = document.getElementById("play_btn");
	var play2 = document.getElementById("play_btn2");
	var play3 = document.getElementById("play_btn3");

	play.style.visibility = "hidden";
	play2.style.visibility = "visible";
	play3.style.visibility = "hidden";
	play.style.display = "none";
	play2.style.display = "block";
	play3.style.display = "none";
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

$( "#foto2" ).animate({
    top: "-10vh",
  }, 700 );
  $( "#foto1" ).animate({
    top: "10vh",
    visibility: "hidden",
  }, 1 );
  $( "#foto3" ).animate({
    top: "10vh",
    visibility: "hidden",
  }, 1 );
 $( "#play_btn2" ).animate({
    left: "52%",
   visibility: "hidden",
  }, 700 );
  $( "#play_btn" ).animate({
    left: "40vw",
    visibility: "hidden",
  }, 1);
  $( "#play_btn3" ).animate({
    left: "40vw",
    visibility: "hidden",
  }, 1);

}

function mouseOver2() {
	var play = document.getElementById("play_btn");
	var play2 = document.getElementById("play_btn2");
	var play3 = document.getElementById("play_btn3");

	play.style.visibility = "hidden";
	play2.style.visibility = "hidden";
	play3.style.visibility = "visible";
	play.style.display = "none";
	play2.style.display = "none";
	play3.style.display = "block";
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
	$( "#foto3" ).animate({
    top: "-10vh",
  }, 700 );
  $( "#foto2" ).animate({
    top: "10vh",
    visibility: "hidden",
  }, 1 );
  $( "#foto1" ).animate({
    top: "10vh",
    visibility: "hidden",
  }, 1 );
   $( "#play_btn3" ).animate({
    left: "52%",
   visibility: "hidden",
  }, 700 );
  $( "#play_btn2" ).animate({
    left: "40vw",
    visibility: "hidden",
  }, 1);
  $( "#play_btn" ).animate({
    left: "40vw",
    visibility: "hidden",
  }, 1);



}

function mouseClick1() {
	$('#foto1').click();
}

function mouseClick2(){
	$('#foto2').click();
}

function mouseClick3(){
	$('#foto3').click();
}

/*---------------------- MOSTRAR/OCULTAR IMÁGENES ------------------------*/


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


/*---------------------- EFECTO MENÚ ------------------------*/


function funcionMenu(){
	


	if(document.getElementById('navbar').checked){

		
		document.getElementById('test1').style.display = 'none';

		document.body.classList.remove('no_scroll');

		document.getElementById("play_btn").style.visibility="hidden";

		setBlock();

		$( "#test1" ).animate({
   			opacity: "0",
  		}, 700);
		
		notSelected();
		
	
	} else  {
		

		document.getElementById("play_btn").style.visibility="hidden";
		document.getElementById('test1').style.display = 'block';

		
		$( "#test1" ).animate({
   			opacity: "1",
  		}, 700);
		
		setNone();
		notSelected();

		
	}
}

function setNone() {
  $('#menu_principal').click(function(){return false;});
  $('#pantalla_completa').click(function(){return false;});
  $('#pantalla_completa2').click(function(){return false;});
  $('#pantalla_completa3').click(function(){return false;});
  $('#form').click(function(){return false;});
}
function setBlock() {
$('#menu_principal').click(function(){return true;});
  $('#pantalla_completa').click(function(){return true;});
  $('#pantalla_completa2').click(function(){return true;});
  $('#pantalla_completa3').click(function(){return true;});
  $('#form').click(function(){return true;});
}





function notSelected(){

	var play = document.getElementById("play_btn");
	var play2 = document.getElementById("play_btn2");
	var play3 = document.getElementById("play_btn3");

	play.style.visibility = "hidden";
	play2.style.visibility = "hidden";
	play3.style.visibility = "hidden";
	play.style.display = "none";
	play2.style.display = "none";
	play3.style.display = "none";
	var barra1 = document.getElementById("barra1");
	barra1.style.visibility= "hidden";

	var barra2 = document.getElementById("barra2");
	barra2.style.visibility= "hidden";

	var barra3 = document.getElementById("barra3");
	barra3.style.visibility= "hidden";



	var afi = document.getElementById("afi");
	afi.style.color= "#a8a9ad";

	var info = document.getElementById("info");
	info.style.color= "#a8a9ad";

	var merca = document.getElementById("merca");
	merca.style.color= "#a8a9ad";


	var imgs = document.getElementsByTagName("img")[1];
	
		imgs.style.visibility = "hidden";
		var imgs = document.getElementsByTagName("img")[2];
	
		imgs.style.visibility = "hidden";
 	
	var imgs = document.getElementsByTagName("img")[0];
	imgs.style.visibility = "hidden";

  $( "#foto1" ).animate({
    top: "10vh",

  }, 1 );
  $( "#foto2" ).animate({
    top: "10vh",
    visibility: "hidden",
  }, 1 );
  $( "#foto3" ).animate({
    top: "10vh",
    visibility: "hidden",
  }, 1 );
  $( "#play_btn" ).animate({
    left: "40vw",
   visibility: "hidden",
  }, 1 );
  $( "#play_btn2" ).animate({
    left: "40vw",
    visibility: "hidden",
  }, 1);
  $( "#play_btn3" ).animate({
    left: "40vw",
    visibility: "hidden",
  }, 1);
  




}





