/*

  1. Utilizando o arquivo "nomes-desord.mjs" da pasta "DATA", faça o necessário para a sua utilização:
*/
import {nomes} from './data/nomes-desord.mjs'

/*

  2. Utilizando os recursos estudados durante o 1º bimestre, faça o necessário para
     que seja possível efetuar uma busca binária nesta lista de nomes.
     Coloque aqui as linhas de códigos utilizados:

*/
function selectionSort(vetor, fnComp) {
    for(let posSel = 0; posSel < vetor.length - 1; posSel++) {
      let posMenor = posSel + 1
      for(let i = posMenor + 1; i < vetor.length; i++) {
            if(fnComp(vetor[posMenor], vetor[i])) posMenor = i
            
          }
          if(fnComp(vetor[posSel], vetor[posMenor])) {
            [ vetor[posSel], vetor[posMenor] ] = [ vetor[posMenor], vetor[posSel] ]
            
          }
  
      }
  
  }
  
  selectionSort(nomes, (elem1, elem2) => {
    return elem1 > elem2
  })
  console.log(nomes)

  // ******************************************************** 
  function buscaBinaria(array, funComp, valor){
    let ini = 0;
    let fim = array.length - 1   
  
    while(fim >= ini){
        let meio = Math.floor((ini + fim) / 2);
  
        switch(funComp(array[meio], valor)){
            case 0:
                return meio 
            case 1:
                ini = meio + 1
                break
            default:
                fim = meio - 1
        }
    }
    return -1
  }
  
  function comparacao(arrayMeio, valor){
    if(valor === arrayMeio) return 0;
    else if(valor > arrayMeio) return 1
    else return -1
  }


/*
  3. Por meio da busca binária, informe as posições dos seguintes nomes:

    - ALEXANDRE: 4764
    - MARIA: 67111
    - MARCOS: 66907
    - CARLOS: 12557
    - ANA: 6377
    - FELIZBERTINO: -1

  */

let alexandre = buscaBinaria(nomes, comparacao, 'ALEXANDRE');
console.log(alexandre)

let maria = buscaBinaria(nomes, comparacao, 'MARIA')
console.log(maria)

let marcos = buscaBinaria(nomes, comparacao, 'MARCOS')
console.log(marcos)

let carlos = buscaBinaria(nomes, comparacao, 'CARLOS')
console.log(carlos)

let ana = buscaBinaria(nomes, comparacao, 'ANA')
console.log(ana)

let felizbertino = buscaBinaria(nomes, comparacao, 'FELIZBERTINO')
console.log(felizbertino)
