// // récupérer les éléments et ajouter une couleur en bg 

// // refaire avec une couleur random

function getRandomcolor()
{
    return "rgb(" + Math.random() *255 + "," + Math.random() *255 + "," + Math.random() *255 +")";
}

$(".col-sm").mouseover(function(){

    $(this).css('background-color',getRandomcolor());
    console.log($(this).css(''));    
});
 


$('element').css('attribut', 'valeur');

console.log($(".col-sm"));

$('element').click(function(){
    $(this) // this va référencier element. 
});



// récupérer chaque case de la matrice et assigner une couleur de votre choix au background 
// faire l'exercice pour les deux évènements click et mouseover()

// ---------------------- SOLUTION 
$('#col1').click(function(){
    $("#col1").css('background-color','pink');
})

$("#col1").on('mouseover', function(){
    $('#col1').css('background-color','purple');
})

//mettre la même couleur pour tous les éléments 
$(".col-sm").click(function(){
    $(this).css('background-color','pink');
});

//***********************génerer une couleur random**********************//

// console.log(randomColor())
// $(".col-sm").click(function(){
//     $(this).css('background-color',randomColor());
// });

// function randomColor(){
//     return "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
// }

// Marh.random() renvoie toujours un nomvbre entre 0 et 1 (un nombre décimal)
// quand on multiplie ce nombre * 255, ça va nous donner une valeur entre 0 et 255
// parce que AU MINIMUM  Mathrandom() va renvoyer 0 (donc 0*255 =0)
// ou au MAXIMUM Math.random() va renvoyer 1 (donc 1*255=255)


//*********************supprimer le texte (couleur1, couleur 1, etc...) quand l'utilisateur clique******************//


$(".col-sm").click(function(){
    $(this).css('background-color',randomColor());
    $(this).text('');
});

$(".col-sm").click(function(){
    let color= randomColor()
    $(this).css('background-color',color);
    $(this).text(color);
});
