
function raizPositiva(a, b, c) {
    let result = (b*-1 + Math.sqrt(b*b - 4*a*c))/2*a;
    return result;
}

console.log(raizPositiva(1, 5, 6));

const raizNegativa = (a, b, c) => {
    let result = (b*-1 - Math.sqrt(b*b - 4*a*c))/2*a;
    return result;
}

console.log(raizNegativa(1, 5, 6));

function agregarTexto(id, cadena) {
    let elemento = document.getElementById(id);
    elemento.innerHTML = `
        <p>Esta es la cadena ingresada:</p>
        <p>${cadena}</p>
    `;
}

const MAX = 100;
const MIN = 1;
let randomBtn = document.getElementById('randomBtn');

randomBtn.onclick = function(event) {
    let contadorId = randomBtn.getAttribute('contador-id');
    let contador = document.getElementById(contadorId);
    let valor = Math.floor(Math.random() * MAX + MIN);
    contador.innerHTML = valor;
}
