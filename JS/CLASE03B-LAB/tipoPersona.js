import DatosPersonales from "./datosPersonales.js";

export default class TypePerson extends DatosPersonales{

    constructor(nombre,apellido,edad,type){
        super(nombre,apellido,edad);
        this.type = type;
    }

    ejemplo(){
        console.log(`${this.type}`)
    }

}