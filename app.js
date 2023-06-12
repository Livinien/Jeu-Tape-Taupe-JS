

$(document).ready(function() {

  // Faire apparaitre et cacher les taupes de manière aleatoirement

  setInterval(function() {
    let randomnumber = 1 + Math.floor(Math.random() * 9);

    $('.n' + randomnumber).show(1).delay(1000).hide(1);
    
  }, 1500);
  



// Ajouter le nombre de point au moment du clique sur la taupe

  // +1 pour Rico
  $('#rico').click(function() {
    $('.like').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Skipper
  $('#skipper').click(function() {
    $('.like').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Soldat
  $('#soldat').click(function() {
    $('.like').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Ginger
  $('#ginger').click(function() {
    $('.like').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Rocky
  $('#rocky').click(function() {
    $('.like').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Phoenix
  $('#phoenix').click(function() {
    $('.like').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Rex
  $('#rex').click(function() {
    $('.like').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Sam
  $('#sam').click(function() {
    $('.like').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Gertrude
  $('#gertrude').click(function() {
    $('.like').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  
  
});