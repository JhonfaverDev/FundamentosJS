class PersonaNatural {

    // Propiedades estaticas 
    static _conteo = 0;

    static get conteo() { // Getter estatico
        return PersonaNatural._conteo + ' instancias'; // Se accede a la variable estatica
    }

    static mensaje() { // Metodo estatico
        console.log(this.nombre); // Se accede a la variable estatica
        console.log('Hola a todos, soy un metodo estatico');    
    }       
    
    // Propiedades de instancia
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    // Constructor
    constructor(nombre = 'Sin nombre' , codigo = 'Sin Codigo', frase = 'Sin frase') {
        this.nombre = nombre; 
        this.codigo = codigo;
        this.frase = frase;

        
        PersonaNatural._conteo++;
    }

    set comidaFavorita(comida) { // Setter solo recibe un argumento
        this.comida = comida; 
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    } // Getter no recibe argumentos

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}


class Heroe extends PersonaNatural { // Herencia
    clan = 'Sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase); // Se ejecuta el constructor de la clase padre

        // Antes de usar este atributo, se debe ejecutar el constructor de la clase padre
        this.clan = 'Los Avengers'; // Se ejecuta el constructor de la clase hija
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('peter parker', 'spider', 'souy tu am');   

console.log(spiderman);
spiderman.quienSoy();
