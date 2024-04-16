const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Clase de Encantamientos
 * Para saber el total de ingredientes necesarios en la clase de hoy tenemos que saber el numero de estudiantes y libros a usar 
 * Donde podemos saber el total triplicando la cantidad de varitas por estudiante y duplicando la cantidad de libros 
 * Los estudiante tiene que traer su propia varita, los que no traigan no podran practicar los encantamientos
 * 
 * Por ejemplo si hay 7 varitas y 4 libros a usar los ingredientes necesarios son 29
 */

const ELEMENTO_1 = "varitas";
const ELEMENTO_2 = "libros";


function main() {
    
    let cantElem1 = 0
    let cantElem2 =0
    
    console.log("Ingrese la cantidad de", ELEMENTO_1);
    cantElem1 = Number(leer());
    console.log("Ingrese la cantidad de", ELEMENTO_2);
    cantElem2 = Number(leer());
    console.log("la cantidad de ingredientes a usar es", cantElem1*3 + cantElem2*2);


}


main();