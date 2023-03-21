// ---------------------------Algoritimo de ordenação ----------------------------------------------------
function bubbleSort(array, funcOrd){ //passar objeto e chamada de funcao
    let swap;
    do{
        swap = false;
        let tamaArray = array.length - 1;
        for(let i=0; i < tamaArray; i++){
            if(funcOrd(array[i],array[i+1])){
                [array[i], array[i+1]] = [array[i+1], array[i]];
                swap = true;
            }
        }
    }while(swap)

}

import {objMotoristas} from './data/motoristas-obj-desord.mjs'
// ordenacao crescente
bubbleSort(objMotoristas,(obj1, obj2) => obj1.nome_motorista > obj2.nome_motorista);
// console.log(objMotoristas);

//ordenacao decrescente
// bubbleSort(objMotoristas,(obj1,obj2)=> obj1.nome_motorista < obj2.nome_motorista);
// console.log(objMotoristas);

//ordenacao decrescente ignorando acentos.
// bubbleSort(objMotoristas,(obj1,obj2)=> obj1.nome_motorista.localeCompare(obj2.nome_motorista) <=0);

// -------------------------------Algoritimo de Busca ----------------------------------------------------
function buscaBinaria(array, funcBusca){
    let inicio = 0;
    let fim = array.length - 1;
    while(fim >= inicio){
        let meio = Math.floor((inicio + fim) / 2);
        switch(funcBusca(array[meio])){
            case 0:
                return array[meio];
            case 1:
                inicio = meio + 1;
            break
            default:
                fim = meio - 1;

        }
    }
    return -1;
}

function busca(obj, valor = "PAULO ************ PAULA"){
    if(obj.nome_motorista === valor) return 0;
    else if(obj.nome_motorista < valor) return 1;
    return -1
}

console.log(buscaBinaria(objMotoristas, busca));


