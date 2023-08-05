/** definir una clase
 * class
 */
export default class DatosPersonales {
    firstName;
    lastName;
    birthday;
   constructor(nombre,apellido,edad){
            this.firstName=nombre;
            this.lastName=apellido;
            this.birthday = edad
    }

    /**setter => set modificar */

  /*  setFirstName = () =>{

    }
    */
    setFirstName(name){
        this.firstName = name;
        this.#hola();
    }
/*
    set firstName(name){
        this.firstName=name;
    }
    */
    /** getter =>get mostrar */
    getFirstName(){
        return this.firstName;
    }
/*
    get firstName(){
        return this.firstName;
    }*/

    static holaMundo(){
        console.log("hola..." + this.firstName)
    }

    #hola(){
        console.log("prueba..")
    }

}
