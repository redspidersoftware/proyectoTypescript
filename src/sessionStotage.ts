const username = document.querySelector("input#input-username") as HTMLInputElement | null
const password = document.querySelector("input#input-password") as HTMLInputElement | null


const userForm = document.querySelector("form") as HTMLFormElement

userForm.onsubmit =(event) =>{
    event.preventDefault()
    if(!username || !password) return

    document.cookie = `username=${username?.value}`    
    document.cookie = `password=${password?.value}`

    username?.value && localStorage.setItem("username",username?.value) // sessionStotage
    password?.value && localStorage.setItem("password",password?.value)
}