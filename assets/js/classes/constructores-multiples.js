class Persona {

    // constructor(nombre, apellido, pais) {
    static porObjeto({ nombre, apellido, pais }) {  // se puede hacer destructuring en los argumentos
        return new Persona(nombre, apellido, pais); // retorna una nueva instancia de la clase Persona
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log( `info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = 'Honduras';


const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fher); // se llama al método estático porObjeto


persona1.getInfo(); // info: Melissa, Flores, Honduras
persona2.getInfo(); // info: Fernando, Herrera, Costa Rica