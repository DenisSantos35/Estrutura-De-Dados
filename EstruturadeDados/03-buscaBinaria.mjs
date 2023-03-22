//           0  1  2  3  4  5  6  7  8
// let array = [11,22,33,44,55,66,77,88,99];
// console.log(buscaSequencial(array,100))

function buscaBinaria(array, valor){
    let ini = 0;
    let fim = array.length - 1
    while(fim >= ini){
        let meio = Math.floor((ini +fim) / 2);
        if(valor === array[meio]){
            return meio;
        }else if(valor > array[meio]){
            ini = meio + 1
        }else{
            fim = meio - 1
        }        
    }
    return -1
}

import {nomes} from './data/vetor-nomes.mjs'

console.log(buscaBinaria(nomes, 'JOYCE'));