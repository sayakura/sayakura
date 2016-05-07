$(document).ready(function(){
  $('.slider').slider({indicators:false,full_width: true,height:350,transition:1000});
  
});
$('#contact').mouseenter(function(){
      $('#contact').transition({
          scale:1.3,
          dalay:1000,
       });
         $('#contact').transition({
          scale:1,
       });
});
$('.lang-logo').mouseenter(function(){
      $(this).transition({
          scale:1.1,
          dalay:1000,
       });
         $(this).transition({
          scale:1,
       });
    
});
