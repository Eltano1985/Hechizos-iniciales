const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Cálculo del Hechizo Patronus:
 * Solicita al usuario la edad del mago y la cantidad de días de práctica del hechizo Patronus, luego calcula la potencia del hechizo. La potencia se obtiene duplicando la edad sumado a la mitad de todos los días de practica realizados para dominar el Patronus
 * 
 * Por ejemplo si la edad es 25 y los días de practica son 158 entonces su potencia con el hechizo patronus es de 129
 */

const EDAD = "edad del mago";
const TIEMPO = "cantidad de dias de practica del hechizo";
const POTENCIA = "potencia del hechizo";


function main() {
    
    let edad = 0;
    let tiempo = 0;
    
    console.log("Ingrese la", EDAD);
    edad=Number(leer());
    console.log("Ingrese la", TIEMPO);
    tiempo=Number(leer());
    console.log("La", POTENCIA, "es", edad*2+tiempo/2);

}


main();