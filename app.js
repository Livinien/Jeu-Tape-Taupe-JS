
// 1ÈRE MODALE
// CLIQUER SUR LE BOUTON "SUIVANT" POUR PASSER À LA DEUXIÈME MODALE

$("#suivant").click(function(){
  $("#modale-instructions").css("display", "none");
  $("#modale-niveaux-trois").css("display", "block");
});




// 2ÈME MODALE
// CLIQUER SUR LES BOUTONS "FACILE", "MOYEN", "DIFFICILE" POUR PASSER À LA DERNIÈRE MODALE

$("#facile").click(function(){
  $("#modale-niveaux-trois").css("display", "none");
  $("#modale-start").css("display", "block");
});

$("#moyen").click(function(){
  $("#modale-niveaux-trois").css("display", "none");
  $("#modale-start").css("display", "block");
});

$("#difficile").click(function(){
  $("#modale-niveaux-trois").css("display", "none");
  $("#modale-start").css("display", "block");
});

// CLIQUER SUR LE BOUTON "PRECEDENT" POUR REVENIR À LA PREMIÈRE MODALE

$("#precedent-modale-1").click(function(){
  $("#modale-instructions").css("display", "block");
  $("#modale-niveaux-trois").css("display", "none");
});




// 3ÈME MODALE
// CLIQUER SUR LE BOUTON "PRECEDENT" POUR REVENIR À LA DEUXIÈME MODALE

$("#precedent-modale-2").click(function(){
  $("#modale-niveaux-trois").css("display", "block");
  $("#modale-start").css("display", "none");
});






// LANCER LE JEU AU CLIQUE SUR LE BOUTON "START" SUR LA DERNIÈRE MODALE ET FAIRE APPARAITRE TOUS LES AUTES ÉLÉMENTS INDISPENSABLES POUR LE JEU (SCORE, COMPTE À REBOURS, TROUS, TAUPES)

$("#start-jeu").click(function(){

  $("#modale-start").css("display", "none");
  $("#score-plus").css("display", "block");
  $(".clock").css("display", "block");
  $("#seconds").css("display", "block");
  $("#groupe-trou-taupe").css("display", "block");
  $("#groupe-taupe").css("display", "block");


  // COMPTE À REBOURS 

  // AU MOMENT DU CLIQUE SUR LE BOUTON "START", JE LANCE LA PARTIE AVEC LE COMPTE À REBOURS QUI DÉMARRE

  timeLeft = 31;

  function countdown() {
    timeLeft--;
    document.getElementById("seconds").innerHTML = String( timeLeft );
    if (timeLeft > 0) {
      setTimeout(countdown, 1000);

      // DÈS QUE LE COMPTE À REBOURS ARRIVE À 0 ALORS J'AFFICHE LA MODALE DE FIN DE PARTIE ET J'ARRÊTE LES TAUPES POUR QU'ELLE NE S'AFFICHENT PLUS A L'ÉCRAN.

    } else {
      $("#modale-fin-de-jeu").css("display", "block");
      $("#groupe-taupe").css("display", "none");
      $("#groupe-trou-taupe").css("display", "none");
      $("#score-plus").css("display", "none");
      $(".clock").css("display", "none");
      $("#seconds").css("display", "none");
    }
  };
  
  setTimeout(countdown, 1000);
});





// RECOMMENCER UNE NOUVELLE PARTIE EN APPUYANT SUR LE BOUTON "RECOMMENCER"

$("#recommencer").click(function(){

  $("#modale-fin-de-jeu").css("display", "none");
  $("#score-plus").css("display", "block");
  $(".clock").css("display", "block");
  $("#seconds").css("display", "block");
  $("#groupe-trou-taupe").css("display", "block");
  $("#groupe-taupe").css("display", "block");


  // COMPTE À REBOURS 

  timeLeft = 31;

  function countdown() {
    timeLeft--;
    document.getElementById("seconds").innerHTML = String( timeLeft );
    if (timeLeft > 0) {
      setTimeout(countdown, 1000);

      // DÈS QUE LE COMPTE À REBOURS ARRIVE À 0 ALORS J'AFFICHE LA MODALE DE FIN DE PARTIE ET J'ARRÊTE LES TAUPES POUR QU'ELLE NE S'AFFICHENT PLUS A L'ÉCRAN.

    } else {
      $("#modale-fin-de-jeu").css("display", "block");
      $("#groupe-taupe").css("display", "none");
      $("#groupe-trou-taupe").css("display", "none");
      $("#score-plus").css("display", "none");
      $(".clock").css("display", "none");
      $("#seconds").css("display", "none");
      
    }
  };
  setTimeout(countdown, 1000);


  // REMETTRE LE SCORE À 0 LORSQU'ON APPUYE SUR LE BOUTON "RECOMMENCER"
  $('.like').html(function(i, val) 
    { 
      return val*0+0
    });
});




// QUITTER LA PARTIE ET REVENIR AU MENU PRINCIPAL EN APPUYANT SUR LE BOUTON "QUITTER"

$("#quitter").click(function(){

  $("#score-plus").css("display", "none");
  $(".clock").css("display", "none");
  $("#seconds").css("display", "none");
  $("#groupe-trou-taupe").css("display", "none");
  $("#groupe-taupe").css("display", "none");
  $("#modale-fin-de-jeu").css("display", "none");
  $("#modale-instructions").css("display", "block");


  // REMETTRE LE SCORE À 0 LORSQU'ON APPUYE SUR LE BOUTON "QUITTER"
  $('.like').html(function(i, val) 
    { 
      return val*0+0
    });

});





$(document).ready(function() {

  // FAIRE APPARAITRE ET CACHER LES TAUPES DE MANIÈRE ALÉATOIRE 

  setInterval(function() {
    let randomnumber = 1 + Math.floor(Math.random() * 9);

    $('.n' + randomnumber).show(1).delay(1000).hide(1);
    
  }, 1500);
  


  // AJOUTER LE NOMBRE DE POINT AU MOMENT DU CLIQUE SUR LA TAUPE

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




