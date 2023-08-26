export default class Ejemplo {

    constructor(color,marca,modelo){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
       // this.#metodoPrivado();
    }

    setColor(color){
        this.color =color;
    }
    getColor(){
        return this.color;
    }

    show(){
        console.log(`El carro es de color: ${this.color}`);
    } 

    static prueba(){
        console.log('Ejemplo');
    }

    #metodoPrivado(){
        console.log("hola...");
    }


}


 