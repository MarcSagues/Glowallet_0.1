var theLink = document.querySelectorAll(".photos");

// "Wire" the element's events
theLink.addEventListener("mouseover", mouseOver);
theLink.addEventListener("mouseout", mouseOut);





function mouseOut() {
 
	var afi = document.getElementById("afi");
	afi.style.color= "#000000";
}


function mouseOut1() {
 
	var info = document.getElementById("info");
	info.style.color= "#000000";

}

function mouseOut2() {
 
	var merca = document.getElementById("merca");
	merca.style.color= "#000000";

}


function mouseOver() {

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



