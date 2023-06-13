//Estrutura de dados lista duplamente encadeada

class Node{
    prev
    data
    next
    constructor(val){
        this.prev = null;   //ponteiro para o nó anterior
        this.data = val;    // valor do nó, armazena a informaçao relevante para o usuário
        this.next = null;  // ponteiro para o próximo nó
    }
}

export default class DoublyLinkedList{
    #head;  // inicio da lista
    #tail;  // fim da lista
    #count;  // quantidade de nós na lista

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }
    // geter que retorna se a lista está vazia
    get isEmpty(){
        return this.#count === 0;
    }

    //gueter que retorna a quantidade da lista
    get count(){
        return this.#count;
    }

    // método privado que encontra um nodo por sua posição
    #findNode(pos){
        let node;

        if(pos < this.#count / 2){
            node = this.#head;
            for(let i = 0; i < pos; i++){
                node = node.next;

            }
        }else{
            node = this.#tail;
            for(let i = this.#count - 1; i > pos; i--){
                node = node.prev;
            }
        }
        return node;
    }
    //metodo para inserir em qualquer posição
    insert(pos, val){
        let inserted = new Node(val);
        // 1º caso: lista vazia
        if(this.isEmpty){
            this.#head = inserted;
            this.#tail = inserted;
        }

        // 2º caso: inserção no inicio
        else if(pos === 0){
            inserted.next = this.#head;
            this.#head.prev = inserted;
            this.#count.#head = inserted;
        }

        // 3ºcaso: inserção no fim
        else if(pos >= this.#count){
            this.#tail.next = inserted;
            inserted.prev = this.#tail;
            this.#tail.next = inserted;
            this.#tail = inserted;
        }
    }

}