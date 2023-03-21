import {objNomes} from "./data/vetor-obj-nomes.mjs"

function buscaSequencialObj(array, funcaoComparacao){
    for(let i=0; i < array.length; i++){
        if(funcaoComparacao(array[i])) return i;
    }
    return -1
}

function comparaNome(obj){
    return obj.first_name === 'DENIS';
}

console.log(buscaSequencialObj(objNomes, comparaNome));


