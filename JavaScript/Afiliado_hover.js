
 
var theLink = document.querySelector("a[name='opcion1']");

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

	var imgs = document.getElementsByTagName("img");
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.visibility = "visible";
		
	}
}

function hideImage(){
	var imgs = document.getElementsByTagName("img");
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.visibility = "hidden";
	}
}



