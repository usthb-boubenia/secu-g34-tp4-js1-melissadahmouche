"use strict"; // Ici on utilise le mode strict, vu dans le slide 51
// Ici on utilise un tableau d'objets pour stocker les données, vu dans le slide 40
// Ici on utilise const pour une constante, vu dans le slide 50
const students = [
    { id: 1000, nom: "DOE", prenom: "JOHN", moyenne: 14, semestre: 5 },
    { id: 2000, nom: "CARLTON", prenom: "BOB", moyenne: 7, semestre: 1 },
    { id: 3000, nom: "SMITH", prenom: "RAYANE", moyenne: 13, semestre: 3 }
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
        const { id, nom, prenom, moyenne, semestre } = student;
        // Ici on appelle la fonction B (callback), vu dans le slide 47
        const admis = estAdmis(moyenne);
        if (admis) {
            console.log(`${id}: ADMIS`);//Affichage formaté (backstick)
        } else {
            console.log(`${id}: AJOURNÉ`);//Affichage formaté (backstick)
        }
    });
}