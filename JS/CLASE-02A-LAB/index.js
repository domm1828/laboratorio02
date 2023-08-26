const ejemplo = (a,x,y,z)=>{
    let suma = a+x+y+z;
}

let z=5;
let y=8;
let a=8;
let x=6;

ejemplo(6,5,7,8);

let firstName ="EJEMPLO"
/*** OBJETO DECLARAMOS */
const persona = {
    firstName ,
    lastName:"PEDRO",
    birthday:20,
    status:true,
    fullName:function(){
        return `${this.firstName}  ${this.lastName}`;
    }
};
persona.address="CABA";
console.log(persona);
console.log(persona.firstName);
console.log(persona["firstName"]);
console.log(persona.fullName())

const {status,birthday}=persona;
console.log(status);
console.log(birthday);
console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona))
console.log(persona?.ejemplo);

/** ARRAY [] */
const arrayEjemplo = new Array('hola',2,3,4,true);
console.log(arrayEjemplo.length);//length mostrar la cantidad de elementos
const arrayDos=[3,"hola","buenas",3,4,"**"];//[] array vacio
console.log(arrayDos.length);
console.log(arrayDos[2]);
/**OPERACIONES Y FUNCIONES DENTRO DE ARRAYS */
//push agregar uno o varios elementos al final del vector
//unshift agreagar uno o varios elementos al prinicipio del vector

arrayDos.push(4,5,6,"hola");
console.log(arrayDos.length);
arrayDos.unshift("*****");
console.log(arrayDos);
console.log(arrayDos.length);
//pop() //eliminar el ultimo elemento del vector
//shift() //eliminar el primer elemento del vector
arrayDos.pop();
arrayDos.shift();
console.log(arrayDos);
console.log(arrayDos.length);
//splice(pos,cantidad);
arrayDos.splice(1,2); 
console.log(arrayDos);
console.log(arrayDos.length);
arrayDos.splice(1,0,'holaaa*')
console.log(arrayDos);
/**metodo de recorrido foreach */
arrayDos.forEach((elements,pos)=>{
console.log(`${elements} => POS ${pos}`)
});
//map()
let dataArray = arrayDos.map((elements,pos)=>{
    console.log(`${elements} => POS ${pos}`);
}) 
//filters find

let filterArray = arrayDos.filter((element)=>{
    return element <= 4 ;
})


filterArray = arrayDos.find((element)=>{
    return element <= 4 ;
})
