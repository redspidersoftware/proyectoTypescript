"use strict";
//funciones
function suma(a, b) {
    return a + b;
}
//funciones tipo flecha
const multiplica = (a, b) => {
    return a * b;
};
const multiplica_2 = (a, b) => a * b;
const obtenRectangulo = (base, altura) => {
    return {
        base: base,
        altura: altura,
        superficie: base * altura
    };
};
//return implicto
const obtenRectangulo_2 = (base, altura) => ({
    base,
    altura,
    superficie: base * altura
});
const miRectangulo = obtenRectangulo(10, 20);
const miRectangulo_2 = obtenRectangulo_2(10, 20);
//# sourceMappingURL=funciones.js.map