
$(document).ready(function() {


$('#form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');
 

  if($(this).attr('id') == 'tab_login'){
    document.getElementById('form-content').style.height = '50vh';
  } else {
    document.getElementById('form-content').style.height = '67vh';
  }

  if ($(this).attr('id') == 'tab_login') {
    document.getElementById('form-content').style.height = '50vh';
    document.getElementById('checkbox').style.visibility = 'hidden';
    document.getElementById('frase_checkbox').style.visibility = 'hidden';



  } else {

    document.getElementById('form-content').style.height = '67vh';
    document.getElementById('checkbox').style.visibility = 'visible';
    document.getElementById('frase_checkbox').style.visibility = 'visible';
  }

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});


});

function changeToLogin(){

   

}