// function fatorial(value){
//     let ini = 1;
//     for(let i = value; i > 1; i--){
//         ini = ini * i
//     }
//     return ini
// }

// let valFat = fatorial(5)
// console.log(valFat)

function fatorialRec(value){
    if(value <= 1){
        return 1;
    }
    return value * fatorialRec(value - 1)
}

let valRec = fatorialRec(5);
console.log(valRec);