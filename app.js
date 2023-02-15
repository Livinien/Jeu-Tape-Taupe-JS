

$(document).ready(function() {

  // Faire apparaitre et cacher les taupes de manière aleatoirement
  
  // $(".taupe").hide();

  setInterval(function() {
    let randomnumber = 1 + Math.floor(Math.random() * 3);
    // console.log(randomnumber);

    $('.n' + randomnumber).show(1).delay(1000).hide(1);
    // console.log($(".n") + randomnumber);
  }, 1500);
  
});


// Ajouter le nombre de point au moment du clique sur la taupe

let count = 0;

$(document).ready(function() {
  $('.taupe').click(function() {
    count++;
    $('.like').remove();
    $('h1').append('<span class="like">'+ count +'</span>')
  });
});





