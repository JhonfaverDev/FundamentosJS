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

const spiderman = new PersonaNatural('peter parker', 'spider', 'souy tu am');

console.log(spiderman); 
spiderman.quienSoy(); 

spiderman.setComidaFavorita = 'El pie de cereza de la tía May'; 

console.log('conteo estatico', PersonaNatural._conteo); 
console.log(PersonaNatural.conteo); 

PersonaNatural.mensaje();

PersonaNatural.propiedadExterna = 'Hola Mundo'; // Hacer esto no es recomendable, pero se puede hacer, Ya que los demas programadores pueden confundirse
console.log(PersonaNatural); 
