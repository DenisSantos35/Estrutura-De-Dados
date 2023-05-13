export default class Queue{
    #data; //vetor privado
    constructor(){
        this.#data = [];

    }

    //inserir dados na fila
    enqueue(value){
        this.#data.push(value);
    }

    //remover dados da fila
    //retornar um valor para ser capturado o valor a ser retirado
    dequeue(){
        return this.#data.shift();
    }

    //Espiar o inicio da fila
    peek(){
        return this.#data[0];
    }
    //fila esta vazia
    get isEmpty(){
        return this.#data.length === 0;
    }

    //imprimir a fila
    print(){
        let output ='[';
        for(let i = 0; i < this.#data.length; i++){
            if(output !== '[') output += ',';
            output += `(${i}: ${this.#data[i]})`;
    
        }
        return output += ']';
    }    
}

