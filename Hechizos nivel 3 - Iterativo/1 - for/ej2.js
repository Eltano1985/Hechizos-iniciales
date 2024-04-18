const leer = require("prompt-sync")();

/**
 * Ej 2
 * Los Dementores son criaturas oscuras que se alimentan de la felicidad de las personas, dejándolas con recuerdos dolorosos y desesperación. 
 * Para protegerse de los Dementores, los estudiantes de Hogwarts aprenden el hechizo Patronus, que repele a estas criaturas y los aleja con recuerdos felices. 
 * En este ejercicio, simularemos un encuentro con un Dementor en un mini juego donde un estudiante debe lanzar el hechizo Patronus correctamente para repeler al Dementor y proteger su felicidad. 
 * Dependiendo de la cantidad de vida del estudiante, se necesitará ingresar el hechizo Patronus varias veces para vencer al Dementor. 
 * Si el estudiante no ingresa el hechizo correctamente, perderá turnos y el Dementor consumirá su felicidad y recuerdos felices, acercándose más a la derrota del estudiante. 
 * En otro caso si el estudiante ingresa bien los hechizos y logra vencer al dementor entonces se mostrar un mensaje de victoria
 * 
 * Vida maxima del dementor: 1000
 * Vida maxima del estudiante: 350
 * Daño por turno perdido del dementor al estudiante: 75
 * Daño por hechizo acertado del estudiante contra dementor: 267
 * Turnos totales: 5 
 */


const VIDA_MAXIMA_DEMENTOR = 1000;
const VIDA_MAXIMA_ESTUDIANTE = 350;
const DAÑO_POR_TURNO_PERDIDO = 75;
const DAÑO_POR_HECHIZO_ACERTADO = 267;

function main() {

let NombreDelHechizo = 0;
let vidaActualDementor = VIDA_MAXIMA_DEMENTOR;
let vidaActualEstudiante = VIDA_MAXIMA_ESTUDIANTE;

for (let contador = 0; contador < 5; contador++) {
    console.log("Ingrese el nombre del Hechizo");
    NombreDelHechizo = leer();

    if (NombreDelHechizo == "Patronus") {
        vidaActualDementor = vidaActualDementor - DAÑO_POR_HECHIZO_ACERTADO;
        console.log("Le hiciste daño al dementor");
        console.log("La vida de dementor es", vidaActualDementor);
    } else {
        vidaActualEstudiante = vidaActualEstudiante - DAÑO_POR_TURNO_PERDIDO;
        console.log("No le hiciste daño al dementor");
        console.log("Tu vida es", vidaActualEstudiante );
    }
    
}



}


main();