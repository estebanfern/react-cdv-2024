// let a = "Hola"
// console.log(typeof a, a);
// a = 5
// console.log(typeof a, a);
// a = true
// console.log(typeof a, a);
// a = {
//     nombre: "Pepe",
//     edad: 23
// }
// console.log(typeof a, a);

const calculadoraJs = (a, b, tipo) => {
    if (!(typeof a === 'number')) {
        throw new Error("El primer parametro no es un numero");
    }
    if (!(typeof b === 'number')) {
        throw new Error("El segundo parametro no es un numero");
    }
    if (!(typeof tipo === 'string')) {
        throw new Error("El tercer parametro no es un string");
    }
    switch (tipo) {
        case "suma":
            return a + b
        case "resta":
            return a - b
        case "multiplicacion":
            return a * b
        case "division":
            if (b === 0) throw new Error("No se puede dividir por 0")
            return a / b
        default:
            return "Tipo no valido"
    }
}

console.log(calculadoraJs(3, 0, "suma"));
