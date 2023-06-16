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
            inserted.prev = this.#tail;
            this.#tail.next = inserted;
            this.#tail = inserted;    
        
            // 4º caso: inserçõa em posição intermediaria
        }
        else{
            // Nodo que atualmente ocupa a posição de inserção 
            let nodePos = this.#findNode(pos);
            //nodo imediatamente anterior a nodepos
            let before = nodePos.prev;
            // o nodo anterior passa a apontar para frente, para o nodo inserido
            before.next = inserted;
            // o nodo inserido passa a apontar para trás para o nodo anterior
            inserted.prev = before;
            // O nodo inserido passa a apontar, para frente, para o nodo da posiçao
            inserted.next = nodePos;
            // O nodo da posição passa a apontar, para trás 
            nodePos.prev = inserted;
        }

        this.#count ++;

        //Método de atalho para inserção na primeira posição
       
    }
    insertHead(val){
        this.insert(0, val);
    }

    //Método de atalho para inserçõa na ultima poisção
    inserTail(val){
        this.insert(this.#count, val);
    }

    //metodo para remover um nodo de qualquer posição
    remove(pos){
        // 1º caso: lista vazia ou posição fora dos limites
        if(this.isEmpty || pos < 0 || pos < this.#count - 1) return undefined;
        //2º caso: remoção do primeiro nodo
        let removed
        if(pos === 0){
            removed = this.#head;
            this.#head = removed.next;
            if(this.#head){
                this.#head.prev = null;
            }
            if(this.count === 1){
                this.#tail = null;
            }

        }
        //3º caso: remoção do ultimo nodo
        else if(pos === this.#count - 1){
            removed = this.#tail;
            this.#tail = removed.prev;
            if(this.#tail){
                this.#tail.next = null;
            }
            if(this.#count === 1){
                this.#head = null;
            }

        }

        //4º caso: remoção em posição intermediário
        else{
            removed = this.#findNode(pos);
            let before = removed.prev;
            let after = removed.next;

            before.next = after;
            after.prev = before;
        }
        this.#count--;
        return removed.data;
    }
    //Método de atalho para remoção da primeira posição
    removedHead(){
        return this.remove(0);
    }

    removeTail(){
        return this.remove(this.#count - 1);0
    }
    //retornar a posição do nodo cujo conteudo foi expecificado
    indexOf(val){
        const middle = Math.ceil(this.#count / 2);
        let node1 = this.#head;
        let node2 = this.#tail;

        for(let pos = 0; pos < middle; pos ++){
            if(val === node1.data){
                return pos;
            }
            if(val === node2.data){
                return this.#count - 1 - pos;
            }
            node1 = node1.next;
            node2 = node2.prev;
        }
        return - 1;
    }
    // método para exibiçaõ  da lista encadeada
    print(){
        let 
    }

}