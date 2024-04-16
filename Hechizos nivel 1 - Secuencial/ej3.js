const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Cálculo del Peso de la Nimbus 2000
 * Preguntale a Harry el peso base de la Nimbus 2000 en kg y la cantidad de plumas de fénix utilizadas para su fabricación, luego calcula el peso total de la escoba considerando que cada pluma añade 0.1 kg
 * 
 * Por ejemplo si la cantidad de plumas usadas son 350 y el peso base es de 1.5kg entonces el total es de 36.5kg
 */

const ESCOBA = "Nimbus 2000";
const ELEMENTO_1 = "plumas de fenix";
const PESO_ELEM_1= 0.1;
const UNIDAD_PESO = "kg";


function main() {
    
    let pesoBase = 0;
    let cantElem1 = 0;
    
    console.log("Ingrese el peso en", UNIDAD_PESO, "base de la", ESCOBA);
    pesoBase = Number(leer());
    console.log("Cuantas", ELEMENTO_1, "va a utiizar");
    cantElem1 = Number(leer());
    console.log("El peso total de la", ESCOBA, "es", pesoBase + cantElem1*PESO_ELEM_1, UNIDAD_PESO);


}


main();