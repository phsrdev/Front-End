import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Pedro", 12345678910);
const cliente2 = new Cliente("Juliana", 10987654321);

const contaCorrentePedro = new ContaCorrente(1001, cliente1);
contaCorrentePedro.depositar(500);
contaCorrentePedro.sacar(100);

const contaCorrenteJuliana = new ContaCorrente(1001, cliente2);
let valor = 200;
contaCorrentePedro.tranferir(valor, contaCorrenteJuliana);

console.log(cliente1)
console.log(contaCorrentePedro);
console.log(cliente2)
console.log(contaCorrenteJuliana)
console.log(ContaCorrente.numeroDeContas)