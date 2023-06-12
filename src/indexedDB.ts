const userInput = document.querySelector("input#input-username") as HTMLInputElement | null
const passwordInput = document.querySelector("input#input-password") as HTMLInputElement | null


const userFormulario = document.querySelector("form") as HTMLFormElement

userFormulario.onsubmit =(event) =>{
    event.preventDefault()
    if(!userInput || !passwordInput) return

    console.log("dentro submit")
    const usuario = userInput?.value
    const password = passwordInput?.value
};

//indexedDataBase
const database = window.indexedDB
if(database){
    console.log("tengo bbdd")
    let db: IDBDatabase 
    const request = database.open("Usuarios",1)

    request.onupgradeneeded = () => {
        db = request.result
        console.log("BBDD creada", db)
    }
}

