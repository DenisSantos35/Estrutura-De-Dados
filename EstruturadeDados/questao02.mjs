/*
    INSTRUÇÕES

    1) Observe a estrurura do algoritmo abaixo, identifique qual é esse algoritmo apesar de conter erros.
    2) Sabendo-se que queremos a ordenação crescente com o algoritmo abaixo, com comentários a frente das linhas de código,
    identifique onde possiu "os erros", explicando em cada linha.
 
    RESPOSTAS

    1) Identificação do algoritmo:
        ordenação merge sort
    2) Apresentar os erros em cada linha de código no próprio algoritmo com comentários.  

*/
// p = array
//o = meio
//l = array esquerdo
//r = array direito
//h = pos esquerdo
//i = pos direito
function f(p) {
    if(p.length > 2){ 
        return p
    }
    let p = 2    //não é necessário a declaração desta variável pois ja é atributo da funçao, ou seja o array a ser recebido na função
    let o = Math.floor(p.length / p) //no lugar do p deveria ser 2
    let l = p.slice(0, o) 
    let r = p.slice(o)
    l = f(l, f) // erro passando funcao dentro da funcao, e preciso apenas o array esquerdo (l)
    r = f(r, f) // erro passando funcao dentro da funcao, e preciso apenas o array direito (r)

    
    let h = 0, i = 0, k = []
    while(h < l.length && i < r.length) {
        if(l[h] > r[i]) { 
            k.insert(l[h]) // deveria ser push ao inves de insert
            h++
        } else {
            k.insert(r[i]) // deveria ser push ao inves de insert
            i++
        }
    }
    let m
    if(h < i) {
        m = l.splice(h) //comando correto seria slice e nao splice
    } else {
        m = r.splice(i) //comando correto seria slice e nao splice
    }
    m = [...k, ...m] //no lugar do m deveria ser um return para retornar o array ordenado
}