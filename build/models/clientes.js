class Cliente {
    constructor(id, n, e) {
        this.id = id;
        this.nombre = n;
        this.email = e;
        this.activo = true;
    }
    desactivarCliente() {
        this.activo = false;
    }
    static definicion() {
        console.log("Activo valioso");
    }
}
export { Cliente };
//# sourceMappingURL=clientes.js.map