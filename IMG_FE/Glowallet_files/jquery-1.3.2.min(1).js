/*---------------------- CLICK AL ENTRAR ------------------------*/
  
  $('a#entrar').click(function (e) {
  
    e.preventDefault();                   // prevent default anchor behavior
    var goTo = this.getAttribute("href"); // store anchor href

    setTimeout(function(){
         window.location = goTo;
    },1000);       
});



/*---------------------- AMPLIAR IMAGEN ------------------------*/
  $('.botones_eff').click(function (e) {
  	    	var id = this.getAttribute("id");

    e.preventDefault();
    	var goTo = this.getAttribute("href");
           
    

    setTimeout(function(){
         window.location = goTo;
    },1500);       
}); 


  /*

  $('.photos').click(function () {
          $('.photos').addClass('photos_zoom');
         document.getElementById('play_btn').style.visibility = 'hidden';
          

     
}); 


*/

$(window).load(function() {
    $(".loader").fadeOut("slow");
});


$('.photos').click( function() {
    var $this = $(this);
    if ($this.attr('id') == 'foto1'){
      document.getElementById('pantalla_completa').scrollIntoView();
    }
     if ($this.attr('id') == 'foto2'){
      document.getElementById('pantalla_completa2').scrollIntoView();
    }
     if ($this.attr('id') == 'foto3'){
      document.getElementById('pantalla_completa3').scrollIntoView();
    }
    document.getElementById('play_btn').style.display = 'none';
    document.getElementById('play_btn2').style.display = 'none';
        document.getElementById('play_btn3').style.display = 'none';
    $this.css('z-index', 4)
    .siblings('.photos').removeClass('expanded').css('z-index', 1);
    $this.animate({
        left: 0, top: -216, margin: 0, 
        width: '100vw', height: '100vh',
        'border-radius': 0
    }, 1000).addClass('expanded');
    
    setTimeout(function(){
        $("#navbar").attr("checked", false);

         
    },800); 
    setTimeout(function(){
      obrirTancarMenu();
         $this.removeClass('expanded').css('z-index', 0);
        
         $this.animate({
        left: '50%', top: '-10%',
        width: '40vw', height: '40vw',
        'border-radius': '50%'
    }, 1250).addClass('expanded');  /*borrar-la del menu amb aixo*/
       
    },1500); 
});


$('#logo_img').click(function(){
  document.getElementById('menu_principal').scrollIntoView({ block: 'end',  behavior: 'smooth' });
});
$('#registrarse').click(function(){
  document.getElementById('form').scrollIntoView({ block: 'end',  behavior: 'smooth' });
  $('#tab_register').click();
});
$('#entrar').click(function(){
  document.getElementById('form').scrollIntoView({ block: 'end',  behavior: 'smooth' });

  $('#tab_login').click();
});




$(document).ready(function() {
$(window).scroll(function() {
   var element1height = $( "#menu_principal" ).height(); 
   var element2height = $( "#pantalla_completa" ).height();
   var element3height = $( "#pantalla_completa2" ).height(); 
   var element4height = $( "#pantalla_completa3" ).height();
   var total = element1height + element2height;
   var st = $(this).scrollTop();

   if( st == element1height ) {
   document.getElementById("line1").style.opacity = '0.5';
   document.getElementById("line2").style.opacity = '1';
   document.getElementById("line3").style.opacity = '0.5';
   document.getElementById("line4").style.opacity = '0.5';
   document.getElementById("line5").style.opacity = '0.5';

   } 
   else if( st == element2height+element1height ) {
   document.getElementById("line1").style.opacity = '0.5';
   document.getElementById("line2").style.opacity = '0.5';
   document.getElementById("line3").style.opacity = '1';
   document.getElementById("line4").style.opacity = '0.5';
   document.getElementById("line5").style.opacity = '0.5';

   } 
   else if( st == element3height+element2height+element1height  ) {
   document.getElementById("line1").style.opacity = '0.5';
   document.getElementById("line2").style.opacity = '0.5';
   document.getElementById("line3").style.opacity = '0.5';
   document.getElementById("line4").style.opacity = '1';
   document.getElementById("line5").style.opacity = '0.5';

   } 
   else if( st == element4height+element2height+element3height+element1height ) {
   document.getElementById("line1").style.opacity = '0.5';
   document.getElementById("line2").style.opacity = '0.5';
   document.getElementById("line3").style.opacity = '0.5';
   document.getElementById("line4").style.opacity = '0.5';
   document.getElementById("line5").style.opacity = '1';

   } 
   else if (st==0){
document.getElementById("line1").style.opacity = '1';
   document.getElementById("line2").style.opacity = '0.5';
   document.getElementById("line3").style.opacity = '0.5';
   document.getElementById("line4").style.opacity = '0.5';
   document.getElementById("line5").style.opacity = '0.5';   }
   if( st > total ) {
   document.getElementById("line2").style.opacity = '0.5';
   } 
  }); 
 }); 

function scroll1() {
   document.getElementById('menu_principal').scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
function scroll2 (){
   document.getElementById('pantalla_completa').scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
function scroll3 (){
   document.getElementById('pantalla_completa2').scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
function scroll4 (){
   document.getElementById('pantalla_completa3').scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
function scroll5 (){
   document.getElementById('form').scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
