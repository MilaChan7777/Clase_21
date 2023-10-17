export class Persona {
    nombre = "";
    edad = 0;
    pais = "";
    #element = null; //Tipo de dato que significa que no existe pero representa información

    constructor(nombre, edad, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
    }

    #obtenerTexto() {
        const texto = "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años" + " y soy de " + this.pais ;
        return texto;
    }

    render() {
        //const texto = "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años" + " y soy de " + this.pais ;
        const texto = this.#obtenerTexto();
        const p = document.createElement("p");
        p.textContent = texto;
        this.#element = p;
        return p;
    }

    onClickListener(){
        this.#element.addEventListener("click", () => {
            const texto = this.#obtenerTexto();
            alert(texto);
        })
    }
}

export class Animal {
    nombre = "";
    edad = "";
    raza = "";
    #element = null;

    constructor(nombre, edad, raza){
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    #obtenerTexto(){
        const texto = "Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años" + " y soy de raza " + this.raza ;
        return texto;
    }

    render() {
        const texto = this.#obtenerTexto();
        const p = document.createElement("p");
        p.textContent = texto;
        this.#element = p;
        return p;
    }

    onClickListener(){
        this.#element.addEventListener("click", () => {
            const texto = this.#obtenerTexto();
            alert(texto);
        })
    }
}

export const obtenerData = async () => {
    const response = await fetch("https://raw.githubusercontent.com/MilaChan7777/Clase_21/main/data.json");
    const data = await response.json();
    return data;
}