const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Elección de Casa en Hogwarts:
 * Solicita al estudiante su puntuación en un examen y determina a qué casa de Hogwarts pertenecería.
 * Gryffindor - a partir de 90 puntos
 * Hufflepuff - a partir de 70 puntos
 * Ravenclaw - a partir de 50 puntos
 * Slytherin - menos de 50 puntos
 * 
 * Por ejemplo si el estudiante saco 100 puntos entonces pertenece a Gryffindor o si sacara 30 entonces pertenece a Slytherin
 */

const CASA_1 = "Slytherin";
const CASA_2 = "Ravenclaw";
const CASA_3 = "Hufflepuff";
const CASA_4 = "Gryffindor"

function main() {

    let puntajeObtenido = 0;

    console.log("Ingrese su puntuacion en el examen");
    puntajeObtenido = Number(leer());


    if (puntajeObtenido < 50) {
        console.log("Pertenece a", CASA_1);

    } else if (puntajeObtenido < 70){
        console.log("Pertenece a", CASA_2);

    }else if (puntajeObtenido < 90){
        console.log("Pertenece a", CASA_3);

    }else if (puntajeObtenido >= 90){
        console.log("Pertenece a", CASA_4);
    }
}


main();