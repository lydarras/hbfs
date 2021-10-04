$(document).ready(function(){

	var audio = document.createElement("audio");

  var lyrics = ["work-it","make-it","do-it","makes-us","harder","better","faster","stronger","more-than","hour","our","never","ever","after","work-is","over"];
  var controle = ["a","z","e","r","q","s","d","f","t","y","u","i","g","h","j","k"];
  var i;

  function BoutonAppuye(a){
    $(".bouton").eq(i).css("background-color","#73AD21");
    $(".bouton p").eq(i).css("color","white");
    audio.src = "Pitch1/"+lyrics[a]+".mp3";
    audio.play();
  }

  function BoutonRelache(a){
    $(".bouton").eq(i).css("background-color","white");
    $(".bouton p").eq(i).css("color","black");
  }

  $("td").mousedown(function(){
    i = $(this).parent().index(); //recupère la ligne de la matrice
    var j =  $(this).index(); //recupère la colonne de la matrice
    $(".bouton").eq(i*4+j).css("background-color","#73AD21");
    $(".bouton p").eq(i*4+j).css("color","white");
    audio.src = "Pitch1/"+lyrics[i*4+j]+".mp3";
    audio.play();
  });

  $("td").mouseup(function(){
    i = $(this).parent().index(); //recupère la ligne de la matrice
    var j =  $(this).index(); //recupère la colonne de la matrice
        $(".bouton").eq(i*4+j).css("background-color","#343A40");
    $(".bouton p").eq(i*4+j).css("color","white");
  });

    $("body").on("keydown", function(event){
    	var clavier = event.key;

      //Vérifie si la touche appuyé (clavier) retourne bien l'index l'élement qui est dans le tableau controle. Sinon, retourne -1
    	if($.inArray(clavier,controle) > -1){
        i = jQuery.inArray(clavier,controle);
        BoutonAppuye(i);
      }
      else
        console.log("Out");
    });

  $("body").keyup(function(){
    $(".bouton").css("background-color","white");
    $(".bouton p").css("color","black");
  });

});

