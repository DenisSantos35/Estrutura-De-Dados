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

        //3º caso: inserção no final da lista
        else if(pos >= this.#count){
            this.#tail.next = inserted;
            this.#teil = inserted;
        }

        //4º caso: posição intermediaria
        else{
            //nodo da posição anterior á de inserção
            let before = this.#head; //começa pelo primeiro

            //percorrer os nodos            
            for(let i = 1; i < pos; i++){
                before = before.next;
            }

            //Nodo posterior a de insercao
            let after = before.next;

            inserted.next = after;

            before.next = inserted;
        }
        this.#count++;
    }
    //metodo para inserir na ultima posição (atalho)
    insertHead(val){
        this.insert(0, val);
    }

    //metodo para inserir na ultima posicao (atalho)
    insertedTail(val){
        this.insert(this.#count, val);
    }

    //metodo de remoção de um nodo da lista
    remove(pos){

        //1º caso: a lista esta vazia ou a posição informada
        //está fora dos limites da lista
        if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined;

        let removed;
        //2º caso: remoçao no inicio da lista o head
        if(pos === 0){
            removed = this.#head
            this.#head = this.#head.next;

            //atualizando o tail em caso de remoção do unico nodo restante
            if(this.#count === 1){
                this.#tail = null;
            }
        }

        //3º caso: reo=moção do nodo intermediario de nodo intermediário ou final
        else{
            let before = this.#head;

            //percorre a lista até a posição anterior á da inserção
            for(let i = 1; i < pos; i++){
                before = before.next;
            }

            //o nodo removido srá o seguinte
            removed = before.next;

            let after = removed.next;
            before.next = after;
        }

        this.#count--;
    }

}