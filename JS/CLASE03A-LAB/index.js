import Ejemplo from "./ejemplo.js";
import HijaEjemplo from "./hija.js";
import {tres,dos as juan} from "./funciones.js";

/**class 
 * declaraciones
*/
/**INSTANCIAR UNA CLASE
 * INICIALIZARLA
 * new nombreClase => inicializar o instaciar
 */

Ejemplo.prueba();
//Ejemplo.show();
const a = new Ejemplo('red','fiat','cronos');
console.log(a);
const b = new HijaEjemplo('red','fiat','cronos',4);
console.log(b);
a.show();
a.color

b.newColor("azul");
b.show();
tres();
juan();


/**
 * vehiculo
 * color, marca, puertas, modelo
 */