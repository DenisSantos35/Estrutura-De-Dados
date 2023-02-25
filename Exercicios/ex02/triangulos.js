function triangulo(l1, l2, l3){
    if(l1==l2 && l2==l3){
        return "Equilatero"
    }else if(l1 == l2 && l1 != l3 && l2 != l3){
        return "Isóceles"
    }
    if(l1 != l2 && l1 != l3 && l2 != l3){
        return "Escaleno"
    }
}

const triang = triangulo(15,10,10)
console.log(triang)
