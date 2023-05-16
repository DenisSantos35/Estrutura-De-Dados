// Estrutura de dados deque

export default class Deque{
    #data; // atributoprivado

    constructor(){
        this.#data = []; // inicia com vetor vazio
    }

    //inserçao no inicio
    insertFront(val){
        this.#data.unshift(val);
    }

    //insercao no final
    insertBack(val){
        this.#data.push(val);
    }

    //remove no inicio
    removeFront(){
        return this.#data.shift();
    }

    //remove final
    removeBack(){
        return this.#data.pop();
    }

    // olhadina inico
    peekFronte(){
        return this.#data[0];
    }

    //olhadinha final
    peekBack(){
        return this.#data[this.#data.length - 1];
    }

    //está vazio
    get isEmpty(){
        return this.#data.length === 0;
    }
    print(){
        let output = '[';  
        for(let i = 0; i < this.#data.length; i++){
            if(output !== '[') output += ',';
            output += `( ${i} ): ${this.#data[i]})`;
    
        }
        return output += ']';
    }
}

