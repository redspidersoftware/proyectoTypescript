"use strict";
const userInput = document.querySelector("input#input-username");
const passwordInput = document.querySelector("input#input-password");
const userFormulario = document.querySelector("form");
userFormulario.onsubmit = (event) => {
    event.preventDefault();
    if (!userInput || !passwordInput)
        return;
    console.log("dentro submit");
    const usuario = userInput === null || userInput === void 0 ? void 0 : userInput.value;
    const password = passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value;
};
//indexedDataBase
const database = window.indexedDB;
if (database) {
    console.log("tengo bbdd");
    let db;
    const request = database.open("Usuarios", 1);
    request.onupgradeneeded = () => {
        db = request.result;
        console.log("BBDD creada", db);
    };
}
//# sourceMappingURL=indexedDB.js.map