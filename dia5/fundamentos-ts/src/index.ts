// type TipoOperacion = 'suma' | 'resta' | 'multiplicacion' | 'division';

enum TipoOperacion {
    SUMA = "suma",
    RESTA = "resta",
    MULTIPLICACION = "multiplicacion",
    DIVISION = "division",
}

interface Operacion {
    a : number;
    b : number;
    tipo : TipoOperacion;
    saludar(name : string, idioma : string) : void;
}

class Operador implements Operacion {

    a : number;
    b : number;
    tipo : TipoOperacion;

    constructor(a : number, b : number, tipo : TipoOperacion) {
        this.a = a;
        this.b = b;
        this.tipo = tipo;
    }

    saludar(name : string, idioma : string) : void {
        console.log(`Hola ${name}, como estas? En ${idioma}`);
    }

}


interface Transaccion {
    monto : number;
    moneda : string;
}

class Transferencia implements Transaccion {
    
    monto : number;
    moneda : string;
    receptor : string;
    deudor : string;
    banco: string;
    bancoReceptor : string;

    constructor(monto : number, moneda : string, receptor : string, deudor : string, banco : string, bancoReceptor : string) {
        this.monto = monto;
        this.moneda = moneda;
        this.receptor = receptor;
        this.deudor = deudor;
        this.banco = banco;
        this.bancoReceptor = bancoReceptor;
    }

}

class PagoDeServicios implements Transaccion {

    monto: number;
    moneda: string;
    servicio: string;
    empresa: string;
    fecha: string;

    constructor(monto : number, moneda : string, servicio : string, empresa : string, fecha : string) {
        this.monto = monto;
        this.moneda = moneda;
        this.servicio = servicio;
        this.empresa = empresa;
        this.fecha = fecha;
    }

}

const guardarTransaccionEnDb = (tx : Transaccion) : void => {
    console.log(`INSERT INTO banco.transacciones (monto, moneda) VALUES (${tx.monto}, ${tx.moneda});`);
}

guardarTransaccionEnDb(new Transferencia(900000, 'USD', 'Esteban', 'Damian', 'Banco del Paraguay', 'Banco de Argentina'));
guardarTransaccionEnDb(new PagoDeServicios(50000, 'PYG', 'Internet', 'Tigo', new Date().toISOString()));

// const calculadoraJs = (op : Operacion) : number => {
//     switch (op.tipo) {
//         case TipoOperacion.SUMA:
//             return op.a + op.b
//         case TipoOperacion.RESTA:
//             return op.a - op.b
//         case TipoOperacion.MULTIPLICACION:
//             return op.a * op.b
//         case TipoOperacion.DIVISION:
//             if (op.b === 0) throw new Error("No se puede dividir por 0")
//             return op.a / op.b
//     }
// }

// let operacion : Operacion = {
//     a : 3,
//     b : 1,
//     tipo : TipoOperacion.SUMA
// }
// let result : number = calculadoraJs(operacion);
// console.log(result);
