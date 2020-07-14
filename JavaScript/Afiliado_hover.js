
 
var theLink = document.querySelector("a[name='opcion1']");


// "Wire" the element's events
theLink.addEventListener("mouseover", mouseOver);
theLink.addEventListener("mouseout", mouseOut);


function mouseOver() {
 
	showImage();

}

function showImage(){

	var imgs = document.getElementsByTagName("img");
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.visibility = "visible";
		
	}
}




