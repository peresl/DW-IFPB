function VerificaTriangulo(l1,l2,l3){
    if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1){
        if (l1 == l2 && l2 == l3){
            return "equilateral";
        } else {
            if (l1 == l2 || l2 == l3){
                return "isosceles";
            } else {
                return "scalene";
            }
        }
    } 
    return "none";
}

let lado1 = 10;
let lado2 = 11;
let lado3 = 12;

verifica = VerificaTriangulo(lado1,lado2,lado3);
console.log(verifica);