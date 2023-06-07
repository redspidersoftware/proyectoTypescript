"use strict";
const alumnos = [{
        nombre: "Javi",
        edad: 20,
    },
    {
        nombre: "Aitor",
        edad: 30,
    },
    {
        nombre: "Alvar",
        edad: 18
    }];
//console.log(alumnos)
console.table(alumnos);
console.time("timer");
for (let i = 0; i < 1234567; i++) {
    let a = 0;
}
console.timeEnd("timer");
const coche = {
    marca: "Mercedes",
    modelo: "CLA",
};
coche.kilometros = 10000;
coche.modelo = "Clace C";
const modificaModelo = (coche) => {
    return {
        marca: coche.marca,
        modelo: "Mi modelo",
        kilometros: coche.kilometros,
    };
};
const miOtroCoche = modificaModelo(coche);
console.log({ coche }); //entre llaves, en la consola se ve eel nombre d ela variable
console.log(miOtroCoche);
//# sourceMappingURL=varios.js.map