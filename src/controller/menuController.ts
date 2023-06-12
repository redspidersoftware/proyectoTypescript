import inquirer from "inquirer"
const MenuPrincipal = async () => {
    while (true) {
        const rensponse = await inquirer.prompt([
            {
                message: "Elije una opcion: ",
                type: "list",
                name: "menuPrincipal",
                choices: [
                    "1. Crear nuevo cliente",
                    "2. Listar clientes",
                    "3. Actualizar cliente",
                    "4. Eliminar cliente",
                    "5. -Salir-"
                ]
            }
        ])
        console.log(rensponse)
        if (rensponse.menuPrincipal === "5. -Salir-") return
    }
}

export default MenuPrincipal