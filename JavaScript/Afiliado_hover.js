
var theLink = document.querySelector(".photo2");

// "Wire" the element's events
theLink.addEventListener("mouseover", mouseOver);
theLink.addEventListener("mouseout", mouseOut);



function mouseOut() {
 
	hideImage();

}

function mouseOver() {
 	
	showImage();

}

function showImage(){

	var imgs = document.getElementsByTagName("img")[0];
	
		imgs.style.visibility = "visible";
		
	
}

function hideImage(){
	var imgs = document.getElementsByTagName("img")[0];
	
		imgs.style.visibility = "hidden";
	
}



