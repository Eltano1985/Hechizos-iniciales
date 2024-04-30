const leer = require("prompt-sync")();

/**
 * Ej 2
 * te enfrentarás a un desafío único y emocionante. Te encuentras en un oscuro y tormentoso bosque, rodeado de la neblina que parece estar cargada de misterio y peligro. En este bosque, los temidos Dementores, criaturas de la oscuridad que se alimentan de la felicidad y los recuerdos alegres, están acechando.

Eres un valiente estudiante de Hogwarts, y tu misión es defender tu propia felicidad y los recuerdos alegres al igual que de una persona querida contra los Dementores. Pero ten cuidado, estos seres malignos no dudarán en atacarte y tratar de absorber tu felicidad y la de tu ser querido.

El desafío comienza ahora. Te encontrarás en un enfrentamiento constante contra los Dementores. Para defenderte, deberás ingresar números aleatorios entre 0 y 3. Si adivinas correctamente el número aleatorio generado por los Dementores, lograrás defenderte y proteger tus recuerdos.

Pero aquí hay un giro: si los Dementores lanzan más de cinco ataques, existe la posibilidad de que aparezca una persona misteriosa para ayudarte a derrotar a los Dementores y restaurar la paz en el bosque.

Recuerda, tanto tú como tu ser querido pueden recibir ataques de los Dementores, pero solo uno a la vez, a menos que ocurra un número especial que permita atacar a los dos al mismo tiempo. Si tu felicidad y recuerdos alegres llegan a cero o la de tu ser querido entonces es el fin para ambos. Mantén tu concentración y tu valentía mientras te enfrentas a este desafío.

¿Estás listo para adentrarte en esta emocionante aventura y demostrar tu valentía contra las fuerzas oscuras? ¡Adelante, el destino del bosque dependen de vos!
 */
const VIDA_INICIAL_JUGADOR = 100
const VIDA_INICIAL_AMIGO = 80
const DANIO_JUGADOR = 10
const DANIO_AMIGO = 8

function main() {

    let numeroIngresado = 0;
    let numeroAleatorio = 0;
    let min = 1;
    let max = 3;
    let vidaDelJugador = 100;
    let vidaDelAmigo = 80;
    let aparecePersonaMisteriosa = 0;
    let turno = 0;
    let numeroAleatorio2 = 0;
    let minProbMisteriosa = 0;
    let maxProbMisteriosa = 1;
    while (vidaDelJugador > 0 && vidaDelAmigo > 0 && !aparecePersonaMisteriosa) {
    
    console.log("Ingrese un numero entre 0 y 3");
    numeroIngresado = Number(leer());

    numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("El numero aleatorio es", numeroAleatorio);
    
    if (numeroIngresado == numeroAleatorio) {
        console.log("Protegiste tus recuerdos y los de tu amigo");
        console.log("Tu vida es ", vidaDelJugador, "y la de tu amigo es", vidaDelAmigo);
    }
    if (numeroIngresado > numeroAleatorio) {
        console.log("Los dementores te atacaron a vos");
        console.log("Tu vida es", vidaDelJugador = vidaDelJugador - DANIO_JUGADOR);
    }
    if (numeroIngresado < numeroAleatorio) {
        console.log("Los dementores atacaron a tu amigo");
        console.log("La vida de tu amigo es", vidaDelAmigo = vidaDelAmigo - DANIO_AMIGO);
    }
    turno = turno +1;
    console.log("El turno es", turno);
    
    if (turno>5) {
        aparecePersonaMisteriosa = Math.floor(Math.random() * (maxProbMisteriosa - minProbMisteriosa + 1)) + minProbMisteriosa
        console.log(aparecePersonaMisteriosa);
        if (aparecePersonaMisteriosa == 1){
            console.log("Derrotaste a tu enemigo");

        
        }
    }
    }
    
    
    }









main();