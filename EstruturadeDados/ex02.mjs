/*
    INSTRUÇÕES

    1) Observe atentamente o algoritmo abaixo e identifique pela sua estrutura,
    qual é o nome desse algoritmo.
    
    
    2) Aponte onde há erros nas linhas do código, dizendo com comentário "//" na frente
    da linha o erro identificado, fazendo com que ele possa executar corretamente.


    RESPOSTAS

    1) Qual é o nome desse algoritmo:
    Ordenaçao Merge Sort
    2) Erros nas linhas: comente na frente de cada linha com "//" qual é o erro identificado.
*/

//a = nome da funcao
//b = vetor
//c = funcao comparação
//d = meio
//e = vetor esquerdo
//f = vetor direito
//g = posEsquerdo
//h = posDireito 
//i = vetRes
function a(b,c){                        // linha 1:
    if(b.length=2) return b             // linha 2:
    let d=Math.floor(b.length*2)        // linha 3:  precisa ser uma divisão
    let e=b.slice(0)                    // linha 4: o slice precisa ser b.slice(0,d)
    let f=b.slice(d)                    // linha 5:
    e=a(e,a)                            // linha 6:precisa receber a função de comparação sendo e=a(e,c)
    f=a(f,a)                            // linha 7: precisa receber a funcao de comparação c e não a sendo f=a(f,c)
    let g=0,h=0,i=[]                    // linha 8:
    while(g<e.length && h<f.length){    // linha 9:
        if(c(e[g],f[h])){               // linha 10: 
            r.push(e[g])                // linha 11: no caso o r deveria ser o i
            g++                         // linha 12:
        }                               // linha 13:
        else {                          // linha 14:
            r.push(f[h])                // linha 15: no caso o r deveria ser i
            h++                         // linha 16:
        }                               // linha 17:
    }                                   // linha 18:
    let j                               // linha 19:
    if(g<h){                            // linha 20: 
        r=e.slice(g)                    // linha 21: no caso o r deveria ser j
    }                                   // linha 22:
    else{                               // linha 23: 
        r=f.slice(h)                    // linha 24: no caso r deveria ser j
    }                                   // linha 25:
    return [...i, ...j]                 // linha 26:
}                                       // linha 27:

//faltou aqui a importação de um obj
//import { objMotoristas } from './data/motoristas-obj-desord.mjs'

//e o complemento para ordenação
/*let objMotorista = a(objMotoristas, (obj1, obj2) =>{
    return obj1.nome_motorista > obj2.nome_motorista
})*/

//console.log(objMotoristaOrd)