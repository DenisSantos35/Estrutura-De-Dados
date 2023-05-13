import Stack from './lib/Stack.mjs'

let pilha = new Stack()

console.log("Está vazia?\nR:", pilha.isEmpty)

pilha.push(35)
pilha.push(80)
pilha.push(7)
pilha.push(15)

console.log("Está vazia?\nR:", pilha.isEmpty)

console.log(pilha.print())

let removido = pilha.pop()
console.log("Elemento removido:", removido)


pilha.push(20)

console.log(pilha.print())

console.log("Último elemento:\nR:", pilha.peek())

//tentar inserir no início da pilha
// pilha.unshift(99)
// console.log(pilha.print())