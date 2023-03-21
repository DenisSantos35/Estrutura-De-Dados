//           0  1  2  3  4  5  6 7  8
let array = [23,17,5,90,12,44,36,84,77]

function selectSort(array){
    for(let posIni = 0; posIni < array.length - 1; posIni++){
        let posMenor = posIni + 1;
        for(let i=posMenor + 1; i < array.length; i++){
            if(array[posMenor] > array[i]){
                posMenor = i;
            }
        }
        if(array[posIni] > array[posMenor]){
            [array[posIni], array[posMenor]] = [array[posMenor], array[posIni]]
        }
    }

}

selectSort(array)
console.log(array)
