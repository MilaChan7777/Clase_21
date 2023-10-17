import { obtenerData, Persona, Animal } from "./utils.js";

const render = async () => {
    const data = await obtenerData();

    const personas = data.personas;
    const contenedor = document.querySelector("#contenedor");

    for (const persona of personas) {
        const personaObj = new Persona(persona.nombre, persona.edad, persona.pais);
        const p = personaObj.render();
        contenedor.appendChild(p);
        personaObj.onClickListener();
    }

    const animales = data.animales;
    const contenedor2 = document.querySelector("#contenedor2");

    for (const animal of animales) {
        const animalObj = new Animal(animal.nombre, animal.edad, animal.raza);
        const p = animalObj.render();
        contenedor.appendChild(p);
        animalObj.onClickListener();
    }
    
}

window.onload = render;