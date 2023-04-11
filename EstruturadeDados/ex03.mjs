/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Importe o arquivo "vetor-obj-nomes.mjs" da pasta "data" e diga qual é a posição
       do objeto, passando o atributo "first_name: ALEXANDRE".

    RESPOSTAS

    1) Qual é o nome desse algoritmo:
        busca sequencial

    2) Mapeamento das variáveis:
        a -> nome da funcao; busca sequencial
        b -> array com objeto recebido pela função
        c -> função de comparação
        d -> iteração do for ele inicia com valor zero e vai até o tamanho total do array 
        e -> atributo que recebe da condição da busca o valor a ser comparado, caso o valor passado em e na posição first_name seja igual ao valor compado na função c retorna como verdadeiro, e dentro da função a retorna a posição do valor.

    3) Posição do objeto "first_name: ALEXANDRE":
    posição 4764

*/

function a(b,c){
    for(let d=0;d<b.length;d++){
        if(c(b[d])){
            return d
        }
    }
    return -1
}

function c(e) {
    //return e.NomedoAtributo==='NOME'
    return e.first_name ==='ALEXANDRE'
}

// import {NomeDoObjeto} from './pasta/arquivo.mjs'
import {objNomes} from './data/vetor-obj-nomes.mjs'

//console.log(a(NomeDoObjeto,c))
console.log(a(objNomes,c))