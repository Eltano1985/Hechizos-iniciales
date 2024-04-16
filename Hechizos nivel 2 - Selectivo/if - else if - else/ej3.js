const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Examen de Herbología:
 * Pide al estudiante el nombre de la planta que encontro y determina si es apta para el examen de Herbología.
 * Si es Mandrágora o Valeriana entonces son aptas
 * Si son Bubotuber o Whomping Willow es necesario informar que no es posible debido a lo peligrosas que son
 * Cualquier otro tipo de planta no sera aceptada
 * 
 * Por ejemplo si el estudiante quiere traer un Whomping Willow no podra hacer el examen, en otro caso si trae una Valeriana se le otorgara el permiso
 */

const PLANTA_1 = "Mandrágora";
const PLANTA_2 = "Valeriana";
const PLANTA_3 = "Bubotuber";
const PLANTA_4 = "Whomping Willow"

function main() {

    let nombrePlanta = 0;

    console.log("Ingrese el nombre de la planta que encontro");
    nombrePlanta = leer();

    if (nombrePlanta == PLANTA_1) {
        console.log("La planta es apta para el examen");

    } else if (nombrePlanta == PLANTA_2) {
        console.log("La planta es apta para el examen");

    } else if (nombrePlanta == PLANTA_3) {
        console.log("La planta no es apta para el examen");

    } else if (nombrePlanta == PLANTA_4) {
        console.log("La planta no es apta para el examen");
    }
    else 
    console.log("La planta no es aceptada");

}


main();