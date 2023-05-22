// Estrutura de dados lista encadeada

// classe que representa a unidade de armazenamento da lista encadeada

class Node{
    data;
    next;
    constructor(val){
        this.data = val; // informaçao relevante para o usuario
        this.next =  null; //ponteiro para o proximo nodo da sequencia
    }

}

/*
    classe que representa a estrutura de dados lista encadeada
*/

export default class linkedList{
    #head;   //inicio da lista (cabeça)
    #tail;   //fim da lista (calda)
    #count;  //quantidade de nodos da dlista (nos)
    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
    }

    //getter que retorna se a lista encadeada esta vazia ou nao
    get isEmpty(){
        return (this.#count === 0);
    }

    // getter que retorna a quantidade de nodos da lista
    get count(){
        return this.#count;
    }

    // metodo para inserir em qualquer posição da lista encadeada
    insert(pos, val){
        const inserted = new Node(val);   //cria um novo nodo
        
        //1 caso: se a lista estiver vazia
        if(this.isEmpty){
            this.#head = inserted
            this.#tail = inserted
        }

        // 2 caso: lista nao esta vazia, insercao na primeira posição
        else if(pos === 0){
            inserted.next = this.#head;
            this.#head = inserted;
        }
    }

}