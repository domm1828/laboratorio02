//Declaración de variables 
// const - let - var

/**Funciones predeterminadas del navegador (window) */

//Alerta predeterminadas

/*
alert("Alerta ...");
confirm("Esta seguro?");
prompt("Ingrese el Nombre");
*/
//print(); //apertura el cuadro de dialogo de impresion
//open("http://google.com"); //apertura una nueva ventana
console.log(location.port);

/** Intervalos de tiempo, tiempo en espera */
const parrafoUno = document.querySelector("#parrafoUno");
const intervalTime = setInterval(function(){ 
   // parrafoUno.innerHTML += " prueba...";
    const fecha = new Date();
    document.getElementById('reloj').innerHTML = fecha.toLocaleTimeString();
}, 1000);

setTimeout(function(){
    parrafoUno.innerHTML += " prueba...";
},1000);

/** clearInterval() */
const boton = document.querySelector("#enventStop");
boton.addEventListener("click",function(){
    clearInterval(intervalTime);
})

//Eventos acciones..
/**
 * click, dblclick, 
 * change => input 
 * drag drop
 * keypress keyup keydown
 * mouseover mouseup mousedown mouseenter
 * scroll
 * play playing pause volumechange
 * online offline
 */

//Crear elementos de HTML
const ejemploDiv = document.createElement("div");
ejemploDiv.innerHTML="<p>Ejemplo de Prueba....</p><p>Ejemplo de acciones..</p>";

const divContenedor = document.querySelector(".contenedor");
divContenedor.appendChild(ejemploDiv);
///divContenedor.append("<p>Ejemplo de Texo</p>");
const image = document.createElement("img");
image.src="https://picsum.photos/id/600/100/100";
image.alt="Texto Alternativo";
divContenedor.appendChild(image);

const formulario = document.createElement("form");

const input = document.createElement("input");
input.placeholder="ejemplo";

formulario.appendChild(input);


