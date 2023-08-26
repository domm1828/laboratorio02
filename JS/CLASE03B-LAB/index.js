import DatosPersonales from "./datosPersonales.js";
import TypePerson from "./tipoPersona.js";
/** instanciar una clase
 * incializar la clase
 */
const ejemplo = new DatosPersonales("juana","ramona",30);
ejemplo.setFirstName("Duglas");
console.log(ejemplo);

const b = new TypePerson("juana","ramona",30,"profesor");
console.log(b);
console.log(b.firstName)
//DatosPersonales.setFirstName("hola");
DatosPersonales.holaMundo();

