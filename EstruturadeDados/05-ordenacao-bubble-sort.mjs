//            0  1  2  3  4  5  6  7  8
let array = [99,22,55,88,77,44,66,11,33];
let swap;
let pass, contagem, troca;

function bubbleSort(array){
    pass = contagem = troca = 0;
    do{
        pass++;
        swap = false;
        for(let i = 0; i < array.length - 1; i++){
            contagem++;
            if(array[i] > array[i+1]){
                troca++;
                [array[i],array[i+1]] = [array[i+1], array[i]];
                swap = true;
            }
        }

    }while(swap);
}

console.time('Inicio: ');
bubbleSort(array);
console.timeEnd('Tempo final: ');
console.log('Array ordenado', array);
console.log('Passou: ',pass, 'Quantidade loop: ', contagem, 'Trocas: ', troca)
// import {nomes} from './data/nomes-desord.mjs'
// console.time('Inicio: ');
// bubbleSort(nomes);
// console.timeEnd('Tempo final: ');
// console.log('Array ordenado', nomes);
// console.log('Passou: ',pass, 'Quantidade loop: ', contagem, 'Trocas: ', troca)

// let pass, trocas, comp

// function bubbleSort(vetor){

//     pass= 0, trocas = 0, comp =0

//     let swap

//     do{
//         pass++
//         swap = false

//         for(let i=0; i < vetor.length - 1; i++){
//             comp++
//             if(vetor[i] > vetor[i+1]){
//                 [ vetor[i], vetor[i+1] ] = [ vetor[i+1] , vetor[i] ]
//                 swap = true
//                 trocas++
//             }
//         }

//     }while(swap)
// }
// // let nums = [0,1,2,3,4,5,6,7,8,9]

// // bubbleSort(nums)
// // console.log("Ordenação: ", nums)
// // console.log({pass, comp, trocas})
// import {nomes} from './data/nomes-desord.mjs'

// console.time('Tempo de ordenação')
// bubbleSort(nomes)
// console.timeEnd('Tempo de ordenação')

// console.log(nomes)
// console.log({pass, comp, trocas})