/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
       select sort
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).

    RESPOSTAS

    1) Identificação do algoritmo:
    select Sort
    
    2) Mapeamento das variáveis
        x -> recebe a erow function com parametros e a funcao fica atribuida como x
        y -> este atributo recebe o array a ser ordenado
        z -> variavel atribuida para selecionar a primeira posição do array a cada iteração.
        j -> variavel atribuida para indicar o menor valor a ser recebido, no segundo for ela sera objeto de comparação onde toda vez que o valor g for menor essa variavel sera reatribuida recebendo o valor, ela recebe a posiçao selecionada + 1
        g -> variavel recebe a posicao menor + 1, e objeto de iteraçao e sera comparada a cada iteração com a variavel menor, caso ela seja menor seu valor e atribuido para j
        f -> funcao de comparação sera a função responsavel por receber os parametros do array nas posiçoes indicadas, e fazer as comparações para que o array seja ordenado.

*/

const x = (y, f) => {
    for(let z = 0; z < y.length - 1; z++) {
        let j = z + 1
        for(let g = j + 1; g < y.length; g++) {
            if(f(y[j], y[g])){
                j = g
            } 
        }
        if(f(y[z], y[j])) {
            [ y[z], y[j] ] = [ y[j], y[z] ]
        }
    }
}