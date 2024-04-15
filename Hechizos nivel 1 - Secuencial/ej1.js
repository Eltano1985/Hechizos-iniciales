const leer = require("prompt-sync")();

/**
 * Ej 1 
 * Cálculo de Pociones
 * Solicita la cantidad de escarabajos de ojo de tigre y el número de raíces de mandrágora necesarios para hacer una poción, y luego calcula la cantidad total de ingredientes necesarios
 * 
 * Por ejemplo si es necesario 8 raíces de mandrágora y 5 escarabajos de ojo de tigre para hacer la poción entonces el total de ingredientes es 13
 */

const INGREDIENTE_1 = "escarabajos de ojo de tigre";
const INGREDIENTE_2 = "raices de mandagora";



function main() {
    console.log("Ingrese cuantos", INGREDIENTE_1, "necesita");
    CantIngred1 = Number(leer());
    console.log("Ingrese cuantas", INGREDIENTE_2, "necesita");
    CantIngred2 = Number(leer());
    console.log("El total de ingredientes para la pocion es", CantIngred1 + CantIngred2);
}


main();