let array = [23,17,5,90,12,44,36,84,77]

function bubbleSort(array, funOrd){
    let swap;
    do{
        swap = false;
        for(let i = 0; i < array.length - 1; i++){
            if(funOrd(array[i],array[i + 1])){
                [array[i], array[i+1]] = [array[i+1], array[i]]
                swap = true
            }
        }
    }while(swap)
}



import {objMotoristas} from './data/motoristas-obj-desord.mjs'

bubbleSort(objMotoristas, (obj1,obj2) => {
    if(obj1.razao_social === obj2.razao_social){
        return obj1.nome_motorista > obj2.nome_motorista
    }
    return obj1.razao_social > obj2.razao_social;
})

console.log(objMotoristas)