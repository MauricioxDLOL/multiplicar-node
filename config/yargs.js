
const opciones = {

    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }

}


const argv = require("yargs")
                    .command("listar","Imprime en consola la tabla de multiplicar",opciones)
                    .command("crear","Crea un archivo txt",opciones)
                    .argv


module.exports = {
    argv
}