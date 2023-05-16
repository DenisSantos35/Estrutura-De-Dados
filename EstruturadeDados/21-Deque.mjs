import Deque from "./lib/Deque.mjs";

let listaCompras = new Deque();

console.log(listaCompras.isEmpty);

console.log(listaCompras.print());

//produtos alimenticios no inicio da lista 
listaCompras.insertFront('Arroz');
listaCompras.insertBack('Feijao');
listaCompras.insertBack('Macarrao')


// produtos de higiene / limpeza no final da lista
listaCompras.insertBack('Sabão em pó');
listaCompras.insertBack('Sabonete');
listaCompras.insertBack('Pasta de dente');

console.log(listaCompras.print());

//adicionados depois
listaCompras.insertFront('Café');
listaCompras.insertBack('Agua sanitaria');

console.log(listaCompras.print());

listaCompras.removeBack();
listaCompras.removeFront();

console.log(listaCompras.print());
