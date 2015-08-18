// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
$('#btn_sonido').click(function(){
   if($('#btn_sonido').hasClass('ui-icon-audio'))
   {
	   //apagar el audio
	   $('#btn_sonido').removeClass('ui-icon-audio');
	   $('#btn_sonido').addClass('ui-icon-forbidden');
	   alert('se apago el sonido');
   }
   else
   {
	   //prender sonido
	$('#btn_sonido').removeClass('ui-icon-forbidden');
	   $('#btn_sonido').addClass('ui-icon-audio');
	   alert('Se prendio el sonido');   
	   navigator.notification.beep(1);
   }
    });	//click a btn_sonido

//}); 
});

