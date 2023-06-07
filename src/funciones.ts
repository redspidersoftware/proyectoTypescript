//funciones

function suma (a:number, b: number){
    return a+b
}
//funciones tipo flecha
const multiplica = (a: number,b: number) =>{
    return a * b
}

const multiplica_2 = (a: number,b: number) => a * b

interface Rectangulo {
    base: number,
    altura: number,
    superficie : number,
}

const obtenRectangulo = (base: number, altura: number): Rectangulo => {
    return{
        base : base,
        altura: altura,
        superficie: base * altura
    }
}

//return implicto
const obtenRectangulo_2 = (base: number, altura: number): Rectangulo => ({
        base ,
        altura,
        superficie: base * altura    
})

const miRectangulo = obtenRectangulo (10,20)
const miRectangulo_2 = obtenRectangulo_2 (10,20)

