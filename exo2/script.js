"use strict"; // Ici on utilise le mode strict, vu dans le slide 51
function f1() {
    // Ici on utilise un tableau (array), vu dans le slide 38
    let etudiants = ["etudiant1", "etudiant2", "etudiant3"];
    // Ici on accède aux éléments d'un tableau par index, vu dans le slide 38
    // Ici on utilise console.log() pour afficher, vu dans le slide 33
    console.log(etudiants[0]);
    console.log(etudiants[1]);
    console.log(etudiants[2]);
}
function f2() {
    // Ici on utilise un objet JavaScript, vu dans le slide 39
    let etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };
    console.log(etudiant);
}
function f3() {
    // Ici on utilise un tableau d'objets, vu dans le slide 40
    let etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];
    // Ici on utilise la boucle forEach, vu dans le slide 44
    etudiants.forEach((etudiant) => {
        console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);//Affichage formaté (backstick)
    });
}