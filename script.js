import { obtenerData, Persona } from "./utils.js";

const render = async () => {
    const data = await obtenerData();
    
    const personas = data.personas;
    const contenedor = document.querySelector("#contenedor");

for(const persona of personas) {
    const personaObj = new Persona (persona.nombre, persona.edad, persona.pais);
    const p = personaObj.render();
    contenedor.appendChild(p);
    }
}

window.onload = render;