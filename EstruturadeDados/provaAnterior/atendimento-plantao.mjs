/*
    1. O Professor Alexandre estava com febre e decidiu ir ao plantão médico.
    Quando ele chegou, havia 10 (dez) pessoas na sua frente:
    Angélica, Rafael, Isabela, Josimara, Janaina, Joyce, Venilton, Heloisa, Sandro e Cauã.
    
    2. Para que as pessoas sejam atendidas de forma correta e por ordem de chegada, como uma fila,
    o primeiro passo é importar a classe apropriada e depois criar o nosso "objeto" atendimento.
*/
class Queue{
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
            output += `(${i+1}: ${this.#data[i]})`;
    
        }
        return output += ']';
    }    
}

let atendimento = new Queue();

/*
    3. Faça com que a fila esteja na sequência a seguir para que o atendimento do plantão possa começar:
    
    1. Angélica
    2. Rafael
    3. Isabela
    4. Josimara
    5. Janaina
    6. Joyce
    7. Venilton
    8. Heloisa
    9. Sandro
    10. Cauã
    11. Alexandre
*/

atendimento.enqueue('Angélica');
atendimento.enqueue('Rafael');
atendimento.enqueue('Isabela');
atendimento.enqueue('Josimara');
atendimento.enqueue('Janaina');
atendimento.enqueue('Joyce');
atendimento.enqueue('Venilton');
atendimento.enqueue('Heloisa');
atendimento.enqueue('Sandro');
atendimento.enqueue('Cauã');
atendimento.enqueue('Alexandre');

/*
    4. Imprima a fila na ordem correta.
*/
console.log(atendimento.print());

/*
    5. O médico pediu ao atendente que chamasse a pessoa que estava na frente da fila.
    Logo ela foi removido da fila.
*/
let proximo = atendimento.peek();
atendimento.dequeue(proximo);

/*
    6. Mostre a pessoa que foi atendida e logo em seguida Imprima como ficou a fila depois do atendimento.
*/
console.log(`Pessoa atendida: ${proximo}`);
console.log(`Fila: ${atendimento.print()}`);

/*
    7. Equanto todos aguardavam o atendimento, chegaram mais 3 (três) pessoas na seguinte sequência:
    - Rodrigo
    - Juliano
    - Sophia
    Adicione eles na ordem da fila
*/
atendimento.enqueue('Rodrigo');
atendimento.enqueue('Juliano');
atendimento.enqueue('Sophia');

/*
    8. Imprima a fila na ordem correta depois das alterações.
*/
console.log(atendimento.print());

/*
    9. O médico pediu ao atendente qual o nome da próxima pessoa a ser atendida:
    Mostre qual o nome da próxima pessoa que será atendida.
*/
proximo = atendimento.peek();
console.log(`Próximo: ${proximo}`);

/*
    10. O médico pediu ao atendente que chamasse essa pessoa que estava na frente da fila.
    Logo ela foi removido da fila.
*/
atendimento.dequeue(proximo);
/*
    11. Imprima a fila na ordem correta depois de todas as alterações.
*/
console.log(atendimento.print());
