const leer = require("prompt-sync")();

/**
 * Ej 5
 * Permiso para Visitar Hogsmeade:
 * Pide al estudiante su edad y si tiene permiso de sus padres, y verifica si puede visitar el pueblo de Hogsmeade.
 * Solo a partir de los 13 años, y con permiso de los padres, o 17 años tendra permitido realizar la actividad
 * 
 * Por ejemplo si tiene 12 años y con permiso de los padres no le sera permitido, si tiene 14 y no cuenta con permiso de los padres no le sera permitido, en otro caso si tiene 18 puede realizar la actividad
 */

const LUGAR = "pueblo de Hogsmeade";

function main() {

    let edad = 0;
    let permiso = 0;

    console.log("Ingrese su edad");
    edad = Number(leer());

    if (edad < 13) {
        console.log("No puede visitar el", LUGAR);
    } else if (edad < 17) {
        console.log("Tiene (si) o no tiene (no) permiso de los padres?");
        permiso = leer();
        if (permiso == "si") {
            console.log("Puede vistar el", LUGAR);
        }
    } else {
        console.log("Puede visitar el", LUGAR);
    }
}


main();