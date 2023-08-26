const inputItems = document.querySelector("#inputItems");
const btnItems = document.getElementById("btnItems");
const listItems= document.querySelector("#listItems");
const itemsList = document.querySelector("#itemsList");

inputItems.focus();

btnItems.addEventListener("click",function(){
 //   alert(inputItems.value);
 const trElement = document.createElement("tr"); /** <tr></tr> */
 const tdElementOne = document.createElement("td");/**<td></td> */
 const tdElementTwo = document.createElement("td");/**<td></td> */
 const tdButton = document.createElement("button");
    tdButton.innerText="Eliminar"
    tdButton.id="eliminarItems"
   // tdButton.className="btn btn-danger"
    tdButton.classList.add("btn","btn-danger");

 tdElementOne.textContent = inputItems.value;
 tdElementTwo.appendChild(tdButton);
 //tdElementTwo.innerHTML ="<button class='btn-dark btn'>Eliminar</button>"

 trElement.appendChild(tdElementOne);/** <tr><td></td></tr> */
 trElement.appendChild(tdElementTwo);/**<tr><td></td> <td></td></tr> */

 listItems.prepend(trElement);

 /**Crear li */
 const liElement = document.createElement("li");
 liElement.innerHTML="<p class='m-1'>"+ inputItems.value+"<button class='m-1 btn btn-danger'>Eliminar</button></p>";
 itemsList.append(liElement);

 const eliminarItems = document.querySelector("#eliminarItems");
 eliminarItems.addEventListener("click",function(){
  //accion de borrar.....
 });

 inputItems.focus();
 inputItems.value="";
})

