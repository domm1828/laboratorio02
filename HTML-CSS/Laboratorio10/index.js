/** OBTENER BUSCAR ELEMENTOS HTML DESDE JS
 * METODOS MODERNOS
 * querySelector() Busca un solo elementos querySelectorAll() busca todos los elementos
 * METODOS TRADICIONALES
 * getElementById() => busca el elemento solo por id
 * getElementsByClass() => Busca los elementos por class
 * getElementsByTagName() => Busca los elementos por etiquetas de HTML
 */
var x=0;
const elementoP = document.getElementById('prueba');

elementoP.style.color="red";

const divContainer = document.querySelector(".container");

//insertar elemento de html img
const img = document.createElement("img"); //crea cualquier etiqueta de html
img.src="./logo.jpg";
img.alt="Texto alternativo";

//Agregar elementos creados a un objecto del DOM al final
divContainer.appendChild(img);
//Remover elementos en html
//elementoP.remove();


//divContainer.appendChild("<img src='' alt='Prueba'>")

// Propiedad windows
/*
alert("mensaje");
confirm("Esta seguro?");
open("https://google.com");
print();*/
//prompt("Ingrese nombre");
//close();

//history.back();

console.log(document.URL)
document.write("Escribe en el docuemto de html");
document.title="Ejemplo de Titulo";
/**Eventos
 * 
 * keyPress (teclado)
 * keyUp - keyDown
 * click 
 * change 
 * copy
 * cut
 * focus
 * mouseover - mouseout mouseup mousedown
 * online offline
 * play, pause, volumechange
 * scroll
 * submit
 */

const xy=document.querySelector('.ejemplo');


const boton = document.getElementById('press');
boton.addEventListener('click',function(){
    xy.style.color="green";
});




xy.addEventListener('click',function(){
    xy.style.color="black";
});
