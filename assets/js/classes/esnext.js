class Rectangulo {

    #area = 0; // Propiedad privada

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    #calcularArea() { // Método privado
        console.log(this.#area);
    }

    metodoPublico() {
        this.#calcularArea(); // Llama al método privado desde dentro de la clase
    }
}


const rectangulo = new Rectangulo(10, 15);

rectangulo.metodoPublico(); // 150

// rectangulo.#calcularArea(); // Genera un error, ya que no es accesible desde fuera

console.log(rectangulo); // 150









// class MiClase {
//     #metodoPrivado() {
//         console.log("Este es un método privado de clase");
//     }

//     metodoPublico() {
//         this.#metodoPrivado(); // Llama al método privado desde dentro de la clase
//     }
// }

// let instancia = new MiClase();
// instancia.metodoPublico(); // Funciona
// // instancia.#metodoPrivado(); // Genera un error, ya que no es accesible desde fuera