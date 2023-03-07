import {objNomes} from './data/vetor-obj-nomes.mjs'

function buscaBinaria(array, funComp){
    let ini = 0;
    let fim = array.length - 1   

    while(fim >= ini){
        let meio = Math.floor((ini + fim) / 2);

        switch(funComp(array[meio])){
            case 0:
                return meio
            case 1:
                ini = meio + 1
                break
            default:
                fim = meio - 1
        }
    }
    return -1
}

function comparacao(arrayMeio, valor = "DENIS"){
    console.log(arrayMeio.first_name, valor)
    if(valor === arrayMeio.first_name) return 0;
    else if(valor > arrayMeio.first_name) return 1
    else return -1
}

console.log(buscaBinaria(objNomes, comparacao));