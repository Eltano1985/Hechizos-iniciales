const leer = require("prompt-sync")();

/**
 * Ej 1
 * Es crucial que los estudiantes aprendan los nombres de los hechizos correctamente para realizar magia de manera efectiva. 
 * En la clase de Encantamientos, los estudiantes deben demostrar su habilidad para recordar y lanzar los hechizos correctamente. 
 * Ayuda a simular este proceso creando un programa que solicite al usuario el nombre de un hechizo y le dé un número limitado de intentos para ingresarlo correctamente. 
 * Si el usuario ingresa el nombre del hechizo correctamente, el programa lo felicitará y finalizará. 
 * Si el usuario no logra ingresar el hechizo correctamente después de los intentos permitidos, el programa lo informará y finalizará.
 * 
 * 
 * Por ejemplo: hechizo "Wingardium leviosa", cantidad de intentos maximos 4
 *  Expecto Patronum
        Wingardium Leviosa

    Expelliarmus
 * Extra: permitir que el programa acepte 3 hechizos diferentes
 */


function main() {

    let NombreDelHechizo = 0;

    for (let contador = 0; contador < 4; contador++) {
        console.log("Ingrese el nombre del hechizo");
        NombreDelHechizo = leer();

        if (NombreDelHechizo == "Expecto Patronum" || NombreDelHechizo == "Wingardium Leviosa" || NombreDelHechizo == "Expelliarmus") {
            console.log("Felicitaciones, acertaste");
            contador = 5


        } else {
            console.log("Segui Intentando");
        }

    }
}












    main();