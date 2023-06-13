//ESTRUTURA DE DADOS LISTA ENCADEADA

/* Classe que representa a unidade de armazenamento
   da lista encadeada 
*/
class Node {
    data
    next
   constructor(val){
      this.data = val;  // Informação relevante para o usuário (valor)
      this.next = null; // Ponteiro para o próximo nodo da sequência
    }
  }
  
  /* 
    Classe que representa a estrutura de dados Lista Encadeada 
  */
  export default class LinkedList {
    
    #head   // Início da lista (cabeça)
    #tail   // Fim da lista (cauda) 
    #count  // Quantidade de nodos da lista 
  
    constructor(){
      this.#head = null;
      this.#tail = null;
      this.#count = 0;
    }
  
    // Getter que retorna se a lista encadeada está vazia ou não
    get isEmpty(){
      return (this.#count === 0);
    }
  
    // Getter que retorna a quantidade de nodos da lista encadeada
    get count(){
      return this.#count;
    }
  
    // Método para inserir em qualquer posição da lista encadeada
    insert(pos, val){
      const inserted = new Node(val); // Cria um novo nodo
  
      // 1º caso: se a lista estiver vazia
      if(this.isEmpty){
        this.#head = inserted
        this.#tail = inserted
      }
  
      // 2º caso: lista não está vazia, inserção na primeira posição
      else if(pos === 0){
        inserted.next = this.#head
        this.#head = inserted
      }
  
      // 3º caso: inserção no final da lista
      else if(pos >= this.#count){
        this.#tail.next = inserted
        this.#tail = inserted
      }
  
      // 4º caso: posição intermediária
      else {
          // Nodo da posição ANTERIOR à de inserção
          let before = this.#head  //começa pelo o primeiro nodo
  
          // Percorrer até a posição ANTERIOR à de inserção, saltando
          // de nodo em nodo por meio do ponteiro next
          for(let i = 1; i < pos; i++) before = before.next
            
          // Nodo da posição POSTERIOR à de inserção
          let after = before.next
  
          inserted.next = after
  
          before.next = inserted
      }
  
      this.#count++
  
    }
  
    // Método para inserir na primeira posição (atalho) 
    insertHead(val){
      this.insert(0, val)
    }
  
    // Método para inserir na última posição (atalho) 
    insertTail(val){
      this.insert(this.#count, val)
    }
  
    // Método para remoção de um nodo da lista
    
    remove(pos){
  
      // 1º caso: a lista está vazia ou a posição informada
      // está fora dos limites da lista
      
      if(this.isEmpty || pos < 0 || pos > this.#count -1) return undefined
  
      let removed
      
      // 2º caso: remoção do início da lista
      if (pos === 0) {
        removed = this.#head
  
        this.#head = this.#head.next
        
        // atulizando o tail em caso de remoção do único nodo restante
        if(this.#count === 1) this.#tail = null
  
      }
  
      // 3º caso: remoção de nodo intermediário ou final
      else {
        let before = this.#head
        
        // percorre a lista até a posição ANTERIOR à de remoção
        for(let i = 1; i < pos; i++) before = before.next
  
        // o nodo removido será o seguinte
        removed = before.next
  
        let after = removed.next
        
        before.next = after
  
        //atualizando o tail em caso de remoção do último nodo
        if(pos === this.#count -1 ) this.#tail = before
        console.log(this.#tail)
      }
  
      this.#count--
      return removed.data
    }
  
  
    removedHead(){
      return this.remove(0)
    }
  
    removedTail(){
      return this.remove(this.#count - 1)
    }
  
    indexOf(val){
      //1º caso: lista vazia]
      if(this.isEmpty) return -1
  
      //2º caso: se nodo contém o valor procurado, retorna a posição do nodo
      let node = this.#head
  
      for(let i = 0; i < this.#count; i++){
        if(node.data === val) return i
        node = node.next
      }
  
      return -1
  
    }
  
    peek(pos){
      //1º caso: lista vazia ou posição fora dos limites da lista
      if(this.isEmpty || pos < 0 || pos > this.#count - 1) return undefined
  
      //2º caso: busca sequencial
      let node = this.#head
  
      for(let i = 0; i < pos; i++) node = node.next
  
      return node.data
    }
  
    peekHead(){
      return this.peek(0)
    }
  
    peekTail(){
      return this.peek(this.#count - 1)
    }
  
    print(){
      let output = '( '
      let node = this.#head
      for(let i = 0; i < this.#count; i++){
        if(output !== '( ') {
          output += ', '
        }
        output += `[${i}]: ${node.data}`
        node = node.next
      }
      output += ` ), count: ${this.#count}`
      return output
    }
  }