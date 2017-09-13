//scroll suave
var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

//Slide equipe
 $(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 528
      });
});