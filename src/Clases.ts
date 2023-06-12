type Tforma = "Triangulo" | "Cuadrado" | "Rectangulo"

class Forma{
    tipo: Tforma
    base: number
    altura: number

    constructor (t: Tforma, b:number, a:number){
        this.tipo = t
        this.base = b
        this.altura = a
    }
}

const miForma = new Forma ("Triangulo", 10, 5)

console.log(miForma instanceof Forma)
