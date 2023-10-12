export class Persona {
    nombre = "";
    edad = 0;
    pais = "";

    constructor(nombre, edad, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }

    render() {
        const texto = "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años" + " y soy de " + this.pais ;
        const p = document.createElement("p");
        p.textContent = texto;
        return p;
    }
}

export const obtenerData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/MilaChan7777/Clase_21/main/data.json");
    const data = await response.json();
    return data;
}