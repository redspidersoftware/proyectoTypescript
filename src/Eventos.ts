//const miBoton = document.getElementById("boton-click") as HTMLButtonElement
const miBoton = document.querySelector("button#boton-click") as HTMLButtonElement  | null
const miInput = document.querySelector("input[name=numPersonaje]") as HTMLInputElement | null

const buscarPersonaje =(id: string) =>{
    console.log("buscado Personaje ",id)
    const baseurl= "https://swapi.dev/api/"
    const url =`${baseurl}people/${id}`
    fetch (url)
        .then(res => {
            return res.json()
            //console.log(res)
        })
        .then(data => {
            const {name} =data
            const miSpan =document.querySelector("span#info") as HTMLAnchorElement|null
            if(!miSpan) return
                miSpan.innerText = name
        })
        .catch (error => console.log(error))

}

miBoton?.addEventListener("click",(event)=>{
    // aqui gestionamos el evento
    
    // hacer la lllamada a SWAPI
    if(!miInput) return

    console.log(miInput?.value)

    buscarPersonaje(miInput?.value)
    
})
    //miBoton!.onclick = (event) =>{}


miInput?.addEventListener("keydown",(event) =>{

})