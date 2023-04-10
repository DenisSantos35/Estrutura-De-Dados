import {objMotoristas} from './data/motoristas-obj-desord.mjs'

function selectSort(array, funOrd){ //recebe array, recebe funcao
    //para inicio = 0 e enquanto inicio for menor que array.length(39000) inicio icrementa
    for(let ini = 0; ini < array.length - 1; ini++){
        let menor = ini + 1; //captura o primeiro elemento
        for(let i = menor + 1; i < array.length; i++){ //i inicia com valor armazenado em menor + 1 ate 40000
            if(funOrd(array[menor], array[i])){ //envia o array na posicao menor, e array na posicao i
                                                //caso seja menor realiza este bloco
                menor = i; // menor recebe o valor da posição i
            }
        }
        if(funOrd(array[ini],array[menor])){ //terminado o for faz a comparacao do menor valor armazenado e o primeiro valor
            [array[ini],array[menor]] = [array[menor],array[ini]] //por desconstrucao caso o array ini seja maior que array menor faz a troca
        }
    }
}

console.time('start: ')
//recebe no obj1 = array posicao menor, obj2 = array na posicao i
selectSort(objMotoristas, (obj1, obj2) => { return obj1.nome_motorista > obj2.nome_motorista}); //faz comparacao dos nomes do motorista
console.timeEnd('finish: ')
console.log(objMotoristas)

