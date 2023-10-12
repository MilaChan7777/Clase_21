import { obtenerData } from "./utils.js";

const render = async () => {
    const data = await obtenerData();
    console.log(data);
}

const personas = data.personas;
const contenedor = document.querySelector("#contenedor");

for(const perosna of personas) {
    const personaObj = new Persona (persona.nombre, persona.edad);
    const p = personaObj.render();
    contenedor.appendChild(p);
}

window.onload = render;