/*
    1. Veja, na imagem "torres-hanoi.png", como funciona o jogo das Torres de Hanoi.

    2. Cada uma das torres do jogo se comporta como uma pilha. Importe a classe
        apropriada e crie três pilhas, representando as três torres.
*/
class Stack {
    
    #data //vetor privado
    
    constructor(){
        this.#data = []
    }

    //inserir
    push(val){
        this.#data.push(val)
    }

    //retirar
    pop(){
        return this.#data.pop()
    }

    //espiadinha no último elemento da pilha
    peek(){
        return this.#data[this.#data.length -1]
    }

    //saber se a pilha está vazia
    get isEmpty(){
        return this.#data.length === 0
    }
    
    //imprimir a pilha
    print(){
        return JSON.stringify(this.#data)
    }

}

let torreA = new Stack();
let torreB = new Stack();
let torreC = new Stack();

/*
    3. Use os valores 1, 2 e 3 para representar os discos. Empilhe-os na primeira
        torre.
*/
torreA.push(3);
torreA.push(2);
torreA.push(1);
console.log(`Torre A: ${torreA.print()}`);
console.log('***************************************')

/*
    4. Desempilhe um dos discos da primeira torre e empilhe-o na terceira.
*/
let valor = torreA.pop();
torreC.push(valor);
console.log(`Torre A: ${torreA.print()}`);
console.log(`Torre C: ${torreC.print()}`);
console.log('***************************************')
/*
    5. Desempilhe o disco remanescente da primeira torre e coloque-o na segunda.
*/
valor = torreA.pop();
torreB.push(valor);
console.log(`Torre A: ${torreA.print()}`);
console.log(`Torre B: ${torreB.print()}`);
console.log(`Torre C: ${torreC.print()}`);
console.log('***************************************')
/*
    6. Desempilhe o disco da terceira torre e coloque-o sobre o disco da segunda torre.
*/
valor = torreC.pop();
torreB.push(valor);
console.log(`Torre A: ${torreA.print()}`);
console.log(`Torre B: ${torreB.print()}`);
console.log(`Torre C: ${torreC.print()}`);
console.log('***************************************')

/*
    7. Desempilhe o disco da primeira torre e coloque-o na terceira torre.
*/
valor = torreA.pop();
torreC.push(valor);
console.log(`Torre A: ${torreA.print()}`);
console.log(`Torre B: ${torreB.print()}`);
console.log(`Torre C: ${torreC.print()}`);
console.log('***************************************')



/*
    8. Desempilhe um dos discos da segunda torre e coloque-o na primeira torre.
*/
valor = torreB.pop();
torreA.push(valor);
console.log(`Torre A: ${torreA.print()}`);
console.log(`Torre B: ${torreB.print()}`);
console.log(`Torre C: ${torreC.print()}`);
console.log('***************************************')

/*
    9. Desempilhe o disco da segunda torre e coloque-o sobre o disco da terceira torre.
*/
 valor = torreB.pop();
 torreC.push(valor);
console.log(`Torre A: ${torreA.print()}`);
console.log(`Torre B: ${torreB.print()}`);
console.log(`Torre C: ${torreC.print()}`);
console.log('***************************************')





/*
    10.Finalmente, desempilhe o disco da primeira torre e coloque-o na terceira torre.
*/
valor = torreA.pop();
torreC.push(valor);

/*
    11.Use o método print() para exibir as três pilhas. As duas primeiras devem estar
        vazias e a terceira deve conter os três discos, na ordem (3 na base, 1 no topo).      
*/
console.log(`Torre A: ${torreA.print()}`);
console.log(`Torre B: ${torreB.print()}`);
console.log(`Torre C: ${torreC.print()}`);
console.log('***************************************')
