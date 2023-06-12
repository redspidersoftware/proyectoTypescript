"use strict";
//const miBoton = document.getElementById("boton-click") as HTMLButtonElement
const miBoton = document.querySelector("button#boton-click");
const miInput = document.querySelector("input[name=numPersonaje]");
const buscarPersonaje = (id) => {
    console.log("buscado Personaje ", id);
    const baseurl = "https://swapi.dev/api/";
    const url = `${baseurl}people/${id}`;
    fetch(url)
        .then(res => {
        return res.json();
        //console.log(res)
    })
        .then(data => {
        const { name } = data;
        const miSpan = document.querySelector("span#info");
        if (!miSpan)
            return;
        miSpan.innerText = name;
    })
        .catch(error => console.log(error));
};
miBoton === null || miBoton === void 0 ? void 0 : miBoton.addEventListener("click", (event) => {
    // aqui gestionamos el evento
    // hacer la lllamada a SWAPI
    if (!miInput)
        return;
    console.log(miInput === null || miInput === void 0 ? void 0 : miInput.value);
    buscarPersonaje(miInput === null || miInput === void 0 ? void 0 : miInput.value);
});
//miBoton!.onclick = (event) =>{}
miInput === null || miInput === void 0 ? void 0 : miInput.addEventListener("keydown", (event) => {
});
//# sourceMappingURL=Eventos.js.map