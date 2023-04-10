let array = [2,3,9,1]

function selectSort(array, funOrd){
    for(let ini = 0; ini < array.length - 1; ini++){
        let menor = ini + 1
        for(let i = menor + 1; i < array.length; i++){
            if(funOrd(array[menor], array[i])){
                menor = i
            }
        }
        if(array[ini], array[menor]){
            [array[ini],array[menor]] = [array[menor], array[ini]]
        }
    }
}

selectSort(array, (obj1, obj2) => {
    return obj1 > obj2
})

console.log(array)

function buscaBinaria(array, valor, funBusc){
    let ini = 0;
    let fim = array.length - 1;
    while(fim >= ini){
        let meio = Math.floor((ini + fim) / 2)
        switch(funBusc(array[meio], valor)){
            case 0:
                return meio
            case 1:
                fim = meio - 1
            case 2:
                ini = meio + 1
        }
    }
    return -1
}


console.log(buscaBinaria(array, 3, (obj1, obj2) => {
    if(obj1 === obj2){
        return 0;
    }else if(obj1 > obj2){
        return 1;
    }else{
        return 2;
    }
}))