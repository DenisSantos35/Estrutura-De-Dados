/*
const valor = [ 1, 2, 3, 4, 20, 50, 100 , 37, 48];

const chave = 12;

const num = valor.indexOf(chave)
console.log(num)

function sequencia(chave, array){
    let index = 0;
    for(let i of array){                
        if(i === chave){
            return index;
        }
        index += 1;
    }
    return -1;
}

const ind = sequencia(chave, valor);
console.log(ind)*/

//variaveis
const nome = "Alexandre"; //string
const idade = 20; //integer
const peso = 60.0; //float
const masculino = true; //boolean

const nomes = ["Rafael", "Sergio", "Claudio"]; //vetor
const cadastro = {
    nome: "Ale",
    idade: 42,
    peso: 92.01, 
    feminino: false
}
const botao = document.querySelector('.click');
const botao2 = document.querySelector('.btn');
const resultado = document.querySelector('#resultado');

class Obje{
    constructor(nome,idade,peso,sexo){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.sexo = sexo;
    };
    operacoes(x, y){
        let res = 50
        res += x + y;
        return res;
    };
    somar(num1=0, num2=0){
        let res = num1 + num2;
        return res;
    };
    f1(){
        console.log("teste de console");
        alert('Teste de alert');
    };
    f2(){
        let x;
        let r = confirm("Escolha um valor!");
        if(r === true){
            x = "Voce precionou Ok";
        }else{
            x = "Você precionou cancelar";
        }
        resultado.innerHTML = x
    }

}
const novocadastro = new Obje('Denis', 32, 52, 'masculino' );
console.log(novocadastro);
console.log(novocadastro.operacoes(30, 20));
console.log(novocadastro.somar(10,38));
botao2.addEventListener('click', novocadastro.f2);