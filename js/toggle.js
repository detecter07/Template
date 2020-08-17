$(document).ready(function() {
  $('.menu').click(function (){
    $('ul').toggleClass('show');
  });

  $('.closeup').click(function (){
    $('main > article').toggleClass('togle');
    $('aside').toggleClass('tooogle');
    
    });


});
