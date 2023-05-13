import Queue from "./lib/queue.mjs";

let fila = new Queue();

//Esta vazio?
console.log(fila.isEmpty);

//Adicionando valor ?
fila.enqueue("denis");
fila.enqueue("lucas");
fila.enqueue('marcos');

//imprimi todos os valores
console.log(fila.print());

//espia 
console.log(fila.peek());

//remover da fila
fila.dequeue();

//ver primeiro da fila
//espia 
console.log(fila.peek());

