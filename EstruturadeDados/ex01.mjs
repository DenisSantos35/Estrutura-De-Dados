/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

    RESPOSTAS

    1) Qual é o nome desse algoritmo:
        Selection Sort
    2) Mapeamento das variáveis:
        a -> recebe a erow fuction que passara a ter nome a 
        b -> recebera o array que será pássado para ordenação
        c -> c(posição inicial), primeira posição de cada interação a ser guardada
        d -> d(posição menor), será atribuido a ele a posição inicial + 1, porem dentro do segundo for ele ganhara algumas atribuições caso ele seja menor que a posição [e], e por fim será comparado com a posição inicial, caso ele seja menor o array troca a posição dos valores encontrados nas posições inicial e menor. 
        e -> e (recebe a posiçao menor + 1), quando a variavel [d] for atibuido o valor contido em [e] o valor do próximo for será alterado, assim sempre será guardo o valor do indice do menor [e].

    3) A função de comparação deve ser colocada no próprio algoritmo utilizando
    as variáveis conforme esse algoritmo.
*/
let array = [23,17,5,90,12,44,36,84,77]

const a = (b,funComp) => {
    for(let c = 0; c < b.length - 1; c++) {
        let d = c + 1
        for(let e = d + 1; e < b.length; e++) {
            //if(b[d]>b[e]) d = e
            if(funComp(b[d],b[e])) d = e
        }
        // if(b[c] > b[d]) {
        //     [ b[c], b[d] ] = [ b[d], b[c] ]
        // }
        if(funComp(b[c],b[d])){
            [ b[c], b[d] ] = [ b[d], b[c] ]
        }
    }
}

import {objMotoristas} from './data/motoristas-obj-desord.mjs'

a(objMotoristas, (obj1, obj2) => { return obj1.nome_motorista > obj2.nome_motorista})
console.log(objMotoristas)

