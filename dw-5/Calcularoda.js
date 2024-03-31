function Calculadora(n1,n2,operador){
    switch (operador){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            if (n2 != 0){
                return n1 / n2;
            } else {
                return "Impossível dividir por 0";
            }
        default:
            return "Operador inválido por favor, tente novamente."
    }
}

let op = String("/")
let n1 = Number(10)
let n2 = Number(2)

calculo = Calculadora(n1,n2,op);
console.log(calculo);