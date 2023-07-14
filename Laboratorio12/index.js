const inputItems = document.querySelector("#inputItems");
const btnItems = document.getElementById("btnItems");
const listItems= document.querySelector("#listItems");

inputItems.focus();

btnItems.addEventListener("click",function(){
 //   alert(inputItems.value);
 const trElement = document.createElement("tr"); /** <tr></tr> */
 const tdElementOne = document.createElement("td");/**<td></td> */
 const tdElementTwo = document.createElement("td");/**<td></td> */
 const tdButton = document.createElement("button");
    tdButton.innerText="Eliminar"
   // tdButton.className="btn btn-danger"
    tdButton.classList.add("btn","btn-danger");

 tdElementOne.textContent = inputItems.value;
 tdElementTwo.appendChild(tdButton);
 //tdElementTwo.innerHTML ="<button class='btn-dark btn'>Eliminar</button>"

 trElement.appendChild(tdElementOne);/** <tr><td></td></tr> */
 trElement.appendChild(tdElementTwo);/**<tr><td></td> <td></td></tr> */

 listItems.prepend(trElement);

 inputItems.focus();
 inputItems.value="";
})