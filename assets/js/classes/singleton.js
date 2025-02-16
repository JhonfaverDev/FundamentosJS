// Un singleton es una clase que solo puede ser instanciada una vez.

class Singleton {
    static instance; // undefined

    nombre = ''; // Se crea una variable para guardar el nombre del singleton.

    constructor(nombre = '') {

        // const a = undefined;
        // console.log(a); // undefined
        // console.log(!a); // true
        // console.log(!!a); // false

        if(!!Singleton.instance) { // Si ya existe una instancia de la clase, se retorna la misma.
            return Singleton.instance;
        
        }

        Singleton.instance = this; 
        this.nombre = nombre;

    
        

    }

}

const instancia1 = new Singleton('Instancia 1');
const instancia2 = new Singleton('Instancia 2');
const instancia3 = new Singleton('Instancia 3');


console.log(instancia1.nombre); // Imprime 'Instancia 1'
console.log(instancia2.nombre);
console.log(instancia3.nombre);