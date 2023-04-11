//           0 1 2  3  4 5  6 7

let array = [7,3,2,16,24,4,11,9]
//console.log(array)

function mergeSort(array){
    
    if(array.length < 2){
        return array
    }

    let meio = Math.floor(array.length / 2)
    //console.log(meio)
    
    let arrayEsq = array.slice(0,meio)
    //console.log(`posicao ${arrayEsq.length}, [${arrayEsq}]`)

    let arrayDir = array.slice(meio)
    
    arrayEsq = mergeSort(arrayEsq)
    
    arrayDir = mergeSort(arrayDir)
    

    let posDir = 0
    let posEsq = 0
    let vetRes = []
    
    while(posEsq < arrayEsq.length && posDir < arrayDir.length){
        if(arrayEsq[posEsq] < arrayDir[posDir]){            
            vetRes.push(arrayEsq[posEsq]);
            posEsq++
        }else{
            vetRes.push(arrayDir[posDir])
            posDir++
        }
    }
    
    let sobra; 
    if(posEsq < posDir){
        sobra = arrayEsq.slice(posEsq)
        
    }else{
        sobra = arrayDir.slice(posDir)
        
    }
    

    return [...vetRes, ...sobra]
    
    
}

let numOrdenados = mergeSort(array)
console.log(numOrdenados)

// import { nomes } from './data/nomes-desord.mjs'

// let nomesOrdenados = mergeSort(nomes)

// console.log(nomesOrdenados)