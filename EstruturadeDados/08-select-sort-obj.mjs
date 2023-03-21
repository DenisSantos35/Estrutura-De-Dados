import {objMotoristas} from './data/motoristas-obj-desord.mjs'

function selectSort(array, funOrd){
    for(let ini = 0; ini < array.length - 1; ini++){
        let menor = ini + 1;
        for(let i = menor + 1; i < array.length; i++){
            if(funOrd(array[menor], array[i])){
                menor = i;
            }
        }
        if(funOrd(array[ini],array[menor])){
            [array[ini],array[menor]] = [array[menor],array[ini]]
        }
    }
}

console.time('start: ')
selectSort(objMotoristas, (obj1, obj2) => { return obj1.nome_motorista > obj2.nome_motorista});
console.timeEnd('finish: ')
console.log(objMotoristas)

