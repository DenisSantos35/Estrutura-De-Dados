function resultado(valor1, valor2){
    let divisor = valor2 !== 0? valor1/valor2: 'Conta invalida'
    let resto = valor2 !==0? valor1%valor2: 'Conta invalida'
    console.log(divisor,resto)
}

resultado(5,4)