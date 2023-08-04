import Ejemplo from "./ejemplo.js";
export default class HijaEjemplo extends Ejemplo{

    constructor(color,marca,modelo,ruedas){
        super(color,marca,modelo);
        this.ruedas = ruedas;
    }

    newColor(color){
        super.setColor(color);
    }

}