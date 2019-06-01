const tableau = ["Got", "Narcos", "SNK"];  // VINCENT : j'ai remplacé const TvShow par "tableau"

// Fonctions 18 mai
// Classe 25 mai

class myArray 
{
    //Ajouter un element à la fin du tab
    addElementAtStartArray(){

    }
    //Ajouter en element en debut de tab
    addElementAtStartArray(){

    }
    //Supprimer un element à la fin du tab

    supprimerElementFinTableau (){

    }
    //Supprimer en element en debut de tab
    ajouterElementDebutTableau(){

    }

    //Ajouter à un endroit spécifique du tab

    ajoutEndroitSpec(){

    }
    //Connaitre la longueur d´un tab
    longueurTab(){

    }

    //Afficher un tableau

    AfficherUntableau(){

    }   
}

//Ajouter en element en debut de tab
function addElementAtStartArray(tableau, nouvelElement){
 tableau.push(nouvelElement)
}

function displayArray(tableau){  //"display = afficher"
    for(let i = 0; i < tableau.length; i++){
        console.log()
    }
}

addElementAtStartArray(tableau, "One Piece");        // VINCENT : j'ai remplacé  (TvShow,"One Piece")  (tableau, One piece)
console.log(tableau); // activer ou desactiver pour voir "One piece" à la fin

            // VINCENT
  //Ajouter en element en debut de tab
function ajouterElementDebutTableau(tableau,nouvelElement){
    tableau.unshift (nouvelElement)
}

function displayArray(tableau){
    for(let i = 0; i < tableau.length; i++){
        console.log()
    }
}
ajouterElementDebutTableau(tableau,"Matrix");
console.log(tableau); // activer ou desactiver pour voir "MATRIX" au debut


//Supprimer un element à la fin du tab

function supprimerElementFinTableau (tableau,nouvelElement) {
    tableau.pop(nouvelElement)
}
function displayArray(tableau){
    for(let i = 0; i < tableau.length; i++){
        console.log()
    }
}

supprimerElementFinTableau(tableau);  // Narcos sera suppr du tab
console.log(tableau); // activer ou desactiver pour ne plus voir le dernier element qui etait "One piece"



//Supprimer en element en debut de tab

function supprimerElementDebutTableau (tableau,nouvelElement) {
    tableau.shift(nouvelElement)
}
function displayArray(tableau){
    for(let i = 0; i < tableau.length; i++){
        console.log()
    }
}

supprimerElementDebutTableau(tableau); // le premier element du tableau est supprimé
console.log(tableau); // activer ou desactiver pour ne plus voir le premier element qui etait "Matrix"


//Ajouter à un endroit spécifique du tab

function ajoutEndroitSpec (tableau, nouvelElement){
    tableau.splice(1,0,nouvelElement) 
}
function displayArray(tableau) {
    for (let i =0; i<tableau.lenght;i++){
        console.log()
    }
}

ajoutEndroitSpec(tableau, "Friends");

console.log(tableau); // activer ou desactiver pour ajouter "friends" à un endroit spécifique : ici en 2eme position





 //Connaitre la longueur d´un tab                Pas sur que ce soit le resultat souhaité 

   function longueurTab (tableau) {
      tableau.lenght;
       for(let i = 0; i<tableau.lenght; i++){
        console.log(tableau.lenght);
       }

   }
longueurTab(tableau);

  console.log(tableau.lenght);




 //Afficher un tableau                                  Pas sur que ce soit le resultat souhaité 
 function AfficherUntableau(tableau) {
     tableau.join(tableau)
    for(let i = 0; i < tableau.length; i++){
        console.log(tableau);
    }
 }
 
AfficherUntableau(tableau);


 
 