let string = "10 20 20 8 25 3 0 30 1"
let vetor = string.split(' ')


function comparacao(vetor){
    let menor = Math.min(...vetor);
    let posicao = vetor.indexOf(String(menor))
    let maiorPontuacao = 0;
    cont=0;
    posicao = posicao + 1
    for(let valor in vetor){
        console.log(vetor[valor])
        if(maiorPontuacao < vetor[valor]){
            maiorPontuacao  = vetor[valor];
            console.log(maiorPontuacao)
            cont++;
        }
    }
        console.log(cont)   
    return [cont,posicao]
}

console.log(comparacao(vetor))