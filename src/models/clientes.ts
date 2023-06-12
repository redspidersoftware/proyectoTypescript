class Cliente {
    id: number
    nombre: string
    email : string
    activo: boolean

    constructor(id: number,n: string, e: string){
        this.id =  id
        this.nombre =n
        this.email = e
        this.activo =true
    }
    desactivarCliente(){
        this.activo = false
    }

    static definicion(){
        console.log("Activo valioso")
    }    
}

export {Cliente}