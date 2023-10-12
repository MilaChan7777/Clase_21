export class Persona {
    nombre = "";
    edad = 0;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    render() {
        const texto = "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + "años";
        const p = document.createElement("p");
        p.textContent = texto;
        return p;
    }
}