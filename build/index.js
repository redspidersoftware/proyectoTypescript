"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// funciones asincronas
console.log("funciones asincronas");
function saluda() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("hola mundo");
        return true;
    });
}
//const reesultado = saluda();
//console.log(reesultado)
saluda()
    .then((respuesta) => {
    console.log("La respuesta es ", respuesta);
})
    .catch(error => { console.error(error); })
    .finally(() => console.log("Se ha ejecutado la funcion de salugo"));
console.log("seguimos trabajando");
function resuelve(respuesta) {
    console.log(respuesta);
}
const resuelveFlecha = (respuesta) => console.log(respuesta);
const ObtenerRespuesta = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Ejecutando obtener mi respuesta");
    const miRespouesta = yield saluda(); // forza,mos a que se espere la ejecucion de  la funcion asincrona
    console.log(miRespouesta);
});
console.log("he terminado");
//# sourceMappingURL=index.js.map