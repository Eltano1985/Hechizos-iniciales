const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Verificación de Varita Mágica:
 * Pide al usuario el nivel de lealtad y astucia de una varita mágica y verifica si es adecuada para su uso.
 * A partir de 70 nivel de lealtad o 80 en astucia la varita es apta
 * 
 * Por ejemplo si la astucia es 90 y la lealtad es 40 entonces la varita es apta, en otro caso si la astucia es 30 y la lealtad es 60 la varita no es apta
 */

const ELEMENTO = "varita magica";

function main() {

    let nivelDeLealtad = 0;
    let nivelDeAstucia = 0;

    console.log("Ingrese el nivel de lealtad de la", ELEMENTO);
    nivelDeLealtad = Number(leer());
    console.log("Ingrese el nivel de astucia de la", ELEMENTO);
    nivelDeAstucia = Number(leer());

    if (nivelDeLealtad >= 70|| nivelDeAstucia >= 80) {
        console.log("La", ELEMENTO, "es adecuada para su uso");
    }
   /*  else if () {
        console.log("La", ELEMENTO, "es adecuada para su uso");
    } */
    else
        console.log("La", ELEMENTO, "no es adecuada para su uso");
}


main();