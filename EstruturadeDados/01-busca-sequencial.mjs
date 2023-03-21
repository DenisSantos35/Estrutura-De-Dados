/*function listaSequencial(array, value){
    let tamanho = array.length;
    for(let indice = 0; indice < tamanho; indice++){
        if(array[indice] === value){
            return indice;
        }        
    }
    return `A fruta ${value} não está na lista`


}
const frutas = ['banana', 'maca', 'uva', 'pera', 'abacaxi', 'limao','laranja'];
console.log(listaSequencial(frutas, 'uva'));*/

//ou

function listaSequencial(array, value){ //pasamos um array e um valor
    for(let indice in array){
        if(array[indice] === value){
            return indice;
        }        
    }
    return `O nome ${value} não está na lista`

}
// const frutas = ['banana', 'maca', 'uva', 'pera', 'abacaxi', 'limao','laranja'];
// console.log(listaSequencial(frutas, 'uva'))

import {nomes} from "./data/vetor-nomes.mjs"
console.log(listaSequencial(nomes, 'DENIS'))

