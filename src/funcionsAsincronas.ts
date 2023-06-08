// funciones asincronas
console.log("funciones asincronas")

async function saluda(){
    console.log("hola mundo")
    return true
}


//const reesultado = saluda();
//console.log(reesultado)



saluda()
    .then((respuesta)  =>{// se ejecuta cuando la funcion se resuelva
        console.log("La respuesta es ", respuesta)
    })
    .catch(error => {console.error(error)})
    .finally(() => console.log("Se ha ejecutado la funcion de salugo"))      
console.log("seguimos trabajando")

function resuelve (respuesta: unknown){
    console.log(respuesta)
}
const resuelveFlecha = (respuesta:unknown) => console.log(respuesta)



const ObtenerRespuesta =async () => {
    console.log("Ejecutando obtener mi respuesta")
    const miRespouesta = await saluda()// forza,mos a que se espere la ejecucion de  la funcion asincrona
    console.log(miRespouesta)
}

console.log("he terminado")