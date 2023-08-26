const prompt = require("prompt-sync")({ sigint: true })
let i = prompt("Ingrese un valor: ");
console.log(i);
i = parseInt(i);
console.log(Number.isInteger(i));
console.log(typeof i);

/** ESTRUCTURAS CONDICONALES
 * IF - ELSE
 * if => condicion simple
 */
if (i > 10) {
    console.log("el numero es mayor a 10");
}
/** if- else condicion alternativa
 * if(condicion){
 * }
 * else{
 * }
 */

if (i < 10) {
    console.log("El numero es menor a 10");
}
else {
    console.log("el numero es mayor o igual a 10")
}
/** saber si el valor ingresado es
 * menor a 5 indicar reprobado
 * menor de 10 bueno
 * menor que 15 colocar bien
 * mayor de 15 colocar excelente
 */
/** IF - ELSE ANIDADO (IF  ELSE IF ELSE IF .... ELSE) */

if (Number.isInteger(i)) {
    if (i < 5) {
        console.log("REPROBADO");
    }
    else if (i < 10) {
        console.log("bueno");
    }
    else if (i <= 15) {
        console.log("bien");
    }
    else {
        console.log("excelente");
    }
}
else {
    console.log("Ingrese un numero")
}

/** ESTRUTURA DE CONTROL SWITCH CASOS DE USO
 * SOLICITAR AL USUARIO INGRESAR UN VALOR DE 1-7 PARA SABER
 * QUE DIA DE LA SEMANA ES
 * shitch(varibale){
 * case : break;
 * case : break;
 * default: break;
 * }
 */

let dia = prompt("INGRESE UN NUMERO DE 1 - 10: ");

switch (dia) {
    case "1":
        console.log("LUNES");
        break;
    case "2": case "9": case "10":
        console.log("Martes");
        break;
    case "3":
        console.log("MIERCOLES");
        break;
    case "4":
        console.log("JUEVES");
        break;
    case "5":
        console.log("VIERNES");
        break;
    case "6":
        console.log("SABADO");
        break;
    case "7":
        console.log("DOMINGO");
        break;
    case "8":
        console.log("MARTES");
        break;
    default:
        console.log("FUERA DE RANGO");
        break;
}

/** estructura de control repetitivas
 * while => repitas mientras
 * variable de inicializacion
 * while(condicion){
 * accion (incrementar o decrementar)
 * }
 */
/**REPETIR LOS NUMEROS HASTA EL VALOR DADO POR EL 
 * USUARIO > 1
 *  */

let r = prompt("REPETIR HASTA: ");
// condiciona if
let a = 1;
while (a <= r) {
    console.log("VALOR: ", a);
    a++;
}

/** FOR
 * for(inicializacion; condicion; accion){
 * 
 * }
 */

for(let i=0; i < r; i++){
    console.log("FOR: ",i);
}

let inicio = prompt("REPETIR DESDE: ");
let final = prompt("REPETIR HASTA: ");

for( let i=inicio; i<=final; i++){
    console.log("RP--",i);
}

/**
 * EJERCICIOS
 * INGRESADO TRES VALORES POR EL USUARIO, SABER CUAL ES 
 * EL MAYOR DE LOS TRES Y EL MENOR DE LOS TRES
 * 
 * REALIZAR LA TABLA DE MULTIPLICAR DADO UN VALOR 
 * POR EL USUARIO EJEMPLO. 8
 *  8 X 1 = 8
 *  8 X 2 = 16
 *  8 X 10 = 80
 * 
 * REALIZAR LA TABLA DE DIVIDIR DADO UN VALOR POR EL 
 * USUARIO 1
 * 8 / 8 = 1
 * 16 / 8 = 2
 * 24 / 8 = 3
 * 80 / 8 = 10
 * 
 */