$(document).ready(function(){
    $('.slider').slider({indicators:false,full_width: true,height:400,transition:1000});
    $('.modal-trigger').leanModal();
   
});
$('#contact').hover(function(){
     $(this).toggleClass("swing");
});
$('#contact').on("click",function(){
   $('#modal1').openModal();
});
$('.lang-logo').hover(function(){
    $(this).toggleClass("jello");
});
$('.selfie').hover(function() {
    $(this).toggleClass("rubberBand");
});