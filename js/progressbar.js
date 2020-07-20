var lang = {
    "photoshop": "75%",
    "lightroom": "75%",
    "ingles": "60%",
    "illustrator": "50%",
    "redes": "80%",
    "dir": "90%",
    "foto": "60%"
};
  
  var multiply = 4;
  
  $.each( lang, function( language, pourcent) {
  
    var delay = 700;
    
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;
  
});