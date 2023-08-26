var opciones =['roca.png','papel.png','tijeras.png'];
let countJuego = 0;
let userJuego;
let maquinaJuego;
//opciones [piedra,papel,tijeras]

let inicial = document.querySelector("#inicial");

//random Math
const juegoInicial = (minimo,maximo) =>{
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}
 
const juegoMaquina = ()=>{
    countJuego += 1;
    document.getElementById("cantidad").innerHTML = countJuego;
    maquinaJuego = juegoInicial(0,2);
    let init = document.querySelector("#init");
    let imagen = `<img style="width:50px" src="/JS/CLASE04A-LAB/${opciones[maquinaJuego]}">`;
    
    let creteDiv= document.createElement("div");
    creteDiv.classList.add("row",  "bg-dark" ,"text-white", "p-2");

    creteDiv.innerHTML =`<div class="col-4">${imagen}</div>
                         <div class="col-4" id="user_${countJuego}"><button onclick="juegoUser(${countJuego})" class="btn-success btn">JUGAR</button></div>
                         <div class="col-4" id="result_${countJuego}"> </div>`;

    init.after(creteDiv);
    inicial.classList.add("d-none")
}

const juegoUser = (id) =>{
    userJuego = juegoInicial(0,2);
    let imagen = `<img style="width:50px" src="/JS/CLASE04A-LAB/${opciones[userJuego]}">`;

    let divUser = document.querySelector("#user_"+id);
    divUser.innerHTML=imagen;
    
    let result =  document.querySelector("#result_"+id);
    let dataResult = validateJuego(userJuego,maquinaJuego);
    result.innerHTML =dataResult;
    if(dataResult=='GANASTE...'){
        result.classList.add('bg-success');
    }
    if(dataResult=='PERDISTE...'){
        result.classList.add('bg-danger');
    }
    inicial.classList.remove("d-none")

}

const validateJuego = (user,maquina) =>{
    // 0 , 1 , 2
    // 'roca.png','papel.png','tijeras.png'
    if( user == maquina){
        return "EMPATE";
    } else if( (user == 0 && maquina==2) || (user == 1 && maquina==0) || (user == 2 && maquina==1)   ){
        return "GANASTE...";
    }
    else{
        return "PERDISTE...";
    }
}
