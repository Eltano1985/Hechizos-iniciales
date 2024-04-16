const leer = require("prompt-sync")();

/**
 * Ej 1 
 * Compra de Varitas Mágicas:
 * Solicita al cliente su edad y determina si es lo suficientemente mayor como para comprar una varita mágica.
 * La edad minima para comprar una varita es a partir de los 11 años
 * 
 * Por ejemplo si el cliente tiene 14 años si puede comprar, en otro caso si tuviera 9 entonces no
 */

const PRODUCTO = "varita magica";

function main() {
    
    let edad = 0;

    console.log("Ingrese su edad");
    edad=Number(leer());

    if (edad>=11) {
        console.log("Puede comprar una", PRODUCTO);
    } else {
        console.log("No puede comprar una", PRODUCTO);
    }
    
    
    
        
   
}


main();