const leer = require("prompt-sync")();

/**
 * Ej 1
 * En este ejercicio, te convertirás en un joven mago o bruja que se enfrenta a la misión más importante de todas: derrotar a Lord Voldemort. Sin embargo, para hacerlo, necesitarás afinar tus habilidades mágicas y tu astucia.

Tu tarea es programar un simulador de batalla mágica donde tú, como estudiante de Hogwarts, puedas lanzar hechizos contra Voldemort.

El mecanismo es el siguiente: cada vez que lanzas un hechizo, ingresarás un número que representa tu hechizo. Si ese número coincide con un número aleatorio el cual simula acertar un ataque, lograrás un ataque exitoso contra Voldemort y reducirás su vida. Sin embargo, si no logras acertar el número, Voldemort contraatacará y perderás puntos de vida.

El simulador debe seguir funcionando hasta que alguno de los dos, tú o Voldemort, llegue a sus puntos mínimos de vida. Para el estudiante, los puntos de vida son 1, mientras que para Voldemort son -1 (sí, él es un ser oscuro, después de todo).

¡Prepárate para enfrentar la oscuridad y demuestra que eres digno de portar la varita de sauco!

Recuerda, en Hogwarts la valentía, la inteligencia y el trabajo en equipo son fundamentales. ¡Buena suerte!

Vidas iniciales/minimas, daño jugador/enemigo y hechizos a usar (minimo 3) quedan a su propia eleccion
Considerar que:
- la vida del enemigo no puede ser menor que la del jugador
- cada hechizo tiene un valor de daño unico y el enemigo tiene 1 solo hechizo de ataque
 */

const VIDA_INICIAL_JUGADOR = 10;
const VIDA_INICIAL_ENEMIGO = 15;
const HECHIZO_1 = "Wingardium leviosa";
const DAÑO_HECHIZO_1 = "3 puntos de daño";
const HECHIZO_2 = "Patronus";
const DAÑO_HECHIZO_2 = "2 puntos de daño";
const HECHIZO_3 = "Expelliarmus";
const DAÑO_HECHIZO_3 = "1 punto de daño";
const DAÑO_JUGADOR= 4;

function main() {

let numeroDeHechizo = 0;

console.log("Ingrese uno de los 3 numeros de hechizos");
numeroDeHechizo = Number(leer());

let min = 1;
let max = 3;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("El numero secreto de hechizo es", numeroAleatorio);

if (numeroDeHechizo == numeroAleatorio && numeroDeHechizo == 1) {
    console.log("Atacaste a tu enemigo con un", HECHIZO_1, "y le hiciste", DAÑO_HECHIZO_1);
    console.log("La vida de tu enemigo es", VIDA_INICIAL_ENEMIGO - DAÑO_HECHIZO_1);
}
if (numeroDeHechizo == numeroAleatorio && numeroDeHechizo == 2) {
    console.log("Atacaste a tu enemigo con un", HECHIZO_2, "y le hiciste", DAÑO_HECHIZO_2);
    console.log("La vida de tu enemigo es", VIDA_INICIAL_ENEMIGO - DAÑO_HECHIZO_2);
}
if (numeroDeHechizo == numeroAleatorio && numeroDeHechizo == 3) {
    console.log("Atacaste a tu enemigo con un", HECHIZO_3, "y le hiciste", DAÑO_HECHIZO_3);
    console.log("La vida de tu enemigo es", VIDA_INICIAL_ENEMIGO - DAÑO_HECHIZO_3);
} else {
    console.log("No acertaste el hechizo");
    console.log("Tu vida es", VIDA_INICIAL_JUGADOR - DAÑO_JUGADOR);
}







   
    
    



}


main();