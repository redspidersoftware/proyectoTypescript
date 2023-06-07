console.log("hola")

console.log("hola")

console.log("hola")

console.log("hola")

console.log("hola")


interface Alumno {
    nombre: string,
    edad: number
}

const alumnos: Alumno[] =[{
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
}]
//console.log(alumnos)
console.table(alumnos)

console.time("timer")

for(let i=0; i< 1234567; i++)
{
    let a =0
}
console.timeEnd("timer")
