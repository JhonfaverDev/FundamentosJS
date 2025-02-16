const fher = {
    nombre: 'Faver',
    edad: 19,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

function Persona(nombre, edad) { // Constructor
    console.log('Se ejecutó esta línea'); 
    this.nombre = nombre; // Se crea un nuevo objeto
    this.edad = edad; // Se crea un nuevo objeto
    this.imprimir = function() { 
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`); 
    }
}

const maria = new Persona('María', 18); // Se ejecuta el constructor
const melissa = new Persona('Melissa', 18); // Se ejecuta el constructor
console.log(maria); // Se ejecuta el constructor
maria.imprimir(); // Se ejecuta el constructor