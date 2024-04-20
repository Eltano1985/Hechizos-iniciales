const leer = require("prompt-sync")();

/**
 * Ej 3
 * La preparación de pociones es una habilidad esencial enseñada en la clase de Pociones de Hogwarts. Cada poción requiere una combinación precisa de ingredientes y una ejecución exacta de los pasos para ser exitosa. En este ejercicio, nos sumergiremos en la atmósfera de la clase de Pociones, donde los estudiantes aprenderán a preparar una de las pociones más icónicas: la poción Multijugos. Para preparar esta poción, los estudiantes deben seguir la receta exacta y medir cuidadosamente las cantidades de cada ingrediente. Cada ingrediente tiene un límite de intentos definido, y solo si se logra ingresar la cantidad correcta del ingrediente previo, el estudiante puede avanzar al siguiente. Si el estudiante no logra ingresar la cantidad correcta de un ingrediente dentro de los intentos permitidos, la preparación de la poción fallará y el proceso se verá interrumpido. Solo aquellos estudiantes que sean precisos y persistentes podrán dominar la preparación de la poción Multijugos y disfrutar de sus efectos transformadores.
 * 
 * Receta de la Poción Multijugos:
 * Ingredientes:
 * 3 sanguijuelas reventadas
 * 5 unidades de pulverizado de cuerno de Bicornio
 * 1 pelo de gato negro
 * 2 colas de serpiente
 * 
 * Instrucciones:
    Agrega las 3 sanguijuelas reventadas a la caldera.
    Agita la mezcla lentamente durante 30 segundos en dirección horaria.
    Incorpora las 5 unidades de pulverizado de cuerno de Bicornio y remueve con la cuchara de palo.
    Añade el pelo de gato negro y mezcla suavemente en sentido antihorario durante 1 minuto.
    Por último, agrega las 2 colas de serpiente y revuelve vigorosamente durante 2 minutos.
    Deja que la poción repose durante 5 minutos antes de su uso.
 * 
 */
const INGREDIENTE_1 = "sanguijuelas reventadas";
const INGREDIENTE_2 = "unidades de pulverizado de cuerno de Bicornio";
const INGREDIENTE_3 = "pelos de gato negro";
const INGREDIENTE_4 = "colas de serpiente";



function main() {

   let cantidadIngresada = 0;

   for (let contador = 0; contador < 6; contador++) {
      console.log("Ingrese la cantidad correcta de", INGREDIENTE_1);
      cantidadIngresada = Number(leer());
      if (cantidadIngresada == 3) {
         for (let contador2 = 0; contador2 < 5; contador2++) {
            console.log("Ingrese la cantidad correcta de", INGREDIENTE_2);
            cantidadIngresada = Number(leer());
            if (cantidadIngresada == 5) {
               for (let contador3 = 0; contador3 < 4; contador3++) {
                  console.log("Ingrese la cantidad correcta de", INGREDIENTE_3);
                  cantidadIngresada = Number(leer());
                  if (cantidadIngresada == 1) {
                     for (let contador4 = 0; contador4 < 3; contador4++) {
                        console.log("Ingrese la cantidad correcta de", INGREDIENTE_4);
                        cantidadIngresada = Number(leer());
                        if (cantidadIngresada == 2) {
                           console.log("Ingresaste la cantidad correcta de todos los ingrediente");
                           contador = 40;
                           contador2 = 50;
                           contador3 = 60;
                           contador4 = 70;
                        }
                     }

                  }

               }
            }
         }



      }

   }

}





main();