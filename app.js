
// 1ÈRE MODALE
// CLIQUER SUR LE BOUTON "SUIVANT" POUR PASSER À LA DEUXIÈME MODALE

$("#suivant").click(function(){
  $("#modale-instructions").css("display", "none");
  $("#modale-niveaux-trois").css("display", "block");
});




// 2ÈME MODALE
// CLIQUER SUR LES BOUTONS "FACILE", "MOYEN", "DIFFICILE" POUR CHOISIR SON NIVEAU DE DIFFICULTÉ ET PASSER À LA TROISIÈME MODALE

let intervalStart
let temps
let delay
let niveaux
let niveau_temps


 // FAIRE APPARAITRE ET CACHER LES TAUPES DE MANIÈRE ALÉATOIRE 

  function interval(temps, delay) {

    intervalStart = setInterval(function() {
    let randomnumber = 1 + Math.floor(Math.random() * 9);

    $('.n' + randomnumber).show(1).delay(delay).hide(1);
    
  }, temps);
}



// NIVEAU FACILE

$("#facile").click(function(){
  $("#modale-niveaux-trois").css("display", "none");
  $("#modale-start").css("display", "block");


  // COMPTE À REBOURS 

  delay = 3000
  temps = 3000
  niveaux = "facile"
  niveau_temps = 61
  interval(temps, delay)

});



// NIVEAU MOYEN

$("#moyen").click(function(){
  $("#modale-niveaux-trois").css("display", "none");
  $("#modale-start").css("display", "block");


  // COMPTE À REBOURS 

  delay = 1000
  temps = 1000
  niveaux = "moyen"
  niveau_temps = 31
  interval(temps, delay)

});



// NIVEAU DIFFCILE

$("#difficile").click(function(){
  $("#modale-niveaux-trois").css("display", "none");
  $("#modale-start").css("display", "block");


  // COMPTE À REBOURS 

  delay = 500
  temps = 500
  niveaux = "difficile"
  niveau_temps = 16
  interval(temps, delay)

});



// CLIQUER SUR LE BOUTON "PRÉCÉDENT" POUR REVENIR À LA PREMIÈRE MODALE

$("#precedent-modale-1").click(function(){
  $("#modale-instructions").css("display", "block");
  $("#modale-niveaux-trois").css("display", "none");
});




// 3ÈME MODALE

// PAGE DU JEU

// LANCER LE JEU AU CLIQUE SUR LE BOUTON "START" SUR LA TROISIÈME MODALE ET FAIRE APPARAITRE TOUS LES AUTES ÉLÉMENTS INDISPENSABLES POUR LE JEU (SCORE, COMPTE À REBOURS, TROUS, TAUPES)

$("#start-jeu").click(function(){

  $("#modale-start").css("display", "none");
  $("#score-plus").css("display", "block");
  $(".clock").css("display", "block");
  $("#seconds").css("display", "block");
  $("#groupe-trou-taupe").css("display", "block");
  $("#groupe-taupe").css("display", "block");

  timeLeft = niveau_temps;

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


      // RÉCUPÉRER LE PSEUDO DU JOUEUR DEPUIS L'INPUT ET L'AFFICHER DEPUIS LE LOCALSTORAGE SUR LA MODALE DE FIN (MODALE 4)
      document.getElementById('afficher_pseudo_joueur').innerHTML = JSON.parse(localStorage.getItem('data'));
  
      // RÉCUPÉRER LE SCORE DU JOUEUR ET L'AFFICHER DEPUIS LE LOCALSTORAGE SUR LA MODALE DE FIN (MODALE 4)
      document.getElementById('score_final').innerHTML = JSON.parse(localStorage.getItem('points'));

      // NETTOYER ENTRE CHAQUE INTERVALLES POUR ÉVITER LA MULTIPLICATION DE TAUPE À CHAQUE COMMENCEMENT DE NOUVELLE PARTIE
      clearInterval(intervalStart)
    }
  };
  setTimeout(countdown, 1000);

});


// CLIQUER SUR LE BOUTON "PRÉCÉDENT" POUR REVENIR À LA DEUXIÈME MODALE

$("#precedent-modale-2").click(function(){
  $("#modale-niveaux-trois").css("display", "block");
  $("#modale-start").css("display", "none");
});




// ENREGISTRER LE PSEUDO DU JOUEUR DEPUIS LE LOCALSTORAGE

function save_pseudo() {

  // AFFICHER LE PSEUDO DEPUIS L'INPUT
  let new_pseudo = $('#pseudo_joueur')[0].value;
  
  if(localStorage.getItem('data') == null) {
    localStorage.setItem('data', '[]');
  }

  let old_pseudo = JSON.parse(localStorage.getItem('data'));
  old_pseudo.push(new_pseudo);

  localStorage.setItem('data', JSON.stringify(old_pseudo));
}



// ENREGISTRER LE SCORE DU JOUEUR DEPUIS LE LOCALSTORAGE

function score_joueur() {

  // AFFICHER LE NOMBRE DE POINTS DEPUIS LA BALISE H1
  let score = $('#score-plus')[0].value;

  
  if(localStorage.getItem('points') == null) {
    localStorage.setItem('points', '[]');
  }

  
  let old_score = JSON.parse(localStorage.getItem('points'));
  old_score.push(score);

  localStorage.setItem('points', JSON.stringify(old_score));
}




// 4ÈME MODALE

// RECOMMENCER UNE NOUVELLE PARTIE EN CLIQUANT SUR LE BOUTON "RECOMMENCER"

$("#recommencer").click(function(){

  $("#modale-fin-de-jeu").css("display", "none");
  $("#score-plus").css("display", "block");
  $(".clock").css("display", "block");
  $("#seconds").css("display", "block");
  $("#groupe-trou-taupe").css("display", "block");
  $("#groupe-taupe").css("display", "block");


  // COMPTE À REBOURS 

  timeLeft = niveau_temps;

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


      // RÉCUPÉRER LE PSEUDO DU JOUEUR DEPUIS L'INPUT ET L'AFFICHER DEPUIS LE LOCALSTORAGE SUR LA MODALE DE FIN (MODALE 4)
      document.getElementById('afficher_pseudo_joueur').innerHTML = JSON.parse(localStorage.getItem('data'));

      // RÉCUPÉRER LE SCORE DU JOUEUR ET L'AFFICHER DEPUIS LE LOCALSTORAGE SUR LA MODALE DE FIN (MODALE 4)
      document.getElementById('score_final').innerHTML = JSON.parse(localStorage.getItem('points'));


      // NETTOYER ENTRE CHAQUE INTERVALLES POUR ÉVITER LA MULTIPLICATION DE TAUPE À CHAQUE COMMENCEMENT DE NOUVELLE PARTIE
      clearInterval(intervalStart)
    }
  };
  setTimeout(countdown, 1000);


  // SUPPRIMER UNIQUEMENT LE NOMBRE DE POINTS DANS LE LOCALSTORAGE POUR REDÉMARRER UNE NOUVELLE PARTIE
  localStorage.removeItem('points');


  // REMETTRE LE SCORE À 0 LORSQU'ON CLIQUE SUR LE BOUTON "RECOMMENCER"
  $('.points').html(function(i, val)
    { 
      return val*0+0
    });
    interval(temps, delay);
});



// QUITTER LA PARTIE ET REVENIR AU MENU PRINCIPAL EN CLIQUANT SUR LE BOUTON "QUITTER"

$("#quitter").click(function(){

  $("#score-plus").css("display", "none");
  $(".clock").css("display", "none");
  $("#seconds").css("display", "none");
  $("#groupe-trou-taupe").css("display", "none");
  $("#groupe-taupe").css("display", "none");
  $("#modale-fin-de-jeu").css("display", "none");
  $("#modale-instructions").css("display", "block");

  

  // SUPPRIMER LE PSEUDO ET LE NOMBRE DE POINTS DANS LE LOCALSTORAGE POUR REMMETTRE À 0 TOUTES LES INFORMATIONS DE LA PARTIE AFIN DE QUITTER COMPLÈTEMENT LE JEU
  localStorage.clear();



  // REMETTRE LE SCORE À 0 LORSQU'ON CLIQUE SUR LE BOUTON "QUITTER"
  $('.points').html(function(i, val) 
    { 
      return val*0+0
    });
});



// AJOUTER LE NOMBRE DE POINT AU MOMENT DU CLIQUE SUR LA TAUPE (+1)

$(document).ready(function() {
  
  // +1 pour Rico
  $('#rico').click(function() {
    $('.points').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Skipper
  $('#skipper').click(function() {
    $('.points').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Soldat
  $('#soldat').click(function() {
    $('.points').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Ginger
  $('#ginger').click(function() {
    $('.points').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Rocky
  $('#rocky').click(function() {
    $('.points').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Phoenix
  $('#phoenix').click(function() {
    $('.points').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Rex
  $('#rex').click(function() {
    $('.points').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Sam
  $('#sam').click(function() {
    $('.points').html(function(i, val) 
    { 
      return val*1+1
    });
  });
  

  // +1 pour Gertrude
  $('#gertrude').click(function() {
    $('.points').html(function(i, val) 
    { 
      return val*1+1
    });
  });
});





$(document).ready(function(){

  // INITIALISE LE LOCAL/SESSION STORAGE
  ccInit();

  // ADDITION DU NOMBRE DE POINTS DANS LE LOCALSTORAGE À CHAQUE CLIQUE SUR LES TAUPES
 $("#groupe-taupe").click(function(){
    scorePlus("local"); 
 }); 
});

function ccInit(){
  if(typeof(Storage) !== "undefined"){
      if(!localStorage.points){
          localStorage.points = 0;
      }
      if(!sessionStorage.sessionCount){
          sessionStorage.sessionCount = 0;
      }
      $(".points").html(localStorage.points);
      $("#sessionStorageCount").html(sessionStorage.sessionCount)
  }else{
      $("p#outputText").html("Your browser doesn't support Local Storage");
  }
}


// ADDITION AU CLIQUE DE LA SOURIS QUI S'AJOUTE EN TEMPS RÉEL DANS LE LOCALSTORAGE
function scorePlus(storageType){
  
  if(typeof(Storage) !== "undefined"){
      if(storageType == "local"){
          if(localStorage.points){
              localStorage.points = parseInt(localStorage.points) + 1;
          }
          else{
              localStorage.points = 1;
          }
          $(".points").html(localStorage.points);
      }
      else if(storageType == "session"){
          if(sessionStorage.sessionCount){
              sessionStorage.sessionCount = parseInt(sessionStorage.sessionCount) + 1;
          }
          else{
              sessionStorage.sessionCount = 1;
          }
          $("#sessionStorageCount").html(sessionStorage.sessionCount)
      }
      
  } else {
      $("p.outputText").html("Your browser doesn't support Local Storage");
  }
}












