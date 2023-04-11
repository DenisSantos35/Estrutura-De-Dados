/*
  1. Observe a lista de produtos abaixo.
*/

let produtos = [
    'Farinha de trigo',
    'Arroz',
    'Macarrão',
    'Extrato de tomate',
    'Azeite de oliva',
    'Feijão',
    'Leite',
    'Ovos',
    'Iogurte',
    'Achocolatado',
    'Palmito',
    'Creme de leite',
    'Biscoito',
    'Pão de forma',
    'Margarina',
    'Alface',
    'Tomate',
    'Batata',
    'Frango',
    'Carne moída',
    'Café',
    'Alho',
    'Cebola',
    'Milho de pipoca',
    'Sal',
    'Açúcar',
    'Pimenta do reino',
    'Farinha de mandioca',
    'Fubá',
    'Queijo ralado',
    'Goiabada',
    'Sardinha',
    'Suco de uva',
    'Gelatina',
    'Maçã',
    'Banana',
    'Laranja',
    'Melancia',
    'Manga',
    'Cenoura'
]


/*
  2. Utilizando os recursos estudados durante o 1º bimestre, faça o necessário para
     que seja possível efetuar uma busca binária na lista acima.
     Coloque aqui o(s) código(s) utilizado(s):
*/
// ********************************************************ordenação dos valoes *********************************************
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

selectionSort(produtos, (elem1, elem2) => elem1.localeCompare(elem2, 'pt-br') >= 0)
console.log(produtos)

// ********************************************busca valor*******************************************************************
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
  3. Por meio da busca binária, informe as posições corretas dos seguintes itens:
     - Azeite de oliva: indice 5
     - Suco de uva: indice 38
     - Yakult: indice -1 não existe nos produtos
     - Leite: indice 24
     - Banana: indice 6
     - Melão: indice -1 não existe nos produtos
*/

let azeite = buscaBinaria(produtos, comparacao, 'Azeite de oliva');
console.log(azeite)

let sucoDeUva = buscaBinaria(produtos, comparacao, 'Suco de uva')
console.log(sucoDeUva)

let Yakult = buscaBinaria(produtos, comparacao, 'Yakult')
console.log(Yakult)

let leite = buscaBinaria(produtos, comparacao, 'Leite')
console.log(leite)

let banana = buscaBinaria(produtos, comparacao, 'Banana')
console.log(banana)

let melao = buscaBinaria(produtos, comparacao, 'Melão')
console.log(melao)
