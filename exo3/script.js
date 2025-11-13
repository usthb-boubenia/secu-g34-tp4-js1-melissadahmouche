"use strict"; // Ici on utilise le mode strict, vu dans le slide 51
// Ici on utilise un tableau d'objets pour stocker les données, vu dans le slide 40
// Ici on utilise const pour une constante, vu dans le slide 50
const students = [
    { id: 1000, nom: "DOE", prenom: "JOHN", note1: 14, note2: 5 },
    { id: 2000, nom: "CARLTON", prenom: "BOB", note1: 7, note2: 1 },
    { id: 3000, nom: "SMITH", prenom: "RAYANE", note1: 13, note2: 3 }
];
// Ici on utilise une fonction qui prend un paramètre et retourne un booléen, vu dans le slide 45
function estAdmis(moyenne) {
     // Ici on utilise une condition if...else, vu dans le slide 42
    if (moyenne >= 10) {
        return true; 
    } else {
        return false;
    }
}
// Ici on utilise une fonction qui appelle une autre fonction, vu dans le slide 47
function deliberation() {
    // Ici on utilise la boucle forEach pour parcourir le tableau, vu dans le slide 44
    students.forEach((student) => {
        // Ici on utilise la destructuration d'objet, vu dans le slide 39
        const { id, nom, prenom, note1, note2 } = student;
        //Ici on calcule la moyenne 
        ////Ici on utilise les opérateurs arithmétique + , /, vu dans le slide 41
        const moyenne = (note1+note2)/2 +5
        // Ici on appelle la fonction B (callback), vu dans le slide 47
        const admis = estAdmis(moyenne);
        if (admis) {
            console.log(`${id}: ADMIS`);//Affichage formaté (backstick)
        } else {
            console.log(`${id}: AJOURNÉ`);//Affichage formaté (backstick)
        }
    });
}