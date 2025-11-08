"use strict"; // Ici on utilise le mode strict, vu dans le slide 51
function f1() {
  // Ici on utilise let pour déclarer une variable locale, vu dans le slide 50
    let nom = "John";
  // Ici on utilise console.log() pour afficher dans la console, vu dans le slide 33
    console.log(nom);
}
function f2() {
    let prenom = "Doe";
    console.log(prenom);
}
function f3() {
    let nom = "John";
    let prenom = "Doe";
    // Ici on utilise l'opérateur de concaténation +, vu dans le slide 41
    let nomComplet = nom + "-" + prenom;
    console.log(nomComplet);
}
function f4() {
    let age = 38;
    console.log(age);
}
function f5() {
    let note = 15;
    console.log(note);
}
function f6() {
    let pi = 3.14;
    console.log(pi);
}